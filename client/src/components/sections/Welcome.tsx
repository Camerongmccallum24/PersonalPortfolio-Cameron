import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function Welcome() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  // Only show welcome animation on home page
  if (!isFirstVisit || location !== "/") return null;

  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 backdrop-blur-lg"
          style={{
            background: `
              radial-gradient(circle at top left, var(--primary) 0%, transparent 50%),
              radial-gradient(circle at bottom right, hsl(265, 89%, 78%) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative text-center space-y-12 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient">
              Welcome to My Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-2xl text-foreground/80 max-w-2xl mx-auto"
          >
            Explore my journey in Customer Success and AI-Driven Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="text-primary text-xl font-medium"
            >
              <span className="opacity-80">↓</span>
              <br />
              Scroll to Explore
              <br />
              <span className="opacity-80">↓</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Fade out overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3.5, duration: 1.2 }}
          onAnimationComplete={() => setIsFirstVisit(false)}
          className="absolute inset-0 bg-background"
        />
      </motion.div>
    </AnimatePresence>
  );
}