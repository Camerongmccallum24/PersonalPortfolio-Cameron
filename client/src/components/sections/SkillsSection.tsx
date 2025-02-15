import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiAmazon,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiPostgresql,
  SiNodedotjs,
  SiFastapi,
  SiKubernetes,
} from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import line arrows

export function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null); // Track expanded skill
  const techStack = [
    { Icon: SiReact, name: "React" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiAmazon, name: "AWS" },
    { Icon: SiTensorflow, name: "TensorFlow" },
    { Icon: SiScikitlearn, name: "Scikit-learn" },
    { Icon: SiPandas, name: "Pandas" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiFastapi, name: "FastAPI" },
    { Icon: SiKubernetes, name: "Kubernetes" },
  ];

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        <div className="relative">
          <motion.div
            className="carousel"
            initial={{ x: 0 }}
            animate={{
              x: [0, -1920],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[100px] icon-hover relative group"
              >
                <tech.Icon className="w-12 h-12" />
                <span className="text-sm text-muted-foreground">{tech.name}</span>

                {/* Hoverable detail box */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 w-36 p-2 bg-black text-white text-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <motion.p className="text-xs">Learn more about {tech.name}</motion.p>
                </div>

                {/* Expandable arrow for mobile */}
                <div
                  onClick={() =>
                    setExpandedSkill(expandedSkill === tech.name ? null : tech.name)
                  }
                  className="absolute top-2 right-2 cursor-pointer text-xl"
                >
                  {expandedSkill === tech.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
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