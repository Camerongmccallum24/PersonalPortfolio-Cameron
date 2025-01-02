import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticlesBackgroundProps {
  className?: string;
  particleCount?: number;
  maxSize?: number;
  minSize?: number;
}

export function ParticlesBackground({
  className = "",
  particleCount = 30,
  maxSize = 4,
  minSize = 1
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * -20
      }));
    };

    setParticles(generateParticles());

    const intervalId = setInterval(() => {
      setParticles(generateParticles());
    }, 20000); // Regenerate particles every 20 seconds

    return () => clearInterval(intervalId);
  }, [particleCount, maxSize, minSize]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 0,
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              scale: 0
            }}
            animate={{
              opacity: [0, 0.3, 0],
              x: [
                `${particle.x}%`,
                `${particle.x + (Math.random() * 10 - 5)}%`,
                `${particle.x + (Math.random() * 20 - 10)}%`
              ],
              y: [
                `${particle.y}%`,
                `${particle.y - 10}%`,
                `${particle.y - 20}%`
              ],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute bg-primary/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
