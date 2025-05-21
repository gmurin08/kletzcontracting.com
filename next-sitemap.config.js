/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kletzcontracting.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*', '/dashboard/*', '/blog', '/blog/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/blog/', '/blog/*'],
      },
    ],
  },
}