import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Demo endpoint for CSM recommendations
  app.post('/api/demo/recommendations', (req, res) => {
    const { customerGoals, customerChallenges } = req.body;

    // Simple recommendation logic
    const recommendations = [
      "Schedule a quarterly business review to align on goals",
      "Create personalized success plan",
      "Set up regular check-ins for feedback",
      "Implement automated health scoring"
    ];

    res.json({
      recommendations
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}