
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
  level: number;
  type: 'Hard' | 'Soft';
  proficiency: string;
  example: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "Technical",
    skills: [
      { name: "SQL", level: 90, type: "Hard", proficiency: "Advanced", example: "Developed and executed complex SQL queries that reduced data processing time by 20% and improved data accuracy by 15%." },
      { name: "Data Cleaning & Preparation", level: 90, type: "Hard", proficiency: "Advanced", example: "Wrangled and transformed messy, real-world datasets using Python libraries like Pandas and NumPy, resulting in accurate and actionable insights for business decisions." },
      { name: "Power BI", level: 75, type: "Hard", proficiency: "Intermediate", example: "Created interactive dashboards and reports using Power BI to visualize data and provide insights." },
      { name: "API Integration", level: 70, type: "Hard", proficiency: "Intermediate", example: "Integrated various third-party APIs to enhance application functionality and improve user experience." },
      { name: "AI Automation Tools", level: 85, type: "Hard", proficiency: "Advanced", example: "Automated key workflows using AI tools, resulting in a 20% reduction in manual effort and a 10% improvement in process efficiency." },
      { name: "CRM Tools", level: 80, type: "Hard", proficiency: "Intermediate", example: "Effectively utilized CRM tools to manage customer interactions and track customer data." }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Customized GPT models for specific business needs, leading to a 10% increase in customer engagement and a 5% improvement in customer satisfaction." },
      { name: "Predictive Analytics", level: 90, type: "Hard", proficiency: "Advanced", example: "Developed and deployed machine learning models for predictive analytics, resulting in a 15% improvement in sales forecasting accuracy." },
      { name: "Machine Learning Integration", level: 75, type: "Hard", proficiency: "Intermediate", example: "Successfully integrated machine learning models into existing software applications, improving efficiency and automation." },
      { name: "Data Insights", level: 80, type: "Hard", proficiency: "Intermediate", example: "Extracted valuable insights from data to inform business decisions and drive strategic initiatives." }
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively communicated project updates and strategic initiatives to stakeholders, ensuring alignment and buy-in across all levels." },
      { name: "Client Retention", level: 90, type: "Soft", proficiency: "Advanced", example: "Developed and implemented client retention strategies that reduced customer churn by 12% and increased customer lifetime value by 8%." },
      { name: "Strategic Management", level: 85, type: "Soft", proficiency: "Advanced", example: "Managed strategic accounts effectively, leading to a 15% increase in account revenue and a 5% improvement in customer satisfaction." },
      { name: "Problem-Solving", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively solved customer problems and provided timely solutions to enhance customer satisfaction." }
    ]
  }
];

type SkillType = 'Hard' | 'Soft' | null;

export const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeSkillType, setActiveSkillType] = useState<SkillType>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skills.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const filteredSkills = skills[activeCategory].skills
    .filter(skill => !activeSkillType || skill.type === activeSkillType);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((category, index) => (
            <Button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              variant={activeCategory === index ? "default" : "outline"}
              className={`transition-all duration-300 hover:scale-105 ${
                category.category === "Technical" 
                  ? "border-blue-500" 
                  : category.category === "AI & Data Analytics"
                  ? "border-purple-500"
                  : "border-green-500"
              }`}
              size="lg"
              aria-label={`Show ${category.category} skills`}
            >
              {category.category}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Skills', 'Hard Skills', 'Soft Skills'].map((type) => (
            <Button
              key={type}
              onClick={() => setActiveSkillType(
                type === 'All Skills' ? null :
                type === 'Hard Skills' ? 'Hard' : 'Soft'
              )}
              variant={(type === 'All Skills' && activeSkillType === null) ||
                (type === 'Hard Skills' && activeSkillType === 'Hard') ||
                (type === 'Soft Skills' && activeSkillType === 'Soft')
                ? "default"
                : "outline"}
              className="transition-all duration-300 hover:scale-105"
            >
              {type}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <Card className="relative h-full bg-background/20 backdrop-blur-md border border-white/10 shadow-lg glassmorphism">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        {skill.name}
                      </h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        skill.proficiency === 'Advanced' 
                          ? 'text-emerald-500' 
                          : 'text-amber-500'
                      }`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Progress 
                        value={skill.level} 
                        className={`h-2 mb-2 ${
                          skills[activeCategory].category === "Technical" 
                            ? "[&>div]:bg-blue-500/70" 
                            : skills[activeCategory].category === "AI & Data Analytics"
                            ? "[&>div]:bg-purple-500/70"
                            : "[&>div]:bg-green-500/70"
                        }`}
                      />
                    </motion.div>
                    
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="mt-4 space-y-2"
                        >
                          <div className="text-sm font-medium">
                            {skill.proficiency} ({skill.level}%)
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {skill.example}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsVisualization;
