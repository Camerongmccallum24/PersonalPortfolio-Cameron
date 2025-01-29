
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
      { name: "SQL", level: 90, type: "Hard", proficiency: "Advanced", example: "Complex queries and data processing optimization" },
      { name: "Data Cleaning & Preparation", level: 90, type: "Hard", proficiency: "Advanced", example: "Data wrangling with Python libraries" },
      { name: "Power BI", level: 75, type: "Hard", proficiency: "Intermediate", example: "Interactive dashboards and reports" },
      { name: "API Integration", level: 70, type: "Hard", proficiency: "Intermediate", example: "Third-party API implementation" },
      { name: "AI Automation Tools", level: 85, type: "Hard", proficiency: "Advanced", example: "Process automation and efficiency" },
      { name: "CRM Tools", level: 80, type: "Hard", proficiency: "Intermediate", example: "Customer data management" }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Custom GPT models for business solutions" },
      { name: "Predictive Analytics", level: 90, type: "Hard", proficiency: "Advanced", example: "ML models for forecasting" },
      { name: "Machine Learning Integration", level: 75, type: "Hard", proficiency: "Intermediate", example: "ML model deployment" },
      { name: "Data Insights", level: 80, type: "Hard", proficiency: "Intermediate", example: "Strategic data analysis" }
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Strategic alignment and project updates" },
      { name: "Client Retention", level: 90, type: "Soft", proficiency: "Advanced", example: "Customer retention strategies" },
      { name: "Strategic Management", level: 85, type: "Soft", proficiency: "Advanced", example: "Account growth and satisfaction" },
      { name: "Problem-Solving", level: 90, type: "Soft", proficiency: "Advanced", example: "Effective solution delivery" }
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
              className="transition-all duration-300 hover:scale-105"
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
                <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {skill.name}
                    </h3>
                    <Progress 
                      value={skill.level} 
                      className="h-2 mb-2"
                    />
                    
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
