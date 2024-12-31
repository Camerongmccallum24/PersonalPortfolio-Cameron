import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";

export default function Career() {
  const experiences = [
    {
      title: "Your Current Role",
      company: "Your Current Company",
      date: "Current Date Range",
      description: "Description of your current role and responsibilities",
    },
    {
      title: "Your Previous Role",
      company: "Previous Company",
      date: "Previous Date Range",
      description: "Description of your previous role and achievements",
    },
    {
      title: "Your Earlier Role",
      company: "Earlier Company",
      date: "Earlier Date Range",
      description: "Description of your earlier experience",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Career Journey
          </motion.h1>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={index}
                index={index}
                {...experience}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
