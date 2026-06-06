'use client';

import { useMagnetic } from '@/hooks/useMagnetic';

/* coss/ui Button pattern: variant (default, outline, ghost, link), size (sm, default, lg) */

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

export default function GoldButton({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  className = '',
  loading = false,
}: GoldButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>(0.25);

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-[10px] gap-2',
    default: 'px-7 py-3.5 text-[11px] gap-2.5',
    lg: 'px-9 py-4.5 text-xs gap-3',
  };

  const variantStyles = {
    primary:
      'bg-gold text-white hover:bg-gold-dark shadow-[0_2px_8px_rgba(200,155,60,0.25)] hover:shadow-[0_4px_16px_rgba(200,155,60,0.3)] active:shadow-[0_1px_4px_rgba(200,155,60,0.2)] active:translate-y-[0.5px]',
    outline:
      'border border-gold/40 text-gold hover:bg-gold hover:text-white hover:border-gold hover:shadow-[0_2px_8px_rgba(200,155,60,0.2)]',
    ghost:
      'text-gold hover:bg-gold/10 active:bg-gold/15',
    link:
      'text-gold hover:text-gold-dark underline-offset-4 hover:underline px-0 py-0',
  };

  const baseStyles = `relative inline-flex items-center justify-center font-medium tracking-[0.18em] uppercase overflow-hidden transition-all duration-300 cursor-pointer rounded-full ${sizeStyles[size]}`;

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-btn inline-block"
    >
      <span
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-disabled={loading}
        data-loading={loading || undefined}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center" data-slot="button-loading-indicator">
            <svg className="w-4 h-4 animate-spin text-current" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
              <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        )}
        <span className={`relative z-10 flex items-center gap-2 ${loading ? 'invisible' : ''}`}>
          {children}
        </span>
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" tabIndex={loading ? -1 : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={loading} className="inline-block">
      {content}
    </button>
  );
}
