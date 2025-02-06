
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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

  function sanitizeHTML(html: string) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  function extractExcerpt(content: string, length: number = 200) {
    const cleanText = sanitizeHTML(content);
    return cleanText.length > length ? `${cleanText.slice(0, length)}...` : cleanText;
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

        <div className="max-w-3xl mx-auto space-y-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts available.</p>
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
                        {post.categories && post.categories.length > 0 && (
                          <>
                            <Separator orientation="vertical" className="h-4" />
                            <div className="flex gap-2">
                              {post.categories.map((category) => (
                                <span key={category} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {category}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {extractExcerpt(post.content)}
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
