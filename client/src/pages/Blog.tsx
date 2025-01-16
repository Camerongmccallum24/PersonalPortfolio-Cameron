import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt: "Learn how to leverage TypeScript in your React applications for better type safety and developer experience.",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["React", "TypeScript"],
    },
    {
      title: "The Power of Server-Side Rendering in Next.js",
      excerpt: "Explore the benefits of SSR and how it can improve your application's performance and SEO.",
      date: "March 10, 2024",
      readTime: "7 min read",
      tags: ["Next.js", "SSR"],
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
        >
          Blog
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
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
    </motion.main>
  );
}