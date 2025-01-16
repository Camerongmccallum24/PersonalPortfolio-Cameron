
import { db } from "./index";
import { projects, caseStudies } from "./schema";

const sampleProjects = [
  {
    title: "Customer Success GPT Showcase",
    description: "A platform that demonstrates the capabilities of custom GPTs designed for Customer Success Managers. Features include sentiment analysis, churn prediction, and advanced analytics tailored to improve client retention and satisfaction.",
    image: "/images/customer-success-gpt.jpg",
    tags: ["React", "TypeScript", "GPT-4", "AI", "Customer Success"]
  },
  {
    title: "Customer Success Portal",
    description: "A comprehensive platform for Customer Success Managers to manage client-specific knowledge bases, automate insights, and streamline workflows.",
    image: "/images/customer-succes-portal.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Customer Success"]
  },
  {
    title: "Customer Success Automator",
    description: "An automation tool for Customer Success workflows, focusing on repetitive tasks like follow-ups and reporting.",
    image: "/images/customer-success-automator.jpeg",
    tags: ["Python", "Automation", "API Integrations", "AI"]
  }
];

const sampleCaseStudies = [
  {
    title: "Customer Success GPT Showcase",
    description: "How AI transforms customer success operations",
    metrics: {
      "Client Satisfaction": "95%",
      "Response Time": "↓60%", 
      "Team Efficiency": "↑40%",
      "Resolution Rate": "↑45%"
    }
  },
  {
    title: "Customer Success Portal", 
    description: "A comprehensive solution for enhanced customer engagement.",
    metrics: {
      "Client Satisfaction": "95%",
      "Team Efficiency": "↑40%",
      "Support Time": "↓30%",
      "Data Accuracy": "↑60%"
    }
  }
];

async function seed() {
  try {
    await db.insert(projects).values(sampleProjects);
    await db.insert(caseStudies).values(sampleCaseStudies);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
}

seed();
