
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface TimelineCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  index: number;
  category?: string;
  achievements?: string[];
}

export function TimelineCard({ 
  title, 
  company, 
  date, 
  description, 
  index,
  category = "Experience",
  achievements = []
}: TimelineCardProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      className={`relative ${index % 2 === 0 ? 'pl-6' : 'pr-6'} mb-6`}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 to-primary/5" />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className={`absolute top-6 w-2 h-2 rounded-full bg-primary ${
          index % 2 === 0 ? 'left-[-4px]' : 'right-[-4px]'
        }`}
      />

      <Card className="relative border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="text-lg font-semibold"
              >
                {title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-sm text-muted-foreground"
              >
                {company}
              </motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="absolute top-4 right-4 inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {category}
              </motion.span>
            </div>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className="text-sm text-muted-foreground"
            >
              {date}
            </motion.span>
          </div>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="space-y-4"
          >
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
            {achievements && achievements.length > 0 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                >
                  <motion.div
                    animate={{ rotate: showMore ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                  {showMore ? 'Show less' : `View ${achievements.length} achievements`}
                </motion.button>
                <AnimatePresence>
                  {showMore && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 pl-4 list-disc text-sm text-muted-foreground"
                    >
                      {achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
