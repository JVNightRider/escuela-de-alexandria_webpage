import React from 'react';
import { SITE, getSiteOrigin } from '../data/site';

/**
 * Datos estructurados de la organización (schema.org).
 * Se generan con el origen real de la URL, así que siguen siendo correctos
 * aunque el sitio cambie de dominio o de proveedor de hosting.
 */
export const SiteSchema: React.FC = () => {
  const origin = getSiteOrigin();
  if (!origin) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    alternateName: 'Escuela de Alexandria',
    url: `${origin}/`,
    logo: `${origin}${SITE.logo}`,
    image: `${origin}${SITE.ogImage}`,
    description: SITE.description,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: 'CO'
    },
    sameAs: [
      SITE.social.youtubeChannel,
      SITE.social.instagram.split('?')[0],
      SITE.social.facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
