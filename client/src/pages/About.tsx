import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SkillsVisualization } from "@/components/sections/SkillsVisualization";
import { TechStack } from "@/components/sections/TechStack";
import { useState } from "react";

export default function About() {
  const certifications = [
    {
      icon: "/images/certified-customer-success-manager-ccsm-level-2.png",
      title: "Customer Success Manager Level 2",
      issuer: {
        name: "SuccessHacker",
        url: "https://www.credly.com/badges/065e9ed4-2ea2-4964-a431-d0babcb92153"
      },
      date: "November 2024"
    },
    {
      icon: "/images/certified-customer-success-manager-ccsm-level-1.png",
      title: "Customer Success Manager Level 1",
      issuer: {
        name: "SuccessHacker",
        url: "https://www.credly.com/badges/320dffa3-22ac-4f5c-8692-c4d83f6d5110"
      },
      date: "November 2023"
    },
    {
      icon: "",
      title: "Google Developer Program",
      issuer: {
        name: "Google",
        url: "https://g.dev/cameron-g-mccallum"
      },
      date: "2024-2025"
    },
    {
      icon: "🚀",
      title: "AWS Certified Cloud Practitioner",
      issuer: {
        name: "Amazon Web Services"
      },
      date: "November 2023"
    }
  ];

  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("email:", email);
    // send email to backend
  };

  return (
    <div className="min-h-screen bg-background">
      {/* About Section */}
      <section className="pt-16 sm:pt-32 pb-12 sm:pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            About Me
          </motion.h1>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000"></div>
              <img
                src="/images/Profile_Picture.png"
                alt="Cameron McCallum - AI Strategy Consultant"
                className="relative rounded-full w-48 h-48 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
            >
              Empowering SaaS Businesses with AI-Powered Customer Solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="gap-2">
                Explore My Expertise
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Skills & Expertise
          </h2>
          <SkillsVisualization />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Technology Stack
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group p-6 rounded-lg border bg-background/20 backdrop-blur-md border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
                <div className="relative">
                  {cert.icon.endsWith('.png') ? (
                    <img src={cert.icon} alt={cert.title} className="w-16 h-16 object-contain" />
                  ) : (
                    <span className="text-4xl">{cert.icon}</span>
                  )}
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Stay Ahead with AI-Powered Strategies!
          </h2>
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join my newsletter for exclusive insights and tools to supercharge your SaaS success.
          </p>
          <iframe 
            src="https://embeds.beehiiv.com/8febfdef-3ac2-4303-b744-7b5e1fd26be0?slim=true" 
            data-test-id="beehiiv-embed" 
            height="52" 
            frameBorder="0" 
            scrolling="no" 
            style={{ margin: 0, borderRadius: 0, backgroundColor: 'transparent', width: '100%', maxWidth: '500px' }}
            title="Newsletter Signup"
          />
        </motion.div>
      </section>
    </div>
  );
}