import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, BookOpen, Mail, Github, Linkedin, Twitter, Link, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
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

      {/* Hero Section */}
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
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse" />
            <img src="/api/placeholder/256/256" alt="Profile" className="w-full h-full object-cover relative z-10" />
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Pioneering AI-Driven Customer Success
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              As a seasoned AI and Customer Success specialist with over a decade of experience in SaaS
              and enterprise environments, I blend technical expertise with business acumen to transform
              customer experiences and drive measurable growth.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
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

      {/* Career Section with improved styling */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
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

      {/* Blog Section with improved layout */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Latest Insights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <BlogPost 
                title="Leveraging AI for Customer Success Automation"
                date="January 8, 2025"
                excerpt="Explore how AI is revolutionizing customer success management and learn about the latest tools and strategies for automation."
                tags={['AI', 'Customer Success', 'Automation']}
                readTime="8 min read"
              />
              <BlogPost 
                title="Building Effective Customer Health Scores"
                date="January 2, 2025"
                excerpt="A deep dive into creating meaningful customer health metrics that help predict and prevent churn while driving growth."
                tags={['Analytics', 'Customer Success', 'Metrics']}
                readTime="6 min read"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-xl h-fit sticky top-24 border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, Customer Success, and SaaS delivered straight to your inbox.
                No spam, unsubscribe anytime.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="text-gray-400 text-sm mt-4">
                Join 2,000+ subscribers who are already getting smarter about AI-driven customer success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with improved visuals */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-xl border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-8 text-cyan-400">Technical Skills</h2>
              <div className="space-y-6">
                <SkillBar name="Python" proficiency={90} />
                <SkillBar name="React" proficiency={85} />
                <SkillBar name="FastAPI" proficiency={80} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-xl border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-8 text-cyan-400">AI/ML Skills</h2>
              <div className="space-y-6">
                <SkillBar name="OpenAI GPT" proficiency={95} />
                <SkillBar name="NLP" proficiency={85} />
                <SkillBar name="TensorFlow" proficiency={80} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer with improved styling */}
      <footer className="border-t border-gray-800 py-12 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Navigation</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:contact@example.com" className="block text-gray-400 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 AI Strategy & Customer Success Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};


// Placeholder components -  These need to be defined separately in your project.
const NavLink = ({icon, text, active}: {icon: any, text: string, active?: boolean}) => (
  <a href="#" className={`flex items-center space-x-2 ${active ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-500`}>
    {icon}
    <span>{text}</span>
  </a>
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

const BlogPost = ({title, date, excerpt, tags, readTime}: {title: string, date: string, excerpt: string, tags: string[], readTime: string}) => (
  <div>
    <h4 className="text-xl font-bold">{title}</h4>
    <p className="text-gray-400 text-sm">{date}</p>
    <p className="text-gray-300 mb-2">{excerpt}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="bg-gray-700 px-2 py-1 rounded-lg text-xs text-gray-200">{tag}</span>
      ))}
      <span className="text-gray-400 text-xs">{readTime}</span>
    </div>
  </div>
);


const SkillBar = ({name, proficiency}: {name: string, proficiency: number}) => (
  <div className="flex items-center justify-between">
    <p className="text-gray-300">{name}</p>
    <div className="w-full bg-gray-700 rounded-lg h-2 relative">
      <div className="absolute top-0 left-0 h-full bg-cyan-500 rounded-lg" style={{width: `${proficiency}%`}} />
    </div>
  </div>
);

export default LandingPage;