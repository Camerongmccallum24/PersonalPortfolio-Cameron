import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  author?: string;
  categories?: string[];
}

export default function Blog() {
  const [loading] = useState(false);

  // Static blog post data
  const posts: BlogPost[] = [
    {
      title: "AI for CSMs: AI Automation in Customer Success",
      link: "https://aisuccessnetwork.beehiiv.com/p/ai-for-csms-ai-automation-in-customer",
      pubDate: "2024-09-10T19:48:32Z",
      content: "AI automation is revolutionizing Customer Success, with 85% of CS teams reporting significant efficiency gains within six months of implementation. Discover the foundations of this game-changing technology. According to a recent survey, 67% of CS teams are now using some form of AI automation. Companies utilizing AI in their CS operations report a 25% increase in customer satisfaction scores on average. 78% of CSMs say AI tools have significantly improved their ability to manage larger customer portfolios effectively.",
      author: "AI Success Network",
      categories: ["Business", "Artificial Intelligence", "Technology"]
    }
  ];

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

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
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
        >
          Latest Articles
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{formatDate(post.pubDate)}</span>
                        {post.author && (
                          <>
                            <Separator orientation="vertical" className="h-4" />
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {post.content}
                    </p>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(post.link, '_blank')}
                        className="group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.main>
  );
}