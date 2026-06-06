'use client';

import { useMagnetic } from '@/hooks/useMagnetic';

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function GoldButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: GoldButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>(0.25);

  const baseStyles =
    'relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 cursor-pointer';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg'
      : 'border-2 border-gold text-gold hover:bg-gold hover:text-white';

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-btn inline-block"
    >
      <span className={`${baseStyles} ${variantStyles} ${className}`}>
        <span className="relative z-10">{children}</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
