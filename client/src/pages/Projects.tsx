import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <Card className="h-full overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHeader className="relative aspect-video overflow-hidden p-0">
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
                    className="flex flex-wrap gap-1.5 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-1.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="hover:scale-105 transition-transform text-xs"
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
                      className="hover:scale-105 transition-transform text-xs"
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
          ))}
        </div>
      </div>
    </motion.main>
  );
}