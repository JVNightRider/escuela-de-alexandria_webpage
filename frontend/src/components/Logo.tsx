import React from 'react';

interface LogoProps {
  /** "light" para fondos claros, "dark" para el pie de página. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Emblema + logotipo de la escuela. */
export const Logo: React.FC<LogoProps> = ({ tone = 'light', className = '' }) => {
  const textClass = tone === 'light' ? 'logo__text--light' : 'logo__text--dark';

  return (
    <div className={`logo ${className}`}>
      <img src="/images/logo-emblema.png" alt="Escuela de Alexandría" className="logo__emblem" />
      <div className="logo__wordmark">
        <span className={`logo__text ${textClass}`}>
          Escuela de
          <br />
          Alexandría
        </span>
      </div>
    </div>
  );
};
