
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudy() {
  const metrics = [
    { value: "40%", label: "Reduction in Manual Data Analysis" },
    { value: "5%", label: "Increase in Retention Rates" },
    { value: "30%", label: "Time Saved on Routine Tasks" },
    { value: "25%", label: "Improvement in Response Time" }
  ];

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics engine for predictive insights and proactive engagement.",
      items: [
        "Churn prediction modeling",
        "Customer health scoring",
        "Engagement pattern analysis"
      ]
    },
    {
      title: "Automated Workflows",
      description: "Streamlined processes for routine tasks and customer interactions.",
      items: [
        "Automated follow-ups",
        "Task prioritization",
        "Meeting scheduling"
      ]
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security measures for sensitive customer data.",
      items: [
        "End-to-end encryption",
        "Role-based access control",
        "Audit logging"
      ]
    }
  ];

  const techStack = {
    Frontend: ["React", "TypeScript", "TailwindCSS"],
    Backend: ["FastAPI", "PostgreSQL", "Redis"],
    "AI/ML": ["TensorFlow", "scikit-learn", "Pandas"],
    Infrastructure: ["AWS", "Docker", "Kubernetes"],
    Integrations: ["Salesforce", "Zendesk", "HubSpot", "Slack"]
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Customer Success Automator
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-Driven Platform for Enhanced Customer Success Management
          </p>

          <img
            src="/images/customer-success-automator.jpeg"
            alt="Customer Success Automator preview"
            className="w-full rounded-lg mb-12"
          />

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Success Story */}
          <div className="bg-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Success Story: TechScale Solutions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">The Challenge</h3>
                <p className="text-muted-foreground">
                  Managing a rapidly growing customer base with manual processes led to inefficiencies,
                  delayed responses, and missed opportunities for proactive engagement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Solution</h3>
                <p className="text-muted-foreground">
                  Implemented the Customer Success Automator to automate routine tasks,
                  provide predictive insights, and streamline customer engagement workflows.
                </p>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "The automation capabilities have transformed our CS operations. We're now able to
                focus on strategic initiatives rather than routine tasks."
                <footer className="mt-2 font-semibold">
                  - Jennifer Martinez, Head of Customer Success
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Download Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
