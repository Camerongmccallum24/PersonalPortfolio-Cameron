import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Add health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Add a basic test endpoint
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running correctly' });
  });

  const httpServer = createServer(app);
  return httpServer;
}