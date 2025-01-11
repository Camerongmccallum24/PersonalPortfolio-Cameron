
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SkillsVisualization } from "@/components/sections/SkillsVisualization";

export default function About() {
  const skills = [
    // Frontend
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "TailwindCSS", level: 75, category: "Frontend" },
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    
    // Backend
    { name: "FastAPI", level: 85, category: "Backend" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "SQL", level: 80, category: "Backend" },
    { name: "Express.js", level: 70, category: "Backend" },
    
    // Tools
    { name: "Firebase", level: 80, category: "Tools" },
    { name: "Vercel", level: 85, category: "Tools" },
    { name: "Replit", level: 80, category: "Tools" },
    { name: "GitHub", level: 90, category: "Tools" },
    { name: "Make (Integromat)", level: 75, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    
    // AI & Data Analytics
    { name: "GPT-4 Customization", level: 85, category: "AI & Data Analytics" },
    { name: "Predictive Analytics", level: 80, category: "AI & Data Analytics" },
    { name: "Sentiment Analysis", level: 85, category: "AI & Data Analytics" },
    { name: "Data Visualization", level: 75, category: "AI & Data Analytics" },
    { name: "Machine Learning", level: 70, category: "AI & Data Analytics" },
    
    // Customer Success
    { name: "CRM Platforms", level: 85, category: "Customer Success" },
    { name: "AI-Driven Customer Retention", level: 90, category: "Customer Success" },
    { name: "Workflow Automation", level: 80, category: "Customer Success" },
    { name: "Customer Journey Mapping", level: 85, category: "Customer Success" },
    { name: "Client Engagement & Training", level: 90, category: "Customer Success" }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-4">
                Throughout my career, I have been involved in various sectors
                like SaaS, recruitment, and travel, enhancing client success
                strategies. I specialize in platforms such as Salesforce and 
                Gainsight, AI development, and advanced data analytics.
              </p>
            </CardContent>
          </Card>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8"
              >
                My Mission
              </motion.h1>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    My goal is to assist businesses in leveraging AI and
                    automation to enhance customer experiences through 
                    personalized and efficient interactions. I focus on 
                    actionable insights and continuous improvement to deliver 
                    long-term value for clients.
                  </p>
                </CardContent>
              </Card>

              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8"
                  >
                    Outside the Office
                  </motion.h1>

                  <Card className="mb-8">
                    <CardContent className="pt-6">
                      <p className="text-lg text-muted-foreground mb-4">
                        Beyond my professional life in AI and SaaS, I relish living 
                        in Manchester, reminiscing about my 14-year tenure in Soho, 
                        London, and maintaining ties to my Australian heritage. I'm 
                        deeply invested in lifelong learning, sharing knowledge, and 
                        fostering community collaboration.
                      </p>
                    </CardContent>
                  </Card>

                  <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
                  <SkillsVisualization skills={skills} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default About;
