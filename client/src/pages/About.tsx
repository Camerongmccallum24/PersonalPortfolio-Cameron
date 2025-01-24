import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SkillsVisualization } from "@/components/sections/SkillsVisualization";
import { useState } from "react";

const skills = [
  {
    category: "Technical",
    skills: [
      { name: "SQL", level: 90, type: "Hard", proficiency: "Advanced", example: "Skilled in querying and analyzing data in SQL databases" },
      { name: "Data Cleaning & Preparation", level: 90, type: "Hard", proficiency: "Advanced", example: "Identifying and rectifying data inconsistencies" },
      { name: "Power BI", level: 75, type: "Hard", proficiency: "Intermediate", example: "Creating complex data visualizations" },
      { name: "API Integration", level: 70, type: "Hard", proficiency: "Intermediate", example: "Connecting different software systems" },
      { name: "AI Automation Tools", level: 85, type: "Hard", proficiency: "Advanced", example: "Developing automated workflows" }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "GPT Development", level: 85, type: "Hard", proficiency: "Advanced", example: "Customizing GPT models for specific business needs" },
      { name: "Predictive Analytics", level: 90, type: "Hard", proficiency: "Advanced", example: "Forecasting business trends" },
      { name: "Machine Learning Integration", level: 75, type: "Hard", proficiency: "Intermediate", example: "Implementing ML algorithms" },
      { name: "Data Insights", level: 80, type: "Hard", proficiency: "Advanced", example: "Extracting meaningful patterns from data" },
      { name: "Data Visualization", level: 90, type: "Hard", proficiency: "Advanced", example: "Creating compelling data stories" }
    ]
  },
  {
    category: "Customer Success",
    skills: [
      { name: "Stakeholder Communication", level: 90, type: "Soft", proficiency: "Advanced", example: "Effectively managing client expectations" },
      { name: "Client Retention Strategies", level: 90, type: "Soft", proficiency: "Advanced", example: "Developing long-term client relationships" },
      { name: "Strategic Account Management", level: 85, type: "Soft", proficiency: "Advanced", example: "Nurturing key client accounts" },
      { name: "Emotional Intelligence", level: 90, type: "Soft", proficiency: "Advanced", example: "Understanding and managing interpersonal dynamics" },
      { name: "Problem-Solving", level: 90, type: "Soft", proficiency: "Advanced", example: "Creatively addressing complex challenges" }
    ]
  }
];

{/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center pt-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000"></div>
          <img
            src="/images/Profile_Picture.png"
            alt="Cameron McCallum - AI Strategy Consultant"
            className="profile-picture"
          />
        </motion.div>
      </motion.section>

      {/* About Content */}
      <section className="pt-16 sm:pt-32 pb-12 sm:pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-4">
          <div className="w-full md:flex-1 text-center md:text-left">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Empowering SaaS Businesses with AI-Powered Customer Solutions
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Leveraging AI to redefine customer success strategies, enhance retention, and deliver
              unparalleled client satisfaction. Join me on this journey to create impactful and
              innovative solutions.
            </motion.p>
            <Button className="cta-button w-full sm:w-auto">
              Explore My Expertise
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-12 sm:py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Skills & Expertise</h2>
          {Object.keys(categoryIcons).map((category) => (
            <div key={category} className="mb-8">
              <div
                className="flex items-center gap-3 mb-4 category-header"
                onClick={() => toggleCategory(category)}
              >
                <img src={categoryIcons[category]} alt={category} className="w-6 sm:w-8 h-6 sm:h-8" />
                <h3>{category} {isCategoryOpen[category] ? "▼" : "▶"}</h3>
              </div>
              <motion.div
                className={`dropdown ${
                  isCategoryOpen[category] ? "open" : "closed"
                }`}
              >
                {renderSkillsByCategory(category)}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-12 sm:py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="carousel">
            {/* Tech stack icons */}
          </div>
        </div>
      </section>
      
      {/* Certification Section */}
      <section className="px-4 py-12 sm:py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors"
              >
                <span className="text-4xl">{cert.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Ahead with AI-Powered Strategies!</h2>
          <p className="mb-6 max-w-2xl mx-auto">Join my newsletter for exclusive insights and tools to supercharge your SaaS success.</p>
          <form 
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full" 
            />
            <Button 
              type="submit"
              className="px-6 py-2 rounded-lg bg-white text-cyan-500 font-bold hover:bg-gray-200 transition-colors"
            >
              Sign Up Now
            </Button>
          </form>
        </motion.div>
      </section>
    </motion.main>
  );
}