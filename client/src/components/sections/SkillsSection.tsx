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
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[100px]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <tech.Icon className="w-12 h-12 text-primary hover:text-primary/80 transition-colors duration-300" />
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}