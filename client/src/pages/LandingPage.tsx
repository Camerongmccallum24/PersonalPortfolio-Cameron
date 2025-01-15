import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, BookOpen, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-blue-500 text-xl font-bold"
            >
              Portfolio
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-4"
            >
              <NavLink icon={<Home className="w-4 h-4" />} text="Home" active />
              <NavLink icon={<User className="w-4 h-4" />} text="About" />
              <NavLink icon={<Briefcase className="w-4 h-4" />} text="Career" />
              <NavLink icon={<Code className="w-4 h-4" />} text="Projects" />
              <NavLink icon={<BookOpen className="w-4 h-4" />} text="Blog" />
              <NavLink icon={<Mail className="w-4 h-4" />} text="Contact" />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced profile picture */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-24 px-4 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-64 h-64 rounded-full p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden relative z-10 transform"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/images/Profile_Picture.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:flex-1 text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pioneering AI-Driven Customer Success
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              As a seasoned AI and Customer Success specialist with over a decade of experience in SaaS
              and enterprise environments, I blend technical expertise with business acumen to transform
              customer experiences and drive measurable growth.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Discover how I've helped businesses leverage AI to transform their customer success operations
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Customer Success GPT Showcase"
              description="A platform that demonstrates the capabilities of custom GPTs designed for Customer Success Managers. Features include sentiment analysis, churn prediction, and advanced analytics tailored to improve client retention and satisfaction."
              technologies={['React', 'TypeScript', 'Vercel', 'GPT-4', 'Customer Success']}
              image="/api/placeholder/400/300"
            />
            <ProjectCard 
              title="Customer Success Portal"
              description="A centralized platform for Customer Success Managers to manage client-specific knowledge bases, automate insights, and streamline workflows. Includes features for sentiment analysis, onboarding optimization, and customer health monitoring."
              technologies={['FastAPI', 'Python', 'Docker', 'Replit', 'Customer Success']}
              image="/api/placeholder/400/300"
            />
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Career Journey
          </motion.h2>
          <CareerSlider />
        </div>
      </section>

      {/* Footer with social links */}
      <footer className="border-t border-gray-800 py-12 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
          <p className="text-center text-gray-400">
            © 2025 AI Strategy & Customer Success Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const NavLink = ({icon, text, active}: {icon: React.ReactNode, text: string, active?: boolean}) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center space-x-2 ${active ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-500 transition-colors`}
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

const ProjectCard = ({title, description, technologies, image}: {title: string, description: string, technologies: string[], image: string}) => (
  <div className="bg-gray-800/50 p-8 rounded-xl">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="bg-gray-700 px-3 py-1 rounded-lg text-xs text-gray-200">{tech}</span>
      ))}
    </div>
    <img src={image} alt={title} className="mt-4 w-full object-cover rounded-lg" />
  </div>
);

const CareerSlider = () => (
  <div>
    {/* Replace with your actual slider implementation */}
    <p>Career Slider Component Here</p>
  </div>
);

export default LandingPage;