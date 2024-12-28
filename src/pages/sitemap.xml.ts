import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async () => {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://donotshow.me/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
};
