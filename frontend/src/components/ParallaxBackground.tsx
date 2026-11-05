import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  image: string;
  /** Fracción de la distancia de scroll que recorre la imagen (0 = estático). */
  speed?: number;
}

/**
 * Fondo que se desplaza más despacio que la página.
 * La imagen y el desplazamiento son valores de ejecución: se aplican por ref,
 * nunca con un atributo `style` declarado en el JSX.
 */
export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ image, speed = 0.2 }) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    layer.style.backgroundImage = `url('${image}')`;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frameId = 0;
    const update = () => {
      frameId = 0;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0) scale(1.08)`;
      }
    };
    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [image, speed]);

  return <div ref={layerRef} aria-hidden="true" className="parallax" />;
};
