
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/rss');
        const data = await response.json();
        if (data.success) {
          setPosts(data.items);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function extractExcerpt(content: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    return (tempDiv.textContent || '').slice(0, 200) + '...';
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
          Blog
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading posts...</p>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.link}
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
                          <span>{formatDate(post.pubDate)}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{extractExcerpt(post.content)}</p>
                    <div className="flex items-center justify-end">
                      <Button variant="outline" size="sm" onClick={() => window.open(post.link, '_blank')}>
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
