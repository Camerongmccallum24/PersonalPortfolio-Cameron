import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SkillsVisualization } from "@/components/sections/SkillsVisualization";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function About() {
  const [isFrontendOpen, setFrontendOpen] = useState(true);

  const skills = [
    // Frontend
    { name: "React", level: 85, category: "Frontend", color: "#61DBFB" },
    { name: "TypeScript", level: 80, category: "Frontend", color: "#3178C6" },
    { name: "TailwindCSS", level: 75, category: "Frontend", color: "#38B2AC" },
    { name: "HTML", level: 90, category: "Frontend", color: "#E34F26" },
    { name: "CSS", level: 85, category: "Frontend", color: "#1572B6" },
    { name: "JavaScript", level: 80, category: "Frontend", color: "#F7DF1E" },

    // Backend
    { name: "FastAPI", level: 85, category: "Backend", color: "#009688" },
    { name: "Python", level: 90, category: "Backend", color: "#306998" },
    { name: "Node.js", level: 75, category: "Backend", color: "#68A063" },
    { name: "SQL", level: 80, category: "Backend", color: "#4479A1" },
    { name: "Express.js", level: 70, category: "Backend", color: "#000000" },

    // Tools
    { name: "Firebase", level: 80, category: "Tools", color: "#FFCA28" },
    { name: "Vercel", level: 85, category: "Tools", color: "#000000" },
    { name: "Replit", level: 80, category: "Tools", color: "#F26207" },
    { name: "GitHub", level: 90, category: "Tools", color: "#181717" },
    { name: "Make (Integromat)", level: 75, category: "Tools", color: "#2596BE" },
    { name: "Docker", level: 70, category: "Tools", color: "#2496ED" },

    // AI & Data Analytics
    { name: "GPT-4 Customization", level: 85, category: "AI & Data Analytics", color: "#8A2BE2" },
    { name: "Predictive Analytics", level: 80, category: "AI & Data Analytics", color: "#FF6F61" },
    { name: "Sentiment Analysis", level: 85, category: "AI & Data Analytics", color: "#4CAF50" },
    { name: "Data Visualization", level: 75, category: "AI & Data Analytics", color: "#673AB7" },
    { name: "Machine Learning", level: 70, category: "AI & Data Analytics", color: "#3E8EDE" },

    // Customer Success
    { name: "CRM Platforms", level: 85, category: "Customer Success", color: "#FF5722" },
    { name: "AI-Driven Customer Retention", level: 90, category: "Customer Success", color: "#9C27B0" },
    { name: "Workflow Automation", level: 80, category: "Customer Success", color: "#4CAF50" },
    { name: "Customer Journey Mapping", level: 85, category: "Customer Success", color: "#FF9800" },
    { name: "Client Engagement & Training", level: 90, category: "Customer Success", color: "#03A9F4" },
  ];

  const categoryIcons = {
    Frontend: "/icons/frontend.svg",
    Backend: "/icons/backend.svg",
    Tools: "/icons/tools.svg",
    "AI & Data Analytics": "/icons/ai.svg",
    "Customer Success": "/icons/customersuccess.svg",
  };

  const renderSkillsByCategory = (category) => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-4 p-4 glassmorphism hover:shadow-lg transition-shadow"
        >
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div
                className="h-2 rounded-full"
                style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
              ></div>
            </div>
          </div>
          <span className="text-gray-400 text-sm">{skill.level}%</span>
        </div>
      ));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black"
    >
      
      {/* Add Profile Picture */}
      <section className="flex justify-center pt-10">
        <img
          src="/images/Profile_Picture.png"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover"
        />
      </section>
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:flex-1 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Empowering SaaS Businesses with AI-Powered Customer Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Leveraging AI to redefine customer success strategies, enhance retention, and deliver unparalleled client satisfaction. Join me on this journey to create impactful and innovative solutions.
            </motion.p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all">
              Discover My Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
          <p className="text-lg text-gray-300 mb-6">
            My journey into customer success and AI development began with a passion for creating meaningful customer relationships. A pivotal moment was when I reduced churn by 25% through predictive analytics, proving the transformative power of AI in client retention.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-pink-500/20 transition-all">
            Connect on LinkedIn
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Personal Values & Beliefs</h2>
          <p className="text-lg text-gray-300 mb-4">
            These principles guide every interaction and project, ensuring alignment with client goals and industry innovation.
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li><strong>Customer-Centric Mindset:</strong> Delivering actionable, data-driven solutions to address customer needs.</li>
            <li><strong>Innovation and Adaptability:</strong> Driving efficiency and results through emerging technologies.</li>
            <li><strong>Transparency and Collaboration:</strong> Building trust through honest communication and cross-functional alignment.</li>
          </ul>
          <Button className="mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all">
            Learn How These Values Drive Success
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-lg text-gray-300 mb-6">
            My skills span multiple disciplines, enabling me to provide comprehensive solutions to complex challenges.
          </p>
          {Object.keys(categoryIcons).map((category) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={categoryIcons[category]}
                  alt={category}
                  className="w-8 h-8"
                />
                <h3
                  className="text-2xl font-bold text-cyan-400 cursor-pointer"
                  onClick={() => setFrontendOpen(!isFrontendOpen)}
                >
                  {category} {isFrontendOpen ? "▼" : "▶"}
                </h3>
              </div>
              {isFrontendOpen && <div className="space-y-4">{renderSkillsByCategory(category)}</div>}
            </div>
          ))}
          <Button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all">
            See How These Skills Solve Real-World Challenges
          </Button>
        </div>
      </section>
    </motion.main>
  );
}