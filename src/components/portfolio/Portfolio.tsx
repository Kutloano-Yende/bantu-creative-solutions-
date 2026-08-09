'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'ProSuite — Enterprise Management Suite',
    url: 'https://www.app.prosuite.co.za/',
    urlLabel: 'Visit live app',
    category: 'Enterprise Systems',
    description: 'Role: Junior Software Developer at Promilezi. Contributing to a live, cloud-based suite of six operational modules — asset, risk, audit, performance, compliance, and document management — including module prototyping with typed domain models ahead of the production build.',
    deliverables: ['Vue.js', 'Vite', 'TypeScript'],
  },
  {
    title: 'ProSuite — Product Website',
    url: 'https://www.prosuite.co.za/',
    urlLabel: 'Visit live site',
    category: 'Product Website',
    description: 'Role: design and build, freelance (NYK). The public product site for the ProSuite platform — positioning the six modules, the "Why ProSuite?" story, and demo-request conversion paths for prospective clients.',
    deliverables: ['Vue.js', 'Vite', 'TypeScript'],
  },
  {
    title: 'HomeReady Finance Solutions',
    url: 'https://www.homereadyfinance.co.za/',
    urlLabel: 'Visit live site',
    category: 'Web Platform',
    description: 'Role: design and build, freelance (NYK). The live web platform for a credit-readiness company — services, process, FAQ, and WhatsApp conversion paths, presenting a sensitive financial service in plain language.',
    deliverables: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Akani BEE Ratings',
    url: 'https://akanibee.co.za/',
    urlLabel: 'Visit live site',
    category: 'Web Platform',
    description: 'Role: design and build, freelance (NYK). The live platform for a SANAS-accredited, 51% Black-owned B-BBEE ratings consultancy — accreditation-led storytelling with quote-request and WhatsApp conversion paths.',
    deliverables: ['TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Guardian AI — GRC Platform',
    url: 'https://guardian-ai-cyan.vercel.app/',
    urlLabel: 'Visit live site',
    category: 'Governance & Compliance',
    description: 'Role: personal build. A full governance, risk and compliance platform spanning eleven operational modules — from risk registers and incident tracking to audits, training, and role-based administration.',
    deliverables: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Apparel Co. — E-Commerce Platform',
    url: 'https://apparel-co-launch.vercel.app/',
    urlLabel: 'Visit live site',
    category: 'E-Commerce',
    description: 'Role: personal build. A complete online store covering the full order lifecycle — checkout, confirmation, tracking, returns, customer accounts, and an admin back office.',
    deliverables: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Fettle Fits — Sportswear E-Commerce',
    url: 'https://fettlefits.vercel.app/',
    urlLabel: 'Visit live site',
    category: 'E-Commerce',
    description: 'Role: personal build. A premium activewear store for a South African sportswear brand — bold editorial hero, product collection, cart, and account flows built for performance and style.',
    deliverables: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Tembisa Street — Streetwear E-Commerce',
    url: 'https://tembisa-street-shop.vercel.app/',
    urlLabel: 'Visit live site',
    category: 'E-Commerce',
    description: 'Role: personal build. "From Tembisa to the world" — a modern African streetwear store with a bold editorial hero, shop collection, cart, and account flows.',
    deliverables: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'HyperView — Dashboard Platform',
    url: 'https://github.com/Kutloano-Yende/HyperView',
    urlLabel: 'View on GitHub',
    category: 'Dashboards',
    description: 'Role: personal build. A full-stack operational dashboard platform with a dedicated backend service and drill-down metric views.',
    deliverables: ['TypeScript', 'Node.js', 'React'],
  },
  {
    title: 'Bantu — Creative Agency Platform',
    url: 'https://www.bantucreativesolutions.co.za/',
    urlLabel: 'Visit live site',
    category: 'Web Platform',
    description: 'Role: personal build. This site — a South African creative agency rooted in Ubuntu, with a 3D brand centerpiece, editorial gold-on-black storytelling, and start-a-project conversion paths for entrepreneurs and startups.',
    deliverables: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative section-padding overflow-hidden"
      aria-label="Our Portfolio"
    >
      <div className="gold-arc w-[500px] h-[500px] -top-[200px] -left-[200px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[400px] h-[400px] -bottom-[200px] -right-[150px] opacity-25" />

          <div className="relative z-10">
            <div className="text-center mb-14 md:mb-18">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Work
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-cream leading-tight">
                Selected Projects
              </h2>
              <p className="mt-5 text-cream/65 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
                A showcase of the brands we&apos;ve built and the businesses we&apos;ve empowered.
              </p>
              <div className="mt-6 gold-divider w-16 mx-auto" />
            </div>

            <div className="space-y-4 2xl:space-y-5">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={activeIndex === i}
                    className="relative p-7 md:p-9 2xl:p-10 rounded-2xl border border-gold/[0.06] bg-white/[0.03] hover:border-gold/20 cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-md focus:outline-none focus-visible:border-gold/40"
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIndex(activeIndex === i ? null : i);
                      }
                    }}
                  >
                    <div className="flex flex-row items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-gold/30 font-[var(--font-heading)] text-sm">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold border border-gold/25 px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-[var(--font-heading)] text-xl md:text-2xl 2xl:text-3xl text-cream group-hover:text-gold-light transition-colors duration-500">
                          {project.title}
                        </h3>
                      </div>

                      <motion.div
                        animate={activeIndex === i ? { rotate: 45 } : { rotate: 0 }}
                        className="w-10 h-10 rounded-full border-2 border-gold/15 flex items-center justify-center text-gold/40 group-hover:border-gold group-hover:text-gold transition-all duration-500 shrink-0"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 8h8M8 4v8" />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4">
                            <p className="text-cream/60 text-sm 2xl:text-base font-light leading-relaxed max-w-2xl mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.deliverables.map((d) => (
                                <span
                                  key={d}
                                  className="text-[10px] tracking-[0.1em] uppercase text-gold/60 border border-gold/15 px-3 py-1 rounded-full bg-gold/[0.03]"
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light border-b border-gold/30 hover:border-gold pb-0.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-sm"
                            >
                              {project.urlLabel}
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-hidden="true"
                              >
                                <path d="M6 3h7v7M13 3L4 12" />
                              </svg>
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
