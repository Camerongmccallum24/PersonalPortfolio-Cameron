import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Helmet } from "react-helmet";

export default function Projects() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "AI Tools Directory",
      description: "A comprehensive directory platform for discovering and comparing AI-powered Customer Success tools. Features include advanced search, detailed comparisons, and verified reviews to help CS teams make informed decisions about their tech stack.",
      image: "/images/ai-tools-directory.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Customer Success"],
    },
    {
      title: "Customer Success GPT Showcase",
      description: "A platform that demonstrates the capabilities of custom GPTs designed for Customer Success Managers. Features include sentiment analysis, churn prediction, and advanced analytics tailored to improve client retention and engagement.",
      image: "/images/customer-success-gpt.jpg",
      technologies: ["React", "TypeScript", "Vercel", "GPT-4", "Customer Success"],
    },
    {
      title: "Customer Success Portal",
      description: "A centralized platform for Customer Success Managers to manage client-specific knowledge bases, automate insights, and streamline workflows. Includes features for sentiment analysis, onboarding optimization, and multi-stakeholder collaboration.",
      image: "/images/customer-succes-portal.jpg",
      technologies: ["FastAPI", "Python", "Docker", "Replit", "Customer Success"],
    },
    {
      title: "Customer Success Automator",
      description: "An automation tool for Customer Success workflows, focusing on repetitive tasks like follow-ups, personalized support recommendations, and reporting. Designed to reduce manual effort and improve productivity.",
      image: "/images/customer-success-automator.jpeg",
      technologies: ["Python", "Automation", "API Integrations", "AI"],
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] pt-20 pb-16"
    >
      <Helmet>
        <title>Projects | Cameron McCallum</title>
        <meta 
          name="description" 
          content="Explore my portfolio of AI and Customer Success projects, showcasing innovative solutions and real-world impact."
        />
      </Helmet>

      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="space-y-8">
            <div className="h-8 w-48 bg-primary/10 rounded-lg animate-pulse" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-[480px] rounded-xl bg-primary/5 animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
            >
              Featured Projects
            </motion.h1>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.main>
  );
}