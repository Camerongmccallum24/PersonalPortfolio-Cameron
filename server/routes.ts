import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from 'express';
import fetch from 'node-fetch';

// RSS API URL and configuration - Updated to v2 format
const RSS_URL = `https://api.beehiiv.com/v2/publications/pub_635251cb-7233-42d9-82e3-0bd17ca0a8a3/posts`;
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || '';

// Input validation schemas remain unchanged
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const recommendationsSchema = z.object({
  customerGoals: z.string().min(1, "Customer goals are required"),
  customerChallenges: z.string().min(1, "Customer challenges are required"),
});

export function registerRoutes(app: Express): Server {
  const apiRouter = Router();

  // Health check endpoint remains unchanged
  apiRouter.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Blog/RSS feed endpoint with improved logging and authorization
  apiRouter.get('/rss', async (_req, res) => {
    try {
      if (!BEEHIIV_API_KEY) {
        throw new Error('BeehiV API key is not configured');
      }

      console.log('Fetching BeehiV posts from:', RSS_URL);
      const response = await fetch(RSS_URL, {
        method: 'GET',
        headers: {
          'Authorization': BEEHIIV_API_KEY, // Direct API key without prefix
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('BeehiV API Error:', response.status, errorText);
        throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('BeehiV API Response:', JSON.stringify(data, null, 2));

      // Transform the v2 API response to match our frontend expectations
      const items = data.data.map((post: any) => ({
        title: post.title || 'Untitled Post',
        link: post.web_url || '#',
        pubDate: post.created_at || new Date().toISOString(),
        content: post.content || post.subtitle || 'No content available',
        author: 'AI Success Network',
        categories: post.tags || []
      }));

      res.json({ 
        success: true, 
        items
      });
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error fetching RSS feed - please try again later',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Demo recommendations endpoint with validation
  apiRouter.post('/demo/recommendations', async (req, res) => {
    try {
      const validatedData = recommendationsSchema.parse(req.body);
      const { customerGoals, customerChallenges } = validatedData;

      // Generate recommendations based on input
      const recommendations = [
        `Based on your goal "${customerGoals.slice(0, 30)}...", implement regular success reviews`,
        `To address "${customerChallenges.slice(0, 30)}...", establish clear KPIs and metrics`,
        "Create a detailed onboarding plan with clear milestones",
        "Schedule monthly strategy sessions to track progress",
        "Implement automated health scoring system"
      ];

      res.json({ 
        success: true,
        recommendations,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors
        });
      }

      console.error('Error generating recommendations:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error generating recommendations',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Newsletter signup endpoint
  apiRouter.post('/newsletter', async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      const { email } = validatedData;

      // TODO: Add your newsletter service integration here
      // For now, we'll just return a success response
      res.json({
        success: true,
        message: "Successfully subscribed to newsletter",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors
        });
      }

      console.error('Error processing newsletter signup:', error);
      res.status(500).json({
        success: false,
        message: 'Error processing newsletter signup',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Mount API routes
  app.use('/api', apiRouter);

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}