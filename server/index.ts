import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("Starting server...");

// Global error handler for uncaught exceptions
process.on('uncaughtException', (error: NodeJS.ErrnoException) => {
  console.error('Uncaught Exception:', error);
  if (error.code !== 'EADDRINUSE') {
    process.exit(1);
  }
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Middleware for logging
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

let activeServer: ReturnType<typeof createServer> | null = null;

// Try ports starting from startPort until we find an available one
const findAvailablePort = async (startPort: number, maxAttempts: number = 10): Promise<number> => {
  for (let port = startPort; port < startPort + maxAttempts; port++) {
    try {
      const server = createServer();
      await new Promise<void>((resolve, reject) => {
        server.once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            server.close();
            resolve();
          } else {
            reject(err);
          }
        });
        server.once('listening', () => {
          server.close();
          resolve();
        });
        server.listen(port, '0.0.0.0');
      });
      return port;
    } catch (err) {
      if (port === startPort + maxAttempts - 1) {
        throw new Error('No available ports found');
      }
    }
  }
  throw new Error('No available ports found');
};

const startServer = async (): Promise<void> => {
  try {
    const port = await findAvailablePort(5000);
    const server = registerRoutes(app);
    activeServer = server;

    // Error handling middleware
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

    return new Promise((resolve, reject) => {
      server.listen(port, "0.0.0.0")
        .once('listening', () => {
          log(`Server successfully started on port ${port}`);
          resolve();
        })
        .once('error', (err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.error('Server failed to start:', error);
    throw error;
  }
};

// Start the server
startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

// Graceful shutdown handling
const shutdown = () => {
  log('Shutting down gracefully...');
  if (activeServer) {
    activeServer.close(() => {
      log('Server closed');
      process.exit(0);
    });

    // Force shutdown after 10 seconds
    setTimeout(() => {
      log('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);