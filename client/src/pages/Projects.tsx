import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  const projects = [
    {
      title: "Customer Success GPT Showcase",
      description: "A platform that demonstrates the capabilities of custom GPTs designed for Customer Success Managers. Features include sentiment analysis, churn prediction, and advanced analytics tailored to improve client retention and engagement.",
      image: "/images/customer-success-gpt.jpg",
      tags: ["React", "TypeScript", "Vercel", "GPT-4", "Customer Success"],
      links: {
        demo: "https://gpt-showcase-murex.vercel.app/",
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
        demo: "URL-to-customer-success-portal-demo",
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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Featured Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [2, -2]);
            const rotateY = useTransform(x, [-100, 100], [-2, 2]);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                className="relative"
              >
                <motion.div
                  style={{ 
                    perspective: 2000,
                    x, y, rotateX, rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{ scale: 1.01 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.x + rect.width / 2;
                    const centerY = rect.y + rect.height / 2;
                    x.set((e.clientX - centerX) * 0.2);
                    y.set((e.clientY - centerY) * 0.2);
                  }}
                  onMouseLeave={() => {
                    x.set(0, { duration: 0.5, type: "spring", stiffness: 50 });
                    y.set(0, { duration: 0.5, type: "spring", stiffness: 50 });
                  }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <CardHeader className="relative aspect-video overflow-hidden p-0">
                        <motion.img 
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                        {/* Project Preview Tooltip */}
                        <TooltipProvider>
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
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
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    <p className="text-sm">Impact: {project.preview.impact}</p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium">Key Features:</p>
                                    <ul className="text-sm space-y-1">
                                      {project.preview.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                          <span className="h-1 w-1 rounded-full bg-primary" />
                                          {feature}
                                        </li>
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
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            className="px-1.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: "var(--primary)", 
                              color: "white",
                              transition: { duration: 0.2 }
                            }}
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
                          className="hover:scale-105 transition-transform text-xs bg-background/80 backdrop-blur-sm"
                        >
                          <a href={`/case-study/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <ExternalLink className="h-3 w-3 mr-1.5" />
                            View Case Study
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="hover:scale-105 transition-transform text-xs bg-background/80 backdrop-blur-sm"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1.5" />
                            Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.main>
  );
}