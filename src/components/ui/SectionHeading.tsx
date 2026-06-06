'use client';

import { useScrollReveal } from '@/hooks/useGsap';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div ref={ref} className={`max-w-3xl mb-16 md:mb-24 ${alignment}`}>
      {label && (
        <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4 font-[var(--font-body)]">
          {label}
        </span>
      )}
      <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-charcoal/70 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 gold-divider w-20 mx-auto" />
    </div>
  );
}
