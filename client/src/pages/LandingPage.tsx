
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from "wouter";
import { Hero } from '@/components/sections/Hero';
import { TimelineCard } from '@/components/sections/TimelineCard';
import { SkillsVisualization } from '@/components/sections/SkillsVisualization';
import { TechStack } from '@/components/sections/TechStack';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ExternalLink, Github, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Welcome = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (!isFirstVisit || location !== "/") return null;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 backdrop-blur-lg"
          style={{
            background: `
              radial-gradient(circle at top left, var(--primary) 0%, transparent 50%),
              radial-gradient(circle at bottom right, hsl(265, 89%, 78%) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative text-center space-y-12 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient">
              Welcome to My Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-2xl text-foreground/80 max-w-2xl mx-auto"
          >
            Explore my journey in Customer Success and AI-Driven Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="text-primary text-xl font-medium"
            >
              <span className="opacity-80">↓</span>
              <br />
              Scroll to Explore
              <br />
              <span className="opacity-80">↓</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3.5, duration: 1.2 }}
          onAnimationComplete={() => setIsFirstVisit(false)}
          className="absolute inset-0 bg-background"
        />
      </motion.div>
    </AnimatePresence>
  );
};

const LandingPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const experiences = [
    {
      title: "AI Strategy Consultant",
      company: "Independent Consultant",
      date: "2024 - Present",
      category: "Leadership",
      description: "Leading AI integration projects and customer success transformation initiatives.",
      achievements: [
        "Developed AI-powered customer success solutions",
        "Implemented automated workflow systems",
        "Reduced manual tasks by 40%"
      ],
      color: "from-blue-500/50 to-cyan-500/50"
    },
    {
      title: "Senior Customer Success Manager",
      company: "Tech Enterprise",
      date: "2022 - 2024",
      category: "Management",
      description: "Led customer success strategies for enterprise clients.",
      achievements: [
        "Increased client retention by 25%",
        "Implemented new success metrics",
        "Led team of 5 CSMs"
      ],
      color: "from-purple-500/50 to-pink-500/50"
    }
  ];

  const projects = [
    {
      title: "AI Tools Directory",
      description: "A comprehensive directory for discovering AI-powered Customer Success tools.",
      image: "/images/ai-tools-directory.jpg",
      links: {
        demo: "#",
        github: "#"
      },
    },
    {
      title: "Customer Success GPT Showcase",
      description: "Platform demonstrating custom GPTs for Customer Success Managers.",
      image: "/images/customer-success-gpt.jpg",
      links: {
        demo: "#",
        github: "#"
      },
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Customer Success with AI",
      excerpt: "Exploring how AI is transforming customer success management.",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["AI", "Customer Success"],
    },
    {
      title: "Implementing GPT in Customer Support",
      excerpt: "A guide to integrating GPT models in customer support workflows.",
      date: "March 10, 2024",
      readTime: "7 min read",
      tags: ["GPT", "Support"],
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Welcome />
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Professional Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <TimelineCard key={index} {...experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsVisualization />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader className="relative aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.demo}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.github}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Latest Insights
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <Card className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5" />
              <CardContent className="relative z-10 p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
