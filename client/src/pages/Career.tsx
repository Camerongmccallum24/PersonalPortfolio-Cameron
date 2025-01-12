import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

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
    },
    {
      title: "Strategic Customer Service Account Manager",
      company: "Totaljobs Group",
      date: "2019 - 2021",
      category: "Customer Success",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Managed 200+ key accounts ensuring high satisfaction and retention. Implemented a new service delivery framework improving response times by 40%. Developed and delivered customer training programs. Achieved the highest customer satisfaction scores in the team.
          </p>
        </div>
      ),
    },
    {
      title: "Senior Experiences Manager",
      company: "Quintessentially Experiences",
      date: "2017 - 2019",
      category: "Management",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Managed luxury travel experiences for high-net-worth clients. Coordinated complex international events and experiences. Developed new service offerings increasing revenue by 30%. Built and maintained relationships with premium vendors globally.
          </p>
        </div>
      ),
    },
    {
      title: "Global Partnerships and Fulfilment Coordinator",
      company: "DJP Promotions",
      date: "2015 - 2017",
      category: "Management",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Managed international promotional campaigns for major brands. Coordinated with partners across 20+ countries. Streamlined fulfillment processes reducing delivery times by 50%. Implemented a new tracking system improving campaign visibility.
          </p>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full">
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