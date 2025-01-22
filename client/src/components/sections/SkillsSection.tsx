import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiPython, SiDocker, SiAmazon, 
         SiTensorflow, SiScikitlearn, SiPandas, SiPostgresql, 
         SiNodedotjs, SiFastapi, SiKubernetes } from 'react-icons/si';

export function SkillsSection() {
  const techStack = [
    { Icon: SiReact, name: 'React' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiPython, name: 'Python' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: SiAmazon, name: 'AWS' },
    { Icon: SiTensorflow, name: 'TensorFlow' },
    { Icon: SiScikitlearn, name: 'Scikit-learn' },
    { Icon: SiPandas, name: 'Pandas' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: SiFastapi, name: 'FastAPI' },
    { Icon: SiKubernetes, name: 'Kubernetes' },
  ];

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        <div className="relative">
          <motion.div 
            className="flex space-x-12 overflow-hidden"
            initial={{ x: 0 }}
            animate={{ 
              x: [0, -1920], // Adjust based on content width
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }
              }
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[100px]"
                whileHover={{ 
                  scale: 1.1,
                  filter: "brightness(1.2)",
                  transition: { duration: 0.2 }
                }}
              >
                <tech.Icon 
                  className="w-12 h-12 text-primary hover:text-primary/80 transition-all duration-300 transform hover:-translate-y-1" 
                />
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}