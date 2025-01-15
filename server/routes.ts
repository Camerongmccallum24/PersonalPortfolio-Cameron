
import type { Express } from "express";
import { createServer, type Server } from "http";
import { addProject, addCaseStudy } from "../db/insert";

export function registerRoutes(app: Express): Server {
  app.post("/api/projects", async (req, res) => {
    const result = await addProject(req.body);
    if (result.success) {
      res.status(201).json({ message: "Project added successfully" });
    } else {
      res.status(500).json({ message: "Failed to add project", error: result.error });
    }
  });

  app.post("/api/case-studies", async (req, res) => {
    const result = await addCaseStudy(req.body);
    if (result.success) {
      res.status(201).json({ message: "Case study added successfully" });
    } else {
      res.status(500).json({ message: "Failed to add case study", error: result.error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
