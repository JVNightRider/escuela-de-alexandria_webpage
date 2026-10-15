import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  image: string;
  /** Fraction of the scroll distance the image travels (0 = static, 0.5 = slow). */
  speed?: number;
  /** Tailwind blur utility, e.g. "blur-[3px]". */
  blurClass?: string;
  className?: string;
}

/**
 * Background image that moves slower than the page while scrolling.
 * Place it inside a `relative overflow-hidden` container.
 */
export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  image,
  speed = 0.4,
  blurClass = 'blur-[3px]',
  className = '',
}) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frameId = 0;
    const update = () => {
      frameId = 0;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0) scale(1.12)`;
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
  }, [speed]);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className={`absolute inset-0 bg-cover bg-center will-change-transform ${blurClass} ${className}`}
      style={{ backgroundImage: `url('${image}')`, transform: 'scale(1.12)' }}
    />
  );
};
