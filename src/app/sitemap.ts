import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yashasvisingla.com';
  
  // Add all your static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/how-i-work',
    '/faqs',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add blog posts
  const blogPosts = [
    '/blog/understanding-anxiety',
    '/blog/understanding-depression',
    '/blog/family-dynamics',
    '/blog/culture-bound-syndromes',
    '/blog/workplace-anxiety',
    '/blog/vaginismus',
    '/blog/understanding-ocd',
    '/blog/psychodynamic-depression',
    '/blog/psychodynamic-anxiety',
    '/blog/psychodynamic-trauma',
    '/blog/psychodynamic-narcissism',
    '/blog/psychodynamic-bpd',
    '/blog/psychodynamic-schizophrenia',
    '/blog/psychodynamic-bipolar',
    '/blog/psychodynamic-eating-disorders',
    '/blog/psychodynamic-addiction',
    '/blog/psychodynamic-ocd',
    '/blog/psychodynamic-ptsd',
    '/blog/psychodynamic-personality-disorders',
    '/blog/psychodynamic-adhd',
    '/blog/psychodynamic-autism',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogPosts];
} 