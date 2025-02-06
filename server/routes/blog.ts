import { Router } from 'express';

const router = Router();

const RSS_URL = `https://api.beehiiv.com/v2/publications/pub_635251cb-7233-42d9-82e3-0bd17ca0a8a3/posts`;
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || '';

router.get('/api/rss', async (_req, res) => {
  try {
    if (!BEEHIIV_API_KEY) {
      throw new Error('BeehiV API key is not configured');
    }

    // Log first few characters of API key for verification (safely)
    console.log('API Key length:', BEEHIIV_API_KEY.length);
    console.log('API Key starts with:', BEEHIIV_API_KEY.substring(0, 4) + '...');

    console.log('Fetching BeehiV posts from:', RSS_URL);
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('BeehiV API Error:', response.status, errorText);
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('BeehiV API Response:', JSON.stringify(data, null, 2));

    // Transform the v2 API response to match our frontend expectations
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
      items
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