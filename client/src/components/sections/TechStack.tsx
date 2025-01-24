import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiAmazonwebservices,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiPostgresql,
  SiNodedotjs,
  SiFastapi,
  SiKubernetes,
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

export function TechStack() {
  const techStack = [
    { Icon: SiReact, name: "React" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiAmazonwebservices, name: "AWS" },
    { Icon: SiTensorflow, name: "TensorFlow" },
    { Icon: SiScikitlearn, name: "Scikit-learn" },
    { Icon: SiPandas, name: "Pandas" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiFastapi, name: "FastAPI" },
    { Icon: SiKubernetes, name: "Kubernetes" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiFramer, name: "Framer Motion" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiRedis, name: "Redis" },
    { Icon: SiGraphql, name: "GraphQL" },
    { Icon: SiGit, name: "Git" },
  ];

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.div
            className="flex flex-row space-x-12 md:space-x-16 lg:space-x-20"
            initial={{ x: 0 }}
            animate={{
              x: [0, -3000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center space-y-3 min-w-[80px] md:min-w-[100px] group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <tech.Icon className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-colors duration-300 group-hover:text-primary" />
                <span className="text-xs md:text-sm lg:text-base text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}