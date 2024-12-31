
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <Card key={skill.name}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
