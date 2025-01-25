import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Demo endpoint for CSM recommendations
  app.post('/api/demo/recommendations', (req, res) => {
    const { customerName, customerGoals, customerChallenges } = req.body;

    // Mock AI processing based on input
    const recommendations = [];
    let sentiment = "Neutral";

    // Process customer goals
    if (customerGoals?.toLowerCase().includes('adoption')) {
      recommendations.push(
        "Implement automated onboarding workflow to improve user adoption",
        "Create video tutorials for key features",
        "Schedule training sessions for new users"
      );
      sentiment = "Positive";
    }

    if (customerGoals?.toLowerCase().includes('retention')) {
      recommendations.push(
        "Set up regular check-ins to track satisfaction levels",
        "Create an early warning system for churn risk",
        "Develop a customer feedback loop"
      );
    }

    // Process challenges
    if (customerChallenges?.toLowerCase().includes('engagement')) {
      recommendations.push(
        "Launch an engagement campaign with targeted content",
        "Implement gamification elements",
        "Create a customer success roadmap"
      );
      sentiment = "Opportunity";
    }

    // Default recommendations if no specific matches
    if (recommendations.length === 0) {
      recommendations.push(
        "Schedule a quarterly business review to align on goals",
        "Create personalized success plan",
        "Implement automated health scoring",
        "Set up regular check-ins for feedback"
      );
    }

    // Add personalization if name is provided
    const response = {
      sentiment,
      recommendations,
      summary: customerName 
        ? `Recommendations for ${customerName}'s success journey`
        : "Strategic recommendations for customer success",
    };

    res.json(response);
  });

  // Add a basic test endpoint
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running correctly' });
  });

  const httpServer = createServer(app);
  return httpServer;
}