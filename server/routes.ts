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
      const parser = new Parser();
      
      const feed = await parser.parseURL('https://rss.beehiiv.com/feeds/ILy1gJzm7n.xml');
      
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
        message: 'Error fetching RSS feed',
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