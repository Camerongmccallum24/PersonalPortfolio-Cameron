import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS headers for API routes
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });
  next();
});

(async () => {
  try {
    // Register API routes first, before any other middleware
    const server = registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      console.error(err);
    });

    // Configure static file serving and production setup
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      // Serve static files from dist/public
      app.use(express.static("dist/public"));

      // Serve index.html for client-side routing
      app.get("*", (_req, res) => {
        res.sendFile("dist/public/index.html", { root: "." });
      });
    }

    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    const HOST = '0.0.0.0'; // Change from localhost to 0.0.0.0

    // Ensure all routes are registered before starting server
    app.get('*', (_req, res) => {
      res.sendFile('dist/public/index.html', { root: '.' });
    });

    // Starting the server
    return new Promise<void>((resolve, reject) => {
      server.listen(PORT, HOST, () => {
        console.log(`Server ready on port ${PORT}`);
        log(`Server running on http://${HOST}:${PORT}`);
        // Add a small delay to ensure the server is fully ready
        setTimeout(() => {
          resolve();
        }, 1000);
      }).on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
})();  // <- Missing closing bracket added here
