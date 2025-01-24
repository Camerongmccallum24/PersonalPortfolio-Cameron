import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudy() {
  const metrics = [
    { value: "↓40%", label: "Reduction in Churn Rate" },
    { value: "↑35%", label: "Increase in Customer Satisfaction" },
    { value: "↑30%", label: "Boost in Customer Lifetime Value" },
    { value: "↑50%", label: "Team Productivity Improvement" }
  ];

  const features = [
    {
      title: "Centralized Knowledge Base",
      description: "Single source of truth for all client-related information.",
      items: [
        "Usage metrics tracking",
        "Support ticket management",
        "Training materials hub",
        "Onboarding progress monitoring"
      ]
    },
    {
      title: "AI-Powered Insights",
      description: "Advanced analytics and predictive capabilities.",
      items: [
        "Churn risk prediction",
        "Upsell opportunity identification",
        "Real-time alerts",
        "Behavioral analysis"
      ]
    },
    {
      title: "Workflow Automation",
      description: "Streamlined processes for enhanced efficiency.",
      items: [
        "Automated follow-ups",
        "Status updates",
        "Report generation",
        "CRM integration"
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
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Case Study Template
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive look at our project implementation and results
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
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