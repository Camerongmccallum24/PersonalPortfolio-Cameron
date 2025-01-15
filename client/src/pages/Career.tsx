import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";

export default function Career() {
  const experiences = [
    {
      title: "Independent AI Strategy Consultant",
      company: "Freelance Consultant",
      date: "2024 - Present",
      category: "AI Development",
      description: "Providing strategic AI solutions tailored to enterprise needs.",
      achievements: [
        "Developed and deployed custom GPTs enhancing customer success automation, improving team efficiency by 40%.",
        "Conducted comprehensive AI readiness assessments, aligning organizational workflows with AI capabilities.",
        "Facilitated workshops for cross-functional teams, driving seamless AI integration and adoption."
      ]
    },
    {
      title: "Enterprise Customer Success Manager",
      company: "The StepStone Group / Totaljobs Group",
      date: "2022 - 2024",
      category: "Customer Success",
      description: "Oversaw a portfolio of enterprise clients, optimizing retention and satisfaction.",
      achievements: [
        "Consistently maintained a 95% client retention rate by implementing proactive engagement strategies.",
        "Integrated AI/ML insights into customer success operations, improving decision-making and response accuracy.",
        "Directed cross-functional initiatives that enhanced customer experience and streamlined service delivery."
      ]
    },
    {
      title: "Data Insights Analyst",
      company: "The StepStone Group / Totaljobs Group",
      date: "2021 - 2022",
      category: "Data Analytics",
      description: "Leveraged analytics to predict and influence customer behaviors effectively.",
      achievements: [
        "Developed predictive models using Python and SQL, identifying trends to preemptively address customer needs.",
        "Automated reporting processes, cutting manual workload by 70% and increasing operational efficiency.",
        "Delivered actionable insights that improved customer satisfaction metrics by 25%."
      ]
    },
    {
      title: "Strategic Customer Service Account Manager",
      company: "Totaljobs Group",
      date: "2019 - 2021",
      category: "Customer Service",
      description: "Ensured client satisfaction across a high-value portfolio of £200K+ accounts.",
      achievements: [
        "Revamped the service delivery framework, achieving a 40% reduction in response times.",
        "Created and executed comprehensive training programs, boosting client competency and satisfaction.",
        "Earned highest customer satisfaction scores within the team through personalized service delivery."
      ]
    },
    {
      title: "Senior Experiences Manager",
      company: "Quintessentially Experiences",
      date: "2017 - 2019",
      category: "Customer Service",
      description: "Specialized in curating luxury experiences for elite clientele globally.",
      achievements: [
        "Orchestrated complex international events, consistently exceeding client expectations.",
        "Innovated service offerings that increased revenue streams by 30% year-over-year.",
        "Cultivated partnerships with premium vendors, enhancing the company’s global reputation."
      ]
    },
    {
      title: "Global Partnerships and Fulfillment Coordinator",
      company: "DJP Promotions",
      date: "2015 - 2017",
      category: "Marketing",
      description: "Directed international campaigns, ensuring seamless execution and fulfillment.",
      achievements: [
        "Collaborated with partners across 20+ countries, standardizing operational workflows.",
        "Optimized fulfillment processes, reducing delivery times by 50% and enhancing client satisfaction.",
        "Implemented a state-of-the-art tracking system, increasing campaign transparency and accountability."
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
