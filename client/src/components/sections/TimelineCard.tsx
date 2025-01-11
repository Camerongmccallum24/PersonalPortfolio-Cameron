import { useState, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const translateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 20]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate normalized mouse position (-1 to 1)
    mouseX.set((event.clientX - centerX) / (rect.width / 2));
    mouseY.set((event.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
      } text-left perspective-1000`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="absolute top-8 w-4 h-4 rounded-full bg-primary z-10
          left-1/2 -translate-x-1/2"
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: "preserve-3d"
        }}
        className="relative will-change-transform"
      >
        <Card className="relative border-primary/20 hover:border-primary/40 transition-colors
          w-full md:w-[calc(100%-32px)] transform-gpu">
          <CardHeader className="p-6 space-y-4">
            <div className="flex flex-col justify-between items-start gap-4">
              <div className="space-y-2">
                <motion.h3 
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-lg font-semibold"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-sm text-muted-foreground"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {company}
                </motion.p>
              </div>
              <motion.div 
                className="flex items-center gap-4"
                style={{ transform: "translateZ(10px)" }}
              >
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
              style={{ transform: "translateZ(5px)" }}
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
    </motion.div>
  );
}