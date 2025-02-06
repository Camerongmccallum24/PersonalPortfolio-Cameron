import { Router } from 'express';
import Parser from 'rss-parser';

const router = Router();
const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'fullContent'],
      ['description', 'description']
    ],
  }
});
const RSS_URL = 'https://rss.beehiiv.com/feeds/ILy1gJzm7n.xml';

router.get('/api/rss', async (req, res) => {
  try {
    const feed = await parser.parseURL(RSS_URL);

    // Transform the feed items to match our frontend expectations
    const items = feed.items.map(post => ({
      title: post.title,
      link: post.link,
      pubDate: post.pubDate,
      content: post['fullContent'] || post['description'] || post.content || 'No content available',
      author: post.creator || 'AI Success Network',
      categories: post.categories || []
    }));

    res.json({ success: true, items });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch RSS feed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;