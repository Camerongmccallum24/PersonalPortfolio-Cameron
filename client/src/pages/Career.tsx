import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";

export default function Career() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechScale Solutions",
      date: "2022 - Present",
      description: "Leading development of enterprise-level web applications using React and Node.js.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      date: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      date: "2018 - 2020",
      description: "Created responsive web interfaces and implemented UI/UX designs.",
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
