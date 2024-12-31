import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";

export default function Career() {
  const experiences = [
    {
      title: "Independent AI Strategy Consultant",
      company: "Freelance Consultant", 
      date: "2024 - Present",
      category: "AI Development",
      description: "Developed AI implementation strategies for enterprise clients. Created custom GPTs for customer success automation. Conducted AI readiness assessments for organizations. Led workshops on AI integration in customer success workflows.",
      achievements: [
        "Developed AI implementation strategies for enterprise clients",
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
      description: "Managed a portfolio of enterprise clients with £2M+ annual revenue. Achieved a 95% client retention rate through proactive relationship management. Implemented data-driven success strategies using AI/ML insights. Led cross-functional projects to improve the customer experience.",
      achievements: [
        "Managed portfolio of enterprise clients with £2M+ annual revenue",
        "Achieved 95% client retention rate through proactive relationship management",
        "Implemented data-driven success strategies using AI/ML insights",
        "Led cross-functional projects improving customer experience"
      ]
    },
    {
      title: "Data Insights Analyst",
      company: "The StepStone Group / Totaljobs Group",
      date: "2021 - 2022",
      category: "AI Development",
      description: "Developed predictive analytics models for customer behavior. Created automated reporting systems using Python and SQL. Reduced manual reporting time by 70% through automation. Provided data-driven recommendations increasing customer satisfaction by 25%.",
      achievements: [
        "Developed predictive analytics models for customer behavior",
        "Created automated reporting systems using Python and SQL",
        "Reduced manual reporting time by 70% through automation",
        "Provided data-driven recommendations increasing customer satisfaction by 25%"
      ]
    },
    {
      title: "Strategic Customer Service Account Manager",
      company: "Totaljobs Group",
      date: "2019 - 2021",
      category: "Customer Success",
      description: "Managed 200+ key accounts ensuring high satisfaction and retention. Implemented a new service delivery framework improving response times by 40%. Developed and delivered customer training programs. Achieved the highest customer satisfaction scores in the team.",
      achievements: [
        "Managed 200+ key accounts ensuring high satisfaction and retention",
        "Implemented new service delivery framework improving response times by 40%",
        "Developed and delivered customer training programs",
        "Achieved highest customer satisfaction scores in team"
      ]
    },
    {
      title: "Senior Experiences Manager",
      company: "Quintessentially Experiences",
      date: "2017 - 2019",
      category: "Management",
      description: "Managed luxury travel experiences for high-net-worth clients. Coordinated complex international events and experiences. Developed new service offerings increasing revenue by 30%. Built and maintained relationships with premium vendors globally.",
      achievements: [
        "Managed luxury travel experiences for high-net-worth clients",
        "Coordinated complex international events and experiences",
        "Developed new service offerings increasing revenue by 30%",
        "Built and maintained relationships with premium vendors globally"
      ]
    },
    {
      title: "Global Partnerships and Fulfilment Coordinator",
      company: "DJP Promotions",
      date: "2015 - 2017",
      category: "Management",
      description: "Managed international promotional campaigns for major brands. Coordinated with partners across 20+ countries. Streamlined fulfillment processes reducing delivery times by 50%. Implemented a new tracking system improving campaign visibility.",
      achievements: [
        "Managed international promotional campaigns for major brands",
        "Coordinated with partners across 20+ countries",
        "Streamlined fulfillment processes reducing delivery times by 50%",
        "Implemented new tracking system improving campaign visibility"
      ]
    }
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
            className="text-4xl font-bold mb-12"
          >
            Career Journey
          </motion.h1>

          <div className="relative">
            {/* Timeline background line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-0 top-0 bottom-0 w-px bg-primary/20"
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-0">
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
      </div>
    </motion.main>
  );
}