import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { Helmet } from "react-helmet";

export default function Projects() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "AI Tools Directory",
      description: "A comprehensive directory platform for discovering and comparing AI-powered Customer Success tools. Features include advanced search, detailed comparisons, and verified reviews to help CS teams make informed decisions about their tech stack.",
      image: "/images/ai-tools-directory.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Customer Success"],
      links: {
        demo: "client/src/pages/CaseStudyAutomator.tsx",
        github: "https://github.com/camerongmccallum24/AIToolsDirectory"
      },
      preview: {
        impact: "Streamlined tool discovery for Customer Success teams",
        features: ["Advanced Search", "Tool Comparisons", "Verified Reviews"],
        status: "Live Demo Available"
      }
    },
    {
      title: "Customer Success GPT Showcase",
      description: "A platform that demonstrates the capabilities of custom GPTs designed for Customer Success Managers. Features include sentiment analysis, churn prediction, and advanced analytics tailored to improve client retention and engagement.",
      image: "/images/customer-success-gpt.jpg",
      tags: ["React", "TypeScript", "Vercel", "GPT-4", "Customer Success"],
      links: {
        demo: "https://customer-success-portfolio.camerongmccallum.repl.co/case-study/customer-success-gpt-showcase",
        github: "https://github.com/camerongmccallum24/GPTShowcase"
      },
      preview: {
        impact: "40% reduction in response time",
        features: ["Sentiment Analysis", "Churn Prediction", "Custom GPT Integration"],
        status: "Live Demo Available"
      }
    },
    {
      title: "Customer Success Portal",
      description: "A centralized platform for Customer Success Managers to manage client-specific knowledge bases, automate insights, and streamline workflows. Includes features for sentiment analysis, onboarding optimization, and multi-stakeholder collaboration.",
      image: "/images/customer-succes-portal.jpg",
      tags: ["FastAPI", "Python", "Docker", "Replit", "Customer Success"],
      links: {
        demo: "https://customer-success-portfolio.camerongmccallum.repl.co/case-study/customer-success-portal",
        github: "https://github.com/camerongmccallum24"
      },
      preview: {
        impact: "95% client satisfaction rate",
        features: ["Knowledge Base", "Workflow Automation", "Analytics Dashboard"],
        status: "In Development"
      }
    },
    {
      title: "Customer Success Automator",
      description: "An automation tool for Customer Success workflows, focusing on repetitive tasks like follow-ups, personalized support recommendations, and reporting. Designed to reduce manual effort and improve productivity.",
      image: "/images/customer-success-automator.jpeg",
      tags: ["Python", "Automation", "API Integrations", "AI"],
      links: {
        demo: "URL-to-customer-success-automator-demo",
        github: "https://github.com/camerongmccallum24"
      },
      preview: {
        impact: "70% reduction in manual tasks",
        features: ["Task Automation", "Smart Recommendations", "Performance Analytics"],
        status: "Beta Testing"
      }
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
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
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90 opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <CardHeader className="relative aspect-video overflow-hidden p-0">
                        <motion.img 
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                        <div className="absolute top-2 right-2 z-50 flex items-center gap-2">
                          <ShareButtons
                            title={project.title}
                            description={project.description}
                            url={`${window.location.origin}/case-study/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all duration-300 hover:rotate-12"
                                >
                                  <Info className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent
                                side="right"
                                className="w-80 p-4 space-y-2"
                              >
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-sm">{project.title}</h4>
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                      <p className="text-sm">Impact: {project.preview.impact}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Key Features:</p>
                                      <ul className="text-sm space-y-1">
                                        {project.preview.features.map((feature, i) => (
                                          <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-2"
                                          >
                                            <span className="h-1 w-1 rounded-full bg-primary" />
                                            {feature}
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                      <span className="h-2 w-2 rounded-full bg-primary" />
                                      <p className="text-sm">Status: {project.preview.status}</p>
                                    </div>
                                  </div>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </CardHeader>
                    </motion.div>

                    <CardContent className="relative z-10 pt-4 px-4">
                      <motion.h3 
                        className="text-lg font-semibold mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-muted-foreground mb-3 line-clamp-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-1.5 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.4 + (tagIndex * 0.1),
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "var(--primary)",
                              color: "white",
                              transition: { duration: 0.2 }
                            }}
                            className="px-1.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div 
                        className="flex gap-3 mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="hover:scale-105 transition-transform text-xs bg-background/80 backdrop-blur-sm relative group overflow-hidden"
                        >
                          <a href={`/case-study/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                            <ExternalLink className="h-3 w-3 mr-1.5" />
                            View Case Study
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="hover:scale-105 transition-transform text-xs bg-background/80 backdrop-blur-sm relative group overflow-hidden"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                            <Github className="h-3 w-3 mr-1.5" />
                            Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.main>
  );
}