
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
  const isEven = index % 2 === 0;

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
      className={`relative mb-12 mx-4 md:mx-0 ${
        isEven ? 'md:pr-[52%]' : 'md:pl-[52%]'
      } text-left`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="absolute top-8 w-4 h-4 rounded-full bg-primary z-10
          left-1/2 -translate-x-1/2"
      />

      <Card className={`relative border-primary/20 hover:border-primary/40 transition-colors
        w-full md:w-[calc(100%-32px)]`}>
        <CardHeader className="p-6 space-y-4">
          <div className="flex flex-col justify-between items-start gap-4">
            <div className="space-y-2">
              <motion.h3 
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
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
            </div>
            <motion.div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {category}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="text-sm text-muted-foreground"
              >
                {date}
              </motion.span>
            </motion.div>
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
