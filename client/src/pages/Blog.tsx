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
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/rss');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch blog posts');
        }

        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [retryCount]); // Add retryCount to dependencies to allow manual refresh

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function sanitizeHTML(html: string) {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || '';
    return text.replace(/(\r\n|\n|\r)/gm, " ").trim();
  }

  function extractExcerpt(content: string, length: number = 250) {
    const cleanText = sanitizeHTML(content);
    if (!cleanText) return 'No content available';
    return cleanText.length > length 
      ? `${cleanText.slice(0, length).trim()}...` 
      : cleanText;
  }

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

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
          ) : error ? (
            <div className="text-center py-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-red-500 mb-4">
                    <h2 className="text-xl font-semibold mb-2">Error Loading Posts</h2>
                    <p className="text-sm">{error}</p>
                  </div>
                  <Button 
                    onClick={handleRetry} 
                    variant="outline"
                    className="mt-2"
                  >
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    No posts available at the moment.
                  </p>
                </CardContent>
              </Card>
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