import { motion } from "framer-motion";
import { TimelineCard } from "@/components/sections/TimelineCard";
import { Helmet } from "react-helmet";

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
        "Cultivated partnerships with premium vendors, enhancing the company's global reputation."
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
    <>
      <Helmet>
        <title>Professional Journey | AI Strategy & Customer Success Expert | Cameron McCallum</title>
        <meta name="description" content="Explore Cameron McCallum's career journey from Customer Service to AI Strategy Consulting, showcasing expertise in customer success and digital transformation." />
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
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }}
              >
                <TimelineCard
                  {...experience}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}