/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kletzcontracting.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*', 
    '/admin/*', 
    '/dashboard/*', 
    '/OLDservices', 
    '/blog-details', 
    '/opportunity-updated', 
    '/project', 
    '/project-details', 
    '/services-details',
    '/team', 
    '/team-details',
    '/404',
    '/error',
    '/payment-success',
    '/thank-you'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', 
          '/admin/', 
          '/dashboard/', 
          '/OLDservices', 
          '/blog-details', 
          '/opportunity-updated', 
          '/project', 
          '/project-details', 
          '/services-details',
          '/team', 
          '/team-details',
          '/404',
          '/error'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        crawlDelay: 0,
      }
    ],
    additionalSitemaps: [
      'https://kletzcontracting.com/sitemap.xml',
    ],
  },
  // Transform function to add priority based on page type
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/services/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/service-areas/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/service-areas') {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path === '/contact' || path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}