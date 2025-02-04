import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
    const server = registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      console.error(err);
    });

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const tryPort = async (port: number): Promise<number> => {
      try {
        await new Promise((resolve, reject) => {
          server.listen(port, '0.0.0.0')
            .once('listening', () => {
              server.close();
              resolve(port);
            })
            .once('error', reject);
        });
        return port;
      } catch {
        return port < 3010 ? tryPort(port + 1) : Promise.reject(new Error('No available ports'));
      }
    };

    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    const HOST = '0.0.0.0';
    
    tryPort(PORT)
      .then(availablePort => {
        server.listen(availablePort, HOST, () => {
          log(`Server running on http://${HOST}:${availablePort}`);
        });
      })
      .catch(error => {
        log(`Failed to start server: ${error.message}`);
        process.exit(1);
      });
  } catch (error) {
    log(`Failed to start application: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }
})();