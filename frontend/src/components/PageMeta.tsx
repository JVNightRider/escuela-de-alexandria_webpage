import { useEffect } from 'react';
import { SITE, absoluteUrl } from '../data/site';

export interface PageMetaProps {
  /** Título sin el nombre de la escuela: se compone aquí. */
  title: string;
  description: string;
  /** Ruta canónica de la página, p. ej. `/profesores`. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Metadatos por ruta.
 *
 * Las etiquetas viven en `index.html` para que los rastreadores que no ejecutan
 * JavaScript (redes sociales) las lean siempre; este componente solo actualiza
 * sus valores al navegar, sin duplicar etiquetas en el documento.
 */
export const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  path,
  image = SITE.ogImage,
  type = 'website'
}) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} · ${SITE.name}`;
    const url = absoluteUrl(path);
    const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);

    document.title = fullTitle;

    const setAttribute = (selector: string, attribute: string, value: string) => {
      document.head.querySelector(selector)?.setAttribute(attribute, value);
    };

    setAttribute('meta[name="description"]', 'content', description);
    setAttribute('link[rel="canonical"]', 'href', url);
    setAttribute('meta[property="og:type"]', 'content', type);
    setAttribute('meta[property="og:title"]', 'content', fullTitle);
    setAttribute('meta[property="og:description"]', 'content', description);
    setAttribute('meta[property="og:url"]', 'content', url);
    setAttribute('meta[property="og:image"]', 'content', imageUrl);
    setAttribute('meta[name="twitter:title"]', 'content', fullTitle);
    setAttribute('meta[name="twitter:description"]', 'content', description);
    setAttribute('meta[name="twitter:image"]', 'content', imageUrl);
  }, [title, description, path, image, type]);

  return null;
};
