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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
      >
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my journey in Customer Success and AI-Driven Solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-primary opacity-80"
            >
              ↓ Scroll to Explore ↓
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          onAnimationComplete={() => setIsFirstVisit(false)}
          className="absolute inset-0 bg-background"
        />
      </motion.div>
    </AnimatePresence>
  );
}
