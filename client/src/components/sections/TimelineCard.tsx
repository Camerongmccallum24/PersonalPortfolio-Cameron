import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TimelineCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

export function TimelineCard({ title, company, date, description, index }: TimelineCardProps) {
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
      whileHover={{ scale: 1.02 }}
      className="relative pl-6 mb-6"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/5" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary"
      />

      <Card className="relative border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
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
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="text-sm text-muted-foreground"
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}