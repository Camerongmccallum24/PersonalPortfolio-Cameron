
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

const RSS_URL = 'https://rss.beehiiv.com/feeds/ILy1gJzm7n.xml';

router.get('/api/rss', async (_req, res) => {
  try {
    console.log('Fetching RSS feed from:', RSS_URL);
    const feed = await parser.parseURL(RSS_URL);
    
    if (!feed || !feed.items) {
      return res.status(404).json({
        success: false,
        message: 'No posts found'
      });
    }

    const items = feed.items.map(post => ({
      title: post.title || 'Untitled Post',
      link: post.link || '#',
      pubDate: post.pubDate || new Date().toISOString(),
      content: post.content || post['fullContent'] || post['description'] || 'No content available',
      author: post.creator || post.author || 'AI Success Network',
      categories: post.categories || []
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
