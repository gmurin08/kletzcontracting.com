import fs from 'fs';
import path from 'path';
import { createSlug } from '@/lib/blog-utils';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // In production, you'd want to add authentication here
  // const apiKey = req.headers['x-api-key'];
  // if (apiKey !== process.env.BLOG_API_KEY) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  try {
    const {
      title,
      excerpt,
      content,
      coverImage,
      author,
      categories,
      tags,
      status = 'draft',
      publishDate,
      seo
    } = req.body;

    // Validate required fields
    if (!title || !content || !excerpt) {
      return res.status(400).json({ 
        message: 'Missing required fields: title, content, and excerpt are required' 
      });
    }

    // Create slug from title
    const slug = createSlug(title);
    const date = publishDate || new Date().toISOString().split('T')[0];

    // Create frontmatter
    const frontmatter = {
      title,
      excerpt,
      coverImage: coverImage || '/assets/img/blog/default-cover.jpg',
      date,
      publishDate: publishDate || date,
      author: author || { name: 'Kletz Team', picture: '/assets/img/team/team.jpg' },
      categories: categories || [],
      tags: tags || [],
      seo: seo || {},
      status
    };

    // Create markdown content
    const markdownContent = `---
${Object.entries(frontmatter).map(([key, value]) => {
  if (typeof value === 'object') {
    return `${key}:\n${JSON.stringify(value, null, 2).split('\n').map((line, i) => i === 0 ? '  ' + line : '  ' + line).join('\n')}`;
  }
  return `${key}: ${JSON.stringify(value)}`;
}).join('\n')}
---

${content}`;

    // Save file
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return res.status(400).json({ 
        message: 'A post with this title already exists',
        slug 
      });
    }

    fs.writeFileSync(filePath, markdownContent);

    return res.status(201).json({
      message: 'Blog post created successfully',
      slug,
      url: `/blog/${slug}`
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return res.status(500).json({ 
      message: 'Error creating blog post',
      error: error.message 
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};