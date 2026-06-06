'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const industries = [
  { name: 'Small Businesses & Startups', description: 'Affordable, professional solutions', angle: 0 },
  { name: 'NGOs & Community Organisations', description: 'Brand building for social impact', angle: 45 },
  { name: 'Educational Institutions', description: 'Profiles, stationery & digital presence', angle: 90 },
  { name: 'Professional Services', description: 'Law, accounting, consulting, healthcare', angle: 135 },
  { name: 'Retail & E-Commerce', description: 'Product branding, online stores', angle: 180 },
  { name: 'Construction Companies', description: 'Corporate documents, branding, tenders', angle: 225 },
  { name: 'Creative Entrepreneurs', description: 'Personal branding & portfolio kits', angle: 270 },
  { name: 'Government & Development', description: 'Capability statements, tender documents', angle: 315 },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative section-padding overflow-hidden"
      aria-label="Industries We Serve"
    >
      <div className="gold-arc w-[500px] h-[500px] -top-[200px] right-[-150px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[300px] h-[300px] -bottom-[150px] -left-[100px] opacity-30" />

          <div className="relative z-10">
            {/* Section header */}
            <div className="text-center mb-14 md:mb-18">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Who We Serve
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black leading-tight">
                Industries We Empower
              </h2>
              <p className="mt-5 text-charcoal/60 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
                From startups to government bodies, we create solutions for every sector.
              </p>
              <div className="mt-6 gold-divider w-16 mx-auto" />
            </div>

            <div className="relative">
              {/* Africa map — lg+ */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-[600px] h-[600px] 2xl:w-[700px] 2xl:h-[700px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 300 350" className="w-44 h-52 2xl:w-56 2xl:h-64 text-gold/15">
                      <path
                        d="M150 20 C130 20 112 30 105 50 C98 70 94 90 90 115 C86 140 82 165 86 185 C90 205 98 220 105 235 C112 250 122 260 135 268 C142 272 150 275 158 272 C166 268 174 260 182 248 C190 236 198 220 202 200 C206 180 204 160 202 140 C200 120 194 100 186 80 C178 60 166 45 158 35 C154 28 152 22 150 20Z"
                        fill="currentColor"
                        stroke="#C89B3C"
                        strokeWidth="0.5"
                        opacity="0.4"
                      />
                      <circle cx="150" cy="200" r="6" fill="#C89B3C" opacity="0.8">
                        <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </motion.div>

                  {industries.map((industry, i) => {
                    const radius = 260;
                    const angleRad = (industry.angle * Math.PI) / 180;
                    const x = 50 + (Math.cos(angleRad) * radius) / 7.5;
                    const y = 50 + (Math.sin(angleRad) * radius) / 7.5;

                    return (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="absolute group"
                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        <div className="relative z-10 text-center cursor-pointer">
                          <div className="w-3 h-3 rounded-full bg-gold/40 mx-auto mb-2 group-hover:bg-gold group-hover:shadow-[0_0_12px_rgba(200,155,60,0.4)] transition-all duration-300" />
                          <span className="block text-charcoal/75 text-xs 2xl:text-sm font-medium group-hover:text-gold-dark transition-colors duration-300 whitespace-nowrap">
                            {industry.name}
                          </span>
                          <span className="block text-charcoal/35 text-[10px] 2xl:text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {industry.description}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile grid */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-5 rounded-xl border border-gold/[0.06] bg-cream/50 hover:border-gold/20 hover:shadow-sm transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                      <h3 className="text-black text-sm font-medium group-hover:text-gold-dark transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-charcoal/45 text-xs pl-5">{industry.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
