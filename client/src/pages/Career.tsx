import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export default function Career() {
  const experiences = [
    {
      title: "Independent AI Strategy Consultant",
      company: "Freelance Consultant", 
      date: "2024 - Present",
      category: "AI Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed AI implementation strategies for enterprise clients. Created custom GPTs for customer success automation. Conducted AI readiness assessments for organizations. Led workshops on AI integration in customer success workflows.
          </p>
        </div>
      ),
    },
    {
      title: "Enterprise Customer Success Manager",
      company: "The StepStone Group / Totaljobs Group",
      date: "2022 - 2024",
      category: "Customer Success",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Managed a portfolio of enterprise clients with £2M+ annual revenue. Achieved a 95% client retention rate through proactive relationship management. Implemented data-driven success strategies using AI/ML insights. Led cross-functional projects to improve the customer experience.
          </p>
        </div>
      ),
    },
    {
      title: "Data Insights Analyst",
      company: "The StepStone Group / Totaljobs Group",
      date: "2021 - 2022",
      category: "AI Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed predictive analytics models for customer behavior. Created automated reporting systems using Python and SQL. Reduced manual reporting time by 70% through automation. Provided data-driven recommendations increasing customer satisfaction by 25%.
          </p>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full px-4 py-12">
      <Timeline data={experiences.map(({ title, date, content }) => ({
        title,
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            {content}
          </div>
        )
      }))} />
    </div>
  );
}