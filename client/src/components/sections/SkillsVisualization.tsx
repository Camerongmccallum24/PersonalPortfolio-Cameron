import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Define the skills data structure
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
      { name: "AI Automation Tools", level: 85, type: "Hard", proficiency: "Advanced", example: "Utilized AI automation tools to streamline processes and improve efficiency." },
      { name: "CRM Tools", level: 80, type: "Hard", proficiency: "Intermediate", example: "Effectively utilized CRM tools to manage customer interactions and track customer data." }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Customized GPT models for specific business needs, leading to a 10% increase in customer engagement and a 5% improvement in customer satisfaction." },
      { name: "Predictive Analytics", level: 90, type: "Hard", proficiency: "Advanced", example: "Developed and deployed machine learning models for predictive analytics, resulting in a 15% improvement in sales forecasting accuracy." },
      { name: "Machine Learning Integration", level: 75, type: "Hard", proficiency: "Intermediate", example: "Successfully integrated machine learning models into existing software applications, improving efficiency and automation." },
      { name: "Data Insights", level: 80, type: "Hard", proficiency: "Intermediate", example: "Extracted valuable insights from data to inform business decisions and drive strategic initiatives." },
      { name: "Data Exploration", level: 90, type: "Hard", proficiency: "Advanced", example: "Conducted thorough data exploration to identify patterns, trends, and anomalies in large datasets." },
      { name: "Data Visualization", level: 90, type: "Hard", proficiency: "Advanced", example: "Created compelling data visualizations to communicate complex data findings to stakeholders." }
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively communicated project updates and strategic initiatives to stakeholders, ensuring alignment and buy-in across all levels." },
      { name: "Client Retention Strategies", level: 90, type: "Soft", proficiency: "Advanced", example: "Developed and implemented client retention strategies that reduced customer churn by 12% and increased customer lifetime value by 8%." },
      { name: "Strategic Account Management", level: 85, type: "Soft", proficiency: "Advanced", example: "Managed strategic accounts effectively, leading to a 15% increase in account revenue and a 5% improvement in customer satisfaction." },
      { name: "Emotional Intelligence", level: 90, type: "Soft", proficiency: "Advanced", example: "Leveraged emotional intelligence to build strong customer relationships and resolve conflicts effectively." },
      { name: "Problem-Solving", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively solved customer problems and provided timely solutions to enhance customer satisfaction." },
      { name: "Customer-centric", level: 90, type: "Soft", proficiency: "Advanced", example: "Demonstrated a customer-centric approach in all interactions and decisions, prioritizing customer needs and satisfaction." }
    ]
  }
];

type SkillType = 'Hard' | 'Soft' | null;

export function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeSkillType, setActiveSkillType] = useState<SkillType>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const filteredSkills = skills[activeCategory].skills
    .filter(skill => !activeSkillType || skill.type === activeSkillType);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          {skills.map((category, index) => (
            <Button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              variant={activeCategory === index ? "default" : "outline"}
              className="transition-all duration-300"
            >
              {category.category}
            </Button>
          ))}
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          <Button 
            onClick={() => setActiveSkillType(null)}
            variant={activeSkillType === null ? "default" : "outline"}
          >
            All Skills
          </Button>
          <Button 
            onClick={() => setActiveSkillType('Hard')}
            variant={activeSkillType === 'Hard' ? "default" : "outline"}
          >
            Hard Skills
          </Button>
          <Button 
            onClick={() => setActiveSkillType('Soft')}
            variant={activeSkillType === 'Soft' ? "default" : "outline"}
          >
            Soft Skills
          </Button>
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative"
              >
                <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-6 pb-4 px-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-lg">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                    <div className="mt-2 text-sm text-muted-foreground">
                      Proficiency: {skill.proficiency}
                    </div>

                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/80 p-4 rounded-lg flex items-center justify-center"
                      >
                        <p className="text-white text-center text-sm">{skill.example}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsVisualization;