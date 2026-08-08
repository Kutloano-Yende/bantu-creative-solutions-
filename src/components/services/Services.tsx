'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Brand Identity Design',
    description:
      'Logo Design, Brand Systems, Business Cards, Brand Guidelines, Social Media Kits — everything your brand needs to stand out with authority.',
    features: ['Logo Design', 'Brand Systems', 'Business Cards', 'Social Media Kits'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 2xl:w-12 2xl:h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6v36M6 24h36M12 12l24 24M36 12L12 36" opacity="0.3" />
        <circle cx="24" cy="24" r="8" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Social Media Design',
    description:
      'Posts, Carousels, Stories, Promotional Graphics, Ad Creatives, and Content Templates designed to grow your audience.',
    features: ['Post Design', 'Stories & Carousels', 'Ad Creatives', 'Content Templates'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 2xl:w-12 2xl:h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="28" rx="4" />
        <path d="M6 18h36" />
        <circle cx="15" cy="28" r="4" />
        <path d="M22 26h14M22 32h10" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Corporate Documents',
    description:
      'Company Profiles, Capability Statements, Pitch Decks, Proposals, and Tender Documents that showcase your credibility.',
    features: ['Company Profiles', 'Pitch Decks', 'Proposals', 'Tender Documents'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 2xl:w-12 2xl:h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6h18l8 8v28a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <path d="M30 6v8h8M16 22h16M16 28h16M16 34h10" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Website Design',
    description:
      'Business Websites, Landing Pages, E-Commerce, Portfolio Sites, and SEO Setup — modern digital experiences that convert.',
    features: ['Business Websites', 'Landing Pages', 'E-Commerce', 'SEO Setup'],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 2xl:w-12 2xl:h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="40" height="28" rx="3" />
        <path d="M4 16h40M20 36h8v4H20z" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="12" r="1" fill="currentColor" />
        <circle cx="18" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/[0.04] rounded-2xl border border-gold/[0.06] hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-lg flex flex-col"
    >
      {/* Cursor glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 167, 74,0.06), transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 p-7 md:p-9 2xl:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className="text-gold/40 group-hover:text-gold transition-colors duration-500">
            {service.icon}
          </div>
          <span className="font-[var(--font-heading)] text-gold/25 text-3xl 2xl:text-4xl group-hover:text-gold/25 transition-colors duration-500">
            {service.number}
          </span>
        </div>
        <h3 className="font-[var(--font-heading)] text-lg md:text-xl 2xl:text-2xl text-cream mb-3 group-hover:text-gold-light transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-cream/50 text-sm 2xl:text-base leading-relaxed font-light group-hover:text-cream/65 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Feature list */}
      <div className="relative z-10 px-7 md:px-9 2xl:px-10 pb-7 md:pb-9 2xl:pb-10 mt-auto">
        <div className="border-t border-gold/15 pt-5">
          <ul className="grid grid-cols-2 gap-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-cream/45 group-hover:text-cream/60 transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold shrink-0 transition-colors duration-500" />
                <span className="text-xs 2xl:text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative section-padding overflow-hidden"
      aria-label="Our Services"
    >
      <div className="gold-arc w-[600px] h-[600px] -bottom-[300px] -right-[200px] opacity-25" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[350px] h-[350px] -top-[180px] -left-[120px] opacity-30" />

          <div className="relative z-10">
            {/* Section header */}
            <div className="text-center mb-14 md:mb-18">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                What We Do
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-cream leading-tight">
                Services That Build Empires
              </h2>
              <p className="mt-5 text-cream/65 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
                From brand identity to digital presence, we deliver strategic creative solutions that position your business for growth.
              </p>
              <div className="mt-6 gold-divider w-16 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-6">
              {services.map((service, i) => (
                <ServiceCard key={service.number} service={service} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
