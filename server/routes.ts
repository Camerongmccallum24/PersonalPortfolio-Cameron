import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Newsletter schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Input validation schemas
const recommendationsSchema = z.object({
  customerGoals: z.string().min(1, "Customer goals are required"),
  customerChallenges: z.string().min(1, "Customer challenges are required"),
});

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
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
  // RSS feed endpoint
  app.get('/api/rss', async (_req, res) => {
    try {
      const Parser = require('rss-parser');
      const parser = new Parser({
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; RSS-Reader/1.0)'
        }
      });
      
      console.log('Fetching RSS feed...');
      const feed = await parser.parseURL('https://rss.beehiiv.com/feeds/ILy1gJzm7n.xml');
      console.log(`Found ${feed.items?.length || 0} posts`);
      
      if (!feed.items?.length) {
        return res.json({
          success: true,
          items: [],
          message: 'No posts found'
        });
      }
      
      res.json({
        success: true,
        title: feed.title,
        description: feed.description,
        items: feed.items
      });
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching RSS feed - please ensure the RSS feed URL is correct and accessible',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

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
import express from 'express';
const router = express.Router();

router.get('/api/rss', async (req, res) => {
  try {
    // Mock data for now - replace with actual RSS feed fetch
    const mockPosts = [
      {
        title: "Getting Started with Customer Success",
        link: "https://example.com/post1",
        pubDate: new Date().toISOString(),
        content: "Customer success is crucial for business growth..."
      },
      {
        title: "AI in Customer Support",
        link: "https://example.com/post2",
        pubDate: new Date().toISOString(),
        content: "Artificial intelligence is transforming customer support..."
      }
    ];
    
    res.json({ success: true, items: mockPosts });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch RSS feed' });
  }
});

export default router;
