/**
 * Identidad y datos institucionales del sitio.
 * Punto único para la URL canónica, redes y canales de donación:
 * las páginas no deben volver a escribir estas cadenas.
 */
export const SITE = {
  name: 'Escuela de Alexandría',
  /** Dominio canónico. Cambiar aquí y en `index.html`, `robots.txt` y `sitemap.xml` al definir el definitivo. */
  url: 'https://escueladealexandria.com',
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
    youtubeChannelId: 'UCZZwgfDZOWO4tlEAXUuVtQA',
    instagram: 'https://www.instagram.com/escueladealexandria/?hl=es-la',
    facebook: 'https://www.facebook.com/escueladealexandria'
  },
  donations: {
    paypal: 'https://www.paypal.com/donate?hosted_button_id=HSRYKCZY3EQ6U',
    payu: 'https://biz.payulatam.com/L0d1b71FF1AC80B'
  }
} as const;

/** Construye una URL absoluta a partir de una ruta interna. */
export const absoluteUrl = (path: string): string =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
