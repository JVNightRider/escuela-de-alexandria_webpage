import fs from 'node:fs';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

/** Rutas públicas indexables del sitio (las que aparecen en el sitemap). */
const ROUTES = [
  '/',
  '/seminarios',
  '/profesores',
  '/cursos',
  '/sala-de-profesores',
  '/cronicas',
  '/catedra-exclusiva',
  '/panorama-biblico',
  '/canones-biblicos',
  '/cursos/canones-biblicos',
  '/cursos/panorama-biblico',
  '/cursos/catedra-exclusiva',
  '/cursos/cronicas',
  '/comunidad'
];

/**
 * Origen del despliegue, sin dominio hardcodeado: cada proveedor publica su
 * propia URL en una variable de entorno. Si no existe ninguna, se usan rutas
 * relativas y el sitemap no se publica (nunca uno con un dominio equivocado).
 */
const DEPLOY_ORIGIN = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '') ||
  process.env.URL ||
  process.env.CF_PAGES_URL ||
  ''
).replace(/\/$/, '');

const buildSitemap = (origin: string): string => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((route) => {
    const priority = route === '/' ? '1.0' : route.startsWith('/cursos/') ? '0.6' : '0.8';
    return [
      '  <url>',
      `    <loc>${origin}${route}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>'
    ].join('\n');
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const buildRobots = (origin: string): string =>
  `User-agent: *\nAllow: /\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`;

/**
 * SEO dependiente del host: inyecta el origen del despliegue en index.html y
 * genera robots.txt y sitemap.xml con el dominio real, sin fijarlo en el código.
 */
const seoPlugin = (): Plugin => ({
  name: 'eda-seo',
  transformIndexHtml(html, ctx) {
    // En desarrollo se usa el propio servidor local; en el build, el origen del
    // despliegue (o rutas relativas si el proveedor no lo publica).
    const devPort = ctx.server?.config.server.port ?? 5173;
    const origin = DEPLOY_ORIGIN || (ctx.server ? `http://127.0.0.1:${devPort}` : '');
    return html.replaceAll('__SITE_ORIGIN__', origin);
  },
  configureServer(server) {
    const devOrigin = DEPLOY_ORIGIN || `http://127.0.0.1:${server.config.server.port ?? 5173}`;
    server.middlewares.use((req, res, next) => {
      const url = (req.url ?? '').split('?')[0];
      if (url === '/sitemap.xml') {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        res.end(buildSitemap(devOrigin));
        return;
      }
      if (url === '/robots.txt') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(buildRobots(devOrigin));
        return;
      }
      next();
    });
  },
  closeBundle() {
    const outDir = path.resolve(process.cwd(), 'dist');
    fs.writeFileSync(path.join(outDir, 'robots.txt'), buildRobots(DEPLOY_ORIGIN));
    if (DEPLOY_ORIGIN) {
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap(DEPLOY_ORIGIN));
    }
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
  server: {
    port: 5173
  }
});
