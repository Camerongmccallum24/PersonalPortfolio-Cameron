import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react"; // Line arrows

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
      { name: "SQL", level: 90, type: "Hard", proficiency: "Advanced", example: "Developed and executed complex SQL queries..." },
      { name: "Data Cleaning & Preparation", level: 90, type: "Hard", proficiency: "Advanced", example: "Wrangled and transformed messy datasets..." },
      { name: "Power BI", level: 75, type: "Hard", proficiency: "Intermediate", example: "Created interactive dashboards using Power BI..." },
      // other skills...
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Customized GPT models for specific business needs..." },
      // other skills...
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively communicated project updates..." },
      // other skills...
    ]
  }
];

type SkillType = 'Hard' | 'Soft' | null;

export const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeSkillType, setActiveSkillType] = useState<SkillType>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skills.length);
    }, 7800);
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition duration-300" />
                <Card className="relative h-full bg-background/20 backdrop-blur-md border-2 border-white/30 shadow-lg glassmorphism">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                          skill.proficiency === 'Advanced' 
                            ? 'text-emerald-500' 
                            : 'text-amber-500'
                        }`}>
                          {skill.proficiency}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          className="text-sm text-muted-foreground"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.65, delay: index * 0.13 }}
                    >
                      <Progress 
                        value={skill.level} 
                        className={`h-2 mb-2 bg-gray-200/10 ${
                          skills[activeCategory].category === "Technical"
                            ? "[&>div]:bg-blue-400/70"
                            : skills[activeCategory].category === "AI & Data Analytics"
                            ? "[&>div]:bg-purple-400/70"
                            : "[&>div]:bg-green-400/70"
                        }`}
                      />
                    </motion.div>

                    <div 
                      onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)} 
                      className="absolute top-2 right-2 cursor-pointer text-xl"
                    >
                      {expandedSkill === skill.name ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />} 
                    </div>

                    <AnimatePresence>
                      {expandedSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="mt-4 space-y-2"
                        >
                          <div className={`text-sm font-medium px-2 py-1 border rounded-sm inline-block ${
                            skills[activeCategory].category === "Technical"
                              ? "border-blue-500/50"
                              : skills[activeCategory].category === "AI & Data Analytics"
                              ? "border-purple-500/50"
                              : "border-green-500/50"
                          }`}>
                            Skill Type: {skill.type}
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