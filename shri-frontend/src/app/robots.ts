import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'Claude-SearchBot',
          'Claude-User',
          'Applebot',
          'Googlebot',
          'Amazonbot',
        ],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'Bytespider',
          'CCBot',
          'cohere-ai',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://shri.org.in/sitemap.xml',
  }
}
