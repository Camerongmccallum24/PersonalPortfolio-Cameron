import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("Starting server...");

// Global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Don't exit on port binding errors
  if (error.code !== 'EADDRINUSE') {
    process.exit(1);
  }
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Function to try binding to a port
async function tryBindPort(port: number, maxAttempts: number = 3): Promise<number> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      // Try to kill any existing process on the port
      try {
        await execAsync(`lsof -i :${port} -t | xargs kill -9`);
        log(`Killed process on port ${port}`);
        // Wait a bit for the port to be released
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        // Ignore errors if no process was found
        log(`No process found on port ${port}`);
      }

      return port;
    } catch (error) {
      log(`Failed to bind to port ${port}, attempt ${attempt + 1}/${maxAttempts}`);
      if (attempt === maxAttempts - 1) {
        throw error;
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  throw new Error(`Failed to bind to port ${port} after ${maxAttempts} attempts`);
}

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

    // Try to bind to port 5000 first, then try alternative ports
    const ports = [5000, 3000, 3001];
    let boundPort = null;

    for (const port of ports) {
      try {
        boundPort = await tryBindPort(port);
        if (boundPort) break;
      } catch (error) {
        log(`Failed to bind to port ${port}, trying next port...`);
        continue;
      }
    }

    if (!boundPort) {
      throw new Error('Failed to bind to any available port');
    }

    server.listen(boundPort, "0.0.0.0", () => {
      log(`Server successfully started on port ${boundPort}`);
    });

    // Graceful shutdown handling
    const shutdown = () => {
      log('Shutting down gracefully...');
      server.close(() => {
        log('Server closed');
        process.exit(0);
      });

      setTimeout(() => {
        log('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
})();