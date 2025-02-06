import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const router = Router();
const parseXMLAsync = promisify(parseString);

router.get('/api/rss', async (req, res) => {
  try {
    // Read the local RSS feed file
    const rssContent = fs.readFileSync(
      path.join(process.cwd(), 'attached_assets/rss_beehiiv_com_feeds_ILy1gJzm7n.md'),
      'utf-8'
    );

    // Parse the XML content
    const result = await parseXMLAsync(rssContent);
    
    // Extract and format the items
    const items = result.rss.channel[0].item.map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      content: item['content:encoded'] ? item['content:encoded'][0] : item.description[0],
      author: item['dc:creator'] ? item['dc:creator'][0] : undefined,
      categories: item.category ? item.category.map((cat: string) => cat) : undefined
    }));

    res.json({ success: true, items });
  } catch (error) {
    console.error('Error processing RSS feed:', error);
    res.status(500).json({ success: false, error: 'Failed to process RSS feed' });
  }
});

export default router;
