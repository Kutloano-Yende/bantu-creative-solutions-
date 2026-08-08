'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function PhotoCard({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  top = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  top?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gold/15 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover ${top ? 'object-top' : 'object-center'} transition-transform duration-700 group-hover:scale-105`}
        priority={priority}
      />
      {/* warm gold tint + bottom fade so photos sit in the dark/gold palette */}
      <div className="absolute inset-0 bg-gold/[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {caption && (
        <span className="absolute bottom-4 left-5 right-5 text-cream text-sm md:text-base font-[var(--font-accent)] italic leading-snug">
          {caption}
        </span>
      )}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </div>
  );
}

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="community"
      className="relative section-padding overflow-hidden"
      aria-label="Our Community"
    >
      <div className="gold-arc w-[500px] h-[500px] -top-[200px] -right-[200px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[350px] h-[350px] -bottom-[180px] -left-[120px] opacity-25" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Community
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-cream leading-tight max-w-4xl">
                Rooted in{' '}
                <span className="gold-gradient-text">Ivory Park</span>, Gauteng
              </h2>
              <p className="mt-5 text-cream/65 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                We grow where we come from. From the heart of Gauteng, we empower local
                entrepreneurs and uplift the communities we belong to — building brands
                across South Africa and the continent.
              </p>
              <div className="mt-6 gold-divider w-16" />
            </div>

            {/* Featured local video — Black-African founders at work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative h-72 md:h-[420px] overflow-hidden rounded-2xl border border-gold/15"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/people/community-poster.jpg"
              >
                <source src="/videos/community.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gold/[0.06] mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-5 right-5 text-cream text-sm md:text-base font-[var(--font-accent)] italic leading-snug">
                Founders building the future — together.
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>

            {/* Trio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4 md:mt-5"
            >
              <PhotoCard
                src="/images/people/founder-1.jpg"
                alt="Bantu Creative Solutions — our people"
                className="h-72 md:h-80"
                top
              />
              <PhotoCard
                src="/images/people/founder-2.jpg"
                alt="Bantu Creative Solutions — our people"
                className="h-72 md:h-80"
                top
              />
              <PhotoCard
                src="/images/people/founder-1.jpg"
                alt="Bantu Creative Solutions — our people"
                className="h-72 md:h-80"
                top
              />
              <PhotoCard
                src="/images/people/founder-2.jpg"
                alt="Bantu Creative Solutions — our people"
                className="h-72 md:h-80"
                top
              />
            </motion.div>

            {/* Honest framing of representative imagery */}
            <p className="mt-6 text-cream/30 text-[11px] text-center font-light italic">
              Imagery representative of the South African communities we serve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
