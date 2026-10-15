import React from 'react';

interface LogoProps {
  /** "light" for cream backgrounds, "dark" for the brown footer. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Emblem + wordmark of the school, reproducing the official logo layout. */
export const Logo: React.FC<LogoProps> = ({ tone = 'light', className = '' }) => {
  const textColor = tone === 'light' ? 'text-ink' : 'text-page';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/logo-emblema.png"
        alt="Escuela de Alexandría"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
      />
      <div className="border-y-2 border-gold py-0.5">
        <span className={`block font-serif uppercase leading-[1.05] tracking-wide text-lg sm:text-xl ${textColor}`}>
          Escuela de
          <br />
          Alexandría
        </span>
      </div>
    </div>
  );
};
