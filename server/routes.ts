import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Demo recommendations endpoint
  app.post('/api/demo/recommendations', (req, res) => {
    try {
      const { customerGoals, customerChallenges } = req.body;
      console.log('Received request:', { customerGoals, customerChallenges });

      const recommendations = [
        "Schedule a quarterly business review to align on goals",
        "Create personalized success plan",
        "Set up regular check-ins for feedback",
        "Implement automated health scoring"
      ];

      res.json({ recommendations });
    } catch (error) {
      console.error('Error generating recommendations:', error);
      res.status(500).json({ 
        message: 'Error generating recommendations',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  return createServer(app);
}