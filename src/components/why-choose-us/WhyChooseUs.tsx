'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: 'Professional Design',
    detail: 'Modern, high-quality designs that enhance brand perception and position your business as an industry leader.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Solutions',
    detail: 'Professional services tailored for startups and SMEs — premium quality without the premium price tag.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 10v20M14 16h12M14 24h12" />
      </svg>
    ),
  },
  {
    title: 'Strategic Thinking',
    detail: 'Solutions focused on supporting long-term business growth, not just short-term fixes.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 4v8M20 28v8M4 20h8M28 20h8" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Client-Centred',
    detail: 'Your goals guide every project we undertake. We listen, we understand, and we deliver.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 8c-4 0-8 3-8 8s4 10 8 16c4-6 8-12 8-16s-4-8-8-8z" />
        <circle cx="20" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Community Impact',
    detail: 'We believe in building businesses that strengthen communities and create economic opportunity.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="12" r="4" />
        <circle cx="10" cy="22" r="3" />
        <circle cx="30" cy="22" r="3" />
        <path d="M20 16v4M14 24l4-4M26 24l-4-4" />
      </svg>
    ),
  },
  {
    title: 'Ubuntu Philosophy',
    detail: 'Rooted in African values — we grow together. Your success is our success.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4" />
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border border-gold/[0.06] bg-cream/50 hover:border-gold/20 hover:shadow-md transition-all duration-500 flex flex-col text-center"
    >
      <div className="p-7 2xl:p-8">
        <motion.div
          animate={hovered ? { scale: 1.1, y: -3 } : { scale: 1, y: 0 }}
          className="inline-flex items-center justify-center w-14 h-14 2xl:w-16 2xl:h-16 rounded-full border-2 border-gold/15 text-gold/50 group-hover:text-gold group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500 mb-5"
        >
          {feature.icon}
        </motion.div>
        <h3 className="font-[var(--font-heading)] text-base 2xl:text-lg text-black mb-2 group-hover:text-gold-dark transition-colors duration-500">
          {feature.title}
        </h3>
        <div className="w-6 h-px bg-gold/25 mx-auto mb-3" />
        <p className="text-charcoal/45 text-sm font-light leading-relaxed">
          {feature.detail}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative section-padding overflow-hidden"
      aria-label="Why Choose Bantu Creative Solutions"
    >
      <div className="gold-arc w-[450px] h-[450px] -bottom-[200px] -left-[150px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[350px] h-[350px] -top-[180px] -right-[120px] opacity-25" />

          <div className="relative z-10">
            <div className="text-center mb-14 md:mb-18">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Why Us
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black leading-tight">
                Why Choose Bantu Creative Solutions
              </h2>
              <p className="mt-5 text-charcoal/60 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
                Six reasons businesses across Africa trust us to build their brands.
              </p>
              <div className="mt-6 gold-divider w-16 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-6">
              {features.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
