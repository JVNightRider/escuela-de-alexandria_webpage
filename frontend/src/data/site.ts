/**
 * Identidad y datos institucionales del sitio.
 *
 * No hay dominio fijo: el origen se toma siempre de la URL desde la que se
 * sirve el sitio, de modo que cambiar de servidor o de dominio no exige tocar
 * el código. El sitemap y el robots.txt los genera `vite.config.ts` con el
 * origen que publica el proveedor de hosting.
 */
export const SITE = {
  name: 'Escuela de Alexandría',
  locale: 'es_CO',
  lang: 'es',
  description:
    'Escuela de ciencias bíblicas en Medellín: seminarios, cátedras magistrales y crítica textual sobre los manuscritos que dieron forma a las Escrituras.',
  ogImage: '/images/og-image.jpg',
  logo: '/images/logo-emblema.png',
  email: 'escueladealexandria@gmail.com',
  address: {
    city: 'Medellín',
    region: 'Antioquia',
    country: 'Colombia'
  },
  social: {
    youtube: 'https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos',
    youtubeChannel: 'https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA',
    youtubeChannelId: 'UCZZwgfDZOWO4tlEAXUuVtQA',
    instagram: 'https://www.instagram.com/escueladealexandria/?hl=es-la',
    facebook: 'https://www.facebook.com/escueladealexandria'
  },
  donations: {
    paypal: 'https://www.paypal.com/donate?hosted_button_id=HSRYKCZY3EQ6U',
    payu: 'https://biz.payulatam.com/L0d1b71FF1AC80B'
  }
} as const;

/** Origen actual del sitio (vacío durante el render en servidor). */
export const getSiteOrigin = (): string =>
  typeof window === 'undefined' ? '' : window.location.origin;

/** Construye una URL absoluta a partir de una ruta interna y el origen actual. */
export const absoluteUrl = (path: string): string =>
  `${getSiteOrigin()}${path.startsWith('/') ? path : `/${path}`}`;
