import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface TimelineCardProps {
  title: string;
  company: string;
  date: string;
  category: string;
  description: string;
  achievements: string[];
  index: number;
  color: string;
}

export function TimelineCard({ title, company, date, category, description, achievements, index, color }: TimelineCardProps) {
  const [showAchievements, setShowAchievements] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-8 flex justify-center w-full ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}
    >
      <motion.div 
        className={`relative group w-full max-w-xl ${index === 0 ? 'first-card' : ''}`}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500`} />
        <Card className="relative h-full overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background to-background/80" />
          <CardContent className="relative z-10 p-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {category}
                </motion.span>
                <span className="text-sm text-muted-foreground">{date}</span>
              </div>

              <h3 className="text-2xl font-semibold text-primary hover:underline">{title}</h3>
              <p className="text-lg font-medium text-muted-foreground">{company}</p>
              <p className="text-sm text-muted-foreground mt-2">{description}</p>

              <div className="mt-4">
                <button
                  onClick={() => setShowAchievements(!showAchievements)}
                  className="text-sm text-primary underline hover:text-primary/70"
                >
                  {showAchievements ? "Hide Achievements" : "Show Achievements"}
                </button>
                {showAchievements && (
                  <div className="mt-4 space-y-2">
                    {achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

