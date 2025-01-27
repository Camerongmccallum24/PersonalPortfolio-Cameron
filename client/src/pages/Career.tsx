import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { TimelineCard } from "./TimelineCard"; // Ensure correct import path

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  category: string;
  description: string;
  achievements: string[];
  index: number;
  color: string;
}

export default function CareerTimeline() {
  const experiences: ExperienceProps[] = [
    {
      title: "Independent AI Strategy Consultant",
      company: "Freelance Consultant",
      date: "2024 - Present",
      category: "AI Development",
      description: "Providing strategic AI solutions tailored to enterprise needs, including automating over 1,000+ weekly customer queries and improving response times by 40%.",
      achievements: [
        "Developed AI-powered tools to optimise customer experience.",
        "Designed predictive churn models with 85% accuracy, proactively addressing at-risk accounts.",
        "Conducted AI strategy workshops, increasing team engagement and workflow efficiency."
      ],
      index: 0,
      color: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Enterprise Customer Success Manager",
      company: "The StepStone Group / Totaljobs Group",
      date: "2022 - 2024",
      category: "Customer Success",
      description: "Managed 30+ enterprise accounts, delivering a 25% retention improvement and driving annual renewals worth £500,000+.",
      achievements: [
        "Improved satisfaction by 30% through data analysis and proactive feedback initiatives.",
        "Resolved CRM-related technical issues, enhancing system reliability and user adoption.",
        "Delivered Quarterly Business Reviews (QBRs) securing high-value renewals."
      ],
      index: 1,
      color: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      title: "Data Insights Analyst",
      company: "The StepStone Group / Totaljobs Group",
      date: "2021 - 2022",
      category: "Data Analytics",
      description: "Delivered actionable performance reports and led workshops presenting data insights to clients, driving measurable outcomes.",
      achievements: [
        "Combined analytics and consultancy to influence strategy alignment.",
        "Improved operational efficiency by 20% through stakeholder alignment.",
        "Automated reporting processes, saving time and improving accuracy."
      ],
      index: 2,
      color: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "Strategic Customer Service Account Manager",
      company: "Totaljobs Group",
      date: "2019 - 2021",
      category: "Customer Service",
      description: "Managed high-value RPO accounts, increasing revenue by 160% and earning formal recognition for excellence.",
      achievements: [
        "Built strong client relationships to ensure long-term partnerships.",
        "Aligned services with client goals, achieving a 40% improvement in service delivery efficiency.",
        "Designed and delivered client-focused training programs, boosting satisfaction and retention."
      ],
      index: 3,
      color: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      title: "Senior Experiences Manager",
      company: "Quintessentially Experiences",
      date: "2017 - 2019",
      category: "Customer Service",
      description: "Curated luxury experiences for elite clientele globally, aligning with premium brand values.",
      achievements: [
        "Orchestrated complex international events, consistently exceeding client expectations.",
        "Innovated service offerings, increasing revenue streams by 30% year-over-year.",
        "Cultivated partnerships with premium vendors, enhancing global reputation."
      ],
      index: 4,
      color: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      title: "Global Partnerships and Fulfillment Coordinator",
      company: "DJP Promotions",
      date: "2015 - 2017",
      category: "Marketing",
      description: "Directed international campaigns, ensuring seamless execution and enhancing client satisfaction.",
      achievements: [
        "Standardized workflows across 20+ countries, improving efficiency by 15%.",
        "Implemented a state-of-the-art tracking system, increasing campaign transparency and accountability.",
        "Optimized fulfillment processes, reducing delivery times by 50%."
      ],
      index: 5,
      color: "from-emerald-500 via-green-500 to-lime-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Timeline | Cameron McCallum</title>
        <meta
          name="description"
          content="Discover Cameron McCallum's career journey, showcasing expertise in AI solutions, customer success, and data analytics."
        />
      </Helmet>
      <section className="page-container bg-background/50">
        <div className="container mx-auto px-[var(--content-padding)]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Professional Journey
          </motion.h1>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <TimelineCard key={experience.index} {...experience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
