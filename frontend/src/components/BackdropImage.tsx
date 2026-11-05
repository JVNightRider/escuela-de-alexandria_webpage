import React, { useEffect, useRef } from 'react';

interface BackdropImageProps {
  src: string;
  className?: string;
}

/**
 * Imagen de fondo de un banner. Recibe la ruta por props y la aplica por ref:
 * el JSX no declara `style`, y la imagen sigue viniendo de los datos.
 */
export const BackdropImage: React.FC<BackdropImageProps> = ({ src, className = '' }) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.style.backgroundImage = `url('${src}')`;
    }
  }, [src]);

  return <div ref={layerRef} aria-hidden="true" className={className} />;
};
