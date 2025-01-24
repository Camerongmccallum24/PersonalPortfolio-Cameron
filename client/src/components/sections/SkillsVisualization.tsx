import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const skills = [
  {
    category: "Technical",
    skills: [
      { name: "SQL", level: 90, type: "Hard", proficiency: "Advanced", example: "Skilled in querying and analyzing data in SQL databases" },
      { name: "Data Cleaning & Preparation", level: 90, type: "Hard", proficiency: "Advanced", example: "Identifying and rectifying data inconsistencies" },
      { name: "Power BI", level: 75, type: "Hard", proficiency: "Intermediate", example: "Creating complex data visualizations" },
      { name: "API Integration", level: 70, type: "Hard", proficiency: "Intermediate", example: "Connecting different software systems" },
      { name: "AI Automation Tools", level: 85, type: "Hard", proficiency: "Advanced", example: "Developing automated workflows" }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Customizing GPT models for specific business needs" },
      { name: "Predictive Analytics", level: 90, type: "Hard", proficiency: "Advanced", example: "Forecasting business trends" },
      { name: "Machine Learning Integration", level: 75, type: "Hard", proficiency: "Intermediate", example: "Implementing ML algorithms" },
      { name: "Data Insights", level: 80, type: "Hard", proficiency: "Advanced", example: "Extracting meaningful patterns from data" },
      { name: "Data Visualization", level: 90, type: "Hard", proficiency: "Advanced", example: "Creating compelling data stories" }
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively managing client expectations" },
      { name: "Client Retention Strategies", level: 90, type: "Soft", proficiency: "Advanced", example: "Developing long-term client relationships" },
      { name: "Strategic Account Management", level: 85, type: "Soft", proficiency: "Advanced", example: "Nurturing key client accounts" },
      { name: "Emotional Intelligence", level: 90, type: "Soft", proficiency: "Advanced", example: "Understanding and managing interpersonal dynamics" },
      { name: "Problem-Solving", level: 90, type: "Soft", proficiency: "Advanced", example: "Creatively addressing complex challenges" }
    ]
  }
];

export function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkillType, setActiveSkillType] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Auto-sliding effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skills.length);
    }, 5000); // Change category every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Filter skills based on type
  const filteredSkills = skills[activeCategory].skills
    .filter(skill => !activeSkillType || skill.type === activeSkillType);

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="flex justify-center mb-8 space-x-4">
          {skills.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skill Type Filter */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button 
            onClick={() => setActiveSkillType(null)}
            variant={activeSkillType === null ? "default" : "outline"}
          >
            All Skills
          </Button>
          <Button 
            onClick={() => setActiveSkillType("Hard")}
            variant={activeSkillType === "Hard" ? "default" : "outline"}
          >
            Hard Skills
          </Button>
          <Button 
            onClick={() => setActiveSkillType("Soft")}
            variant={activeSkillType === "Soft" ? "default" : "outline"}
          >
            Soft Skills
          </Button>
        </div>

        {/* Skills Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Card className={`bg-gray-800 border-none transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'transform scale-105 shadow-lg' : ''
                }`}>
                  <CardContent className="pt-6 pb-4 px-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white text-lg">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700/20"
                      indicatorClassName="rounded-full"
                    />
                    <div className="mt-2 text-sm text-gray-400">
                      Proficiency: {skill.proficiency}
                    </div>

                    {/* Hover Details */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/80 p-4 rounded-lg flex items-center justify-center"
                      >
                        <p className="text-white text-center">{skill.example}</p>
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