
import { Router } from 'express';
import Parser from 'rss-parser';

const router = Router();
const parser = new Parser({
  timeout: 15000,
  headers: {
    'Accept': 'application/rss+xml, application/xml, text/xml, */*',
    'User-Agent': 'AI-Success-Network-Blog/1.0',
    'Authorization': '8MAARJXXQjz31lvzgBCvOfZZTDqrF9RD6HU34JMRHTDErEw5UuvJbjYbpL8YLmVD'
  },
  customFields: {
    item: [
      ['content:encoded', 'fullContent'],
      ['description', 'description']
    ],
  }
});

const RSS_URL = `https://api.beehiiv.com/v2/publications/pub_635251cb-7233-42d9-82e3-0bd17ca0a8a3/posts`;
const BEEHIIV_API_KEY = '8MAARJXXQjz31lvzgBCvOfZZTDqrF9RD6HU34JMRHTDErEw5UuvJbjYbpL8YLmVD';

router.get('/api/rss', async (_req, res) => {
  try {
    console.log('Fetching RSS feed from:', RSS_URL);
    const response = await fetch(RSS_URL, {
      headers: {
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    const items = data.data.map((post: any) => ({
      title: post.title || 'Untitled Post',
      link: post.web_url || '#',
      pubDate: post.created_at || new Date().toISOString(),
      content: post.content || post.subtitle || 'No content available',
      author: 'AI Success Network',
      categories: post.tags || []
    }));

    res.json({ 
      success: true, 
      items,
      feedTitle: feed.title,
      feedDescription: feed.description
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching RSS feed - please try again later',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
