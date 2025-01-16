
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, LineChart, Users, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudyAITools() {
  const metrics = [
    { value: "60%", label: "Reduction in Research Time" },
    { value: "95%", label: "User Satisfaction" },
    { value: "1000+", label: "Active Users" },
    { value: "50+", label: "Tools Listed" }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intuitive Search",
      description: "Advanced filtering by use case, pricing, and integrations"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Comparison Tools",
      description: "Side-by-side feature analysis and pricing comparison"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Fully functional across all device sizes"
    }
  ];

  const techStack = {
    Frontend: ["React", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "PostgreSQL"],
    Tools: ["Git", "Webpack", "ESLint"],
    Testing: ["Jest", "React Testing Library"],
    Deployment: ["Replit"]
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
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            AI Tools Directory
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            A Curated Platform for Customer Success AI Tools
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {["UI/UX Design", "Web Development", "HTML/CSS", "Tailwind CSS"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <img
            src="/images/ai-tools-directory.jpg"
            alt="AI Tools Directory Preview"
            className="w-full rounded-lg mb-12 shadow-xl"
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

          {/* Overview */}
          <div className="bg-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The AI Tools Directory is a comprehensive web platform designed to help Customer Success Managers 
                discover, evaluate, and compare AI-powered solutions for their teams. In an era where AI tools 
                are rapidly evolving, this platform serves as a centralized hub for CS professionals to make 
                informed decisions about their tech stack.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Time-Consuming Research</h3>
                  <p className="text-muted-foreground">CS teams spent hours researching across multiple vendors.</p>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <LineChart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Feature Comparison</h3>
                  <p className="text-muted-foreground">Difficulty comparing features and pricing across tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
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
                      <li key={item} className="text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
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
