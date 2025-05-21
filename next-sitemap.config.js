/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kletzcontracting.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*', '/dashboard/*', '/blog', '/blog/*', '/OLDservices', 
    '/blog-details', '/opportunity-updated', '/project', '/project-details', '/services-details',
    '/team', '/team-details'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/blog/', '/blog/*', '/OLDservices', 
    '/blog-details', '/opportunity-updated', '/project', '/project-details', '/services-details',
    '/team', '/team-details'
  ],
      },
    ],
  },
}