
import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";

export default function Career() {
  const experiences = [
    {
      title: "Independent AI Strategy Consultant",
      company: "Freelance Consultant",
      date: "2024 - Present",
      category: "AI Development",
      description: "Developed AI implementation strategies for enterprise clients.",
      achievements: [
        "Created custom GPTs for customer success automation",
        "Conducted AI readiness assessments for organizations",
        "Led workshops on AI integration in customer success workflows"
      ]
    },
    {
      title: "Enterprise Customer Success Manager",
      company: "The StepStone Group / Totaljobs Group",
      date: "2022 - 2024",
      category: "Customer Success",
      description: "Managed a portfolio of enterprise clients with £2M+ annual revenue.",
      achievements: [
        "Achieved a 95% client retention rate",
        "Implemented data-driven success strategies using AI/ML insights",
        "Led cross-functional projects to improve customer experience"
      ]
    },
    {
      title: "Data Insights Analyst",
      company: "The StepStone Group / Totaljobs Group",
      date: "2021 - 2022",
      category: "AI Development",
      description: "Developed predictive analytics models for customer behavior.",
      achievements: [
        "Created automated reporting systems using Python and SQL",
        "Reduced manual reporting time by 70% through automation",
        "Provided data-driven recommendations increasing customer satisfaction by 25%"
      ]
    }
  ];

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <TimelineCard
            key={index}
            {...experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
