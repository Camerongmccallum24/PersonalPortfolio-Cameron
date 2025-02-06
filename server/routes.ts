import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from 'express';
import fetch from 'node-fetch';

// RSS API URL and configuration
const RSS_URL = `https://api.beehiiv.com/v2/publications/pub_635251cb-7233-42d9-82e3-0bd17ca0a8a3/posts`;
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || '';

// Input validation schemas
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const recommendationsSchema = z.object({
  customerGoals: z.string().min(1, "Customer goals are required"),
  customerChallenges: z.string().min(1, "Customer challenges are required"),
});

export function registerRoutes(app: Express): Server {
  const apiRouter = Router();

  // Health check endpoint
  apiRouter.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Blog/RSS feed endpoint
  apiRouter.get('/rss', async (_req, res) => {
    // Set headers early
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    try {
      if (!BEEHIIV_API_KEY) {
        throw new Error('BeehiV API key is not configured');
      }

      console.log('Fetching BeehiV posts from:', RSS_URL);
      const response = await fetch(RSS_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const responseText = await response.text();
      console.log('BeehiV API Response:', response.status, responseText);

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse JSON response:', e);
        throw new Error('Invalid response format from BeehiV API');
      }

      if (!data || !Array.isArray(data.data)) {
        console.error('Unexpected API response structure:', data);
        throw new Error('Invalid response format from BeehiV API');
      }

      const items = data.data.map((post: any) => ({
        title: post.title || 'Untitled Post',
        link: post.web_url || '#',
        pubDate: post.created_at || new Date().toISOString(),
        content: post.content || post.subtitle || 'No content available',
        author: 'AI Success Network',
        categories: post.tags || []
      }));

      return res.json({ 
        success: true, 
        items
      });
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      return res.status(500).json({ 
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

  // Mount API routes before any other middleware
  app.use('/api', apiRouter);

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}