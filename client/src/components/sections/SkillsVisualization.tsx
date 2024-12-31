import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsVisualizationProps {
  skills: Skill[];
}

export function SkillsVisualization({ skills }: SkillsVisualizationProps) {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => {
        const containerRef = useRef(null);
        const isInView = useInView(containerRef, { once: true, amount: 0.2 });

        return (
          <motion.div
            key={category}
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:border-primary/40 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {isInView ? `${skill.level}%` : '0%'}
                          </span>
                        </div>
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: isInView ? "100%" : "0%" }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        >
                          <Progress 
                            value={isInView ? skill.level : 0} 
                            className="h-2 bg-primary/20"
                          />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}