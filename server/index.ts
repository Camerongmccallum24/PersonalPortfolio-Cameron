import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("Starting server...");

// Global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

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

    // Global error handler middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      log(`Error: ${message}`);
      res.status(status).json({ message });
    });

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const PORT = 5000; // Revert back to port 5000 as configured in .replit
    const MAX_RETRIES = 3;
    let currentTry = 0;
    let isShuttingDown = false;

    const startServer = () => {
      return new Promise((resolve, reject) => {
        if (isShuttingDown) {
          reject(new Error('Server is shutting down'));
          return;
        }

        // Close any existing connections before attempting to bind
        if (server.listening) {
          server.close(() => {
            log('Closed existing server connection');
          });
        }

        server.once('error', (error: any) => {
          log(`Server error encountered: ${error.message}`);
          if (error.code === 'EADDRINUSE') {
            log(`Port ${PORT} is busy, retrying...`);
            if (currentTry < MAX_RETRIES) {
              currentTry++;
              setTimeout(() => {
                if (!isShuttingDown) {
                  startServer().then(resolve).catch(reject);
                }
              }, 1000 * currentTry); // Exponential backoff
            } else {
              reject(new Error(`Could not bind to port ${PORT} after ${MAX_RETRIES} retries`));
            }
          } else {
            reject(error);
          }
        });

        server.listen(PORT, "0.0.0.0", () => {
          log(`Server successfully started on port ${PORT}`);
          resolve(true);
        });
      });
    };

    // Graceful shutdown handling
    const shutdown = () => {
      if (isShuttingDown) return;

      isShuttingDown = true;
      log('Shutting down gracefully...');

      server.close(() => {
        log('Server closed');
        process.exit(0);
      });

      // Force close after 10s
      setTimeout(() => {
        log('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

    await startServer();
  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
})();