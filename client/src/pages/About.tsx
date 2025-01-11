import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SkillsVisualization } from "@/components/sections/SkillsVisualization";
import { Button } from "@/components/ui/button";

export function About() {
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
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Hero Section with Profile */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            {/* Animated border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-64 h-64 rounded-full p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden relative z-10 transform"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/Profile_Picture.png" 
                  alt="Profile"
                  className="w-full h-full object-cover bg-gray-100"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = '../../../Profile_Picture.png';
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:flex-1 text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pioneering AI-Driven Customer Success
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              As a seasoned AI and Customer Success specialist with over a decade of experience in SaaS
              and enterprise environments, I blend technical expertise with business acumen to transform
              customer experiences and drive measurable growth.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Read More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
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

          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          <SkillsVisualization skills={skills} />
        </div>
      </div>
    </motion.main>
  );
}