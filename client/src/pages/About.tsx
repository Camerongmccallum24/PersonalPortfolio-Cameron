import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Node.js", "Express.js", "Python", "SQL"],
    },
    {
      category: "Tools",
      items: [
        "Firebase",
        "Vercel",
        "GitHub",
        "Replit",
        "Make (formerly Integromat)",
      ],
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
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-4">
                Over the years, I have worked across diverse industries,
                including SaaS, recruitment, and travel, helping organizations
                optimize their customer success strategies. My technical
                expertise spans CRM platforms like Salesforce and Gainsight, AI
                development, and advanced data analytics.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {skill.category}
                    </h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}