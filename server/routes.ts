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
  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Blog/RSS feed endpoint
  app.get('/api/rss', async (_req, res) => {
    try {
      console.log('Fetching RSS feed from:', RSS_URL);
      const response = await fetch(RSS_URL, {
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      const data = await response.json();
      const items = data.data.map((post: any) => ({
        title: post.title || 'Untitled Post',
        link: post.web_url || '#',
        pubDate: post.created_at || new Date().toISOString(),
        content: post.content || post.subtitle || 'No content available',
        author: 'AI Success Network',
        categories: post.tags || []
      }));

      res.setHeader('Content-Type', 'application/json');
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
  app.post('/api/demo/recommendations', async (req, res) => {
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
  app.post('/api/newsletter', async (req, res) => {
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

  const httpServer = createServer(app);
  return httpServer;
}