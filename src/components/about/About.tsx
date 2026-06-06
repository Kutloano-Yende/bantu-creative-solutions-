'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    number: '01',
    title: 'Our Vision',
    text: 'To become a leading African platform for business growth, collaboration, innovation, and empowerment — where entrepreneurs and small businesses unite to create lasting economic and social impact.',
  },
  {
    number: '02',
    title: 'Our Mission',
    text: 'To empower entrepreneurs, creatives, and small businesses through collaboration, strategic support, innovation, and shared opportunities that drive sustainable growth and meaningful change.',
  },
  {
    number: '03',
    title: 'Our Purpose',
    text: 'To build brands, strengthen businesses, empower communities, and contribute to economic development through creativity and innovation.',
  },
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!timelineRef.current) return;

    const line = timelineRef.current.querySelector('.timeline-line');
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding overflow-hidden"
      aria-label="About Bantu Creative Solutions"
    >
      {/* Decorative arcs */}
      <div className="gold-arc w-[500px] h-[500px] -top-[200px] -left-[200px] opacity-30" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-20 relative overflow-hidden"
        >
          {/* Inner gold arc */}
          <div className="gold-arc w-[400px] h-[400px] -top-[200px] -right-[150px] opacity-40" />

          {/* Watermark */}
          <div className="absolute top-8 right-8 opacity-[0.03]">
            <Image src="/images/watermark.png" alt="" width={200} height={200} className="w-40 md:w-56 object-contain" aria-hidden="true" />
          </div>

          <div className="relative z-10">
            {/* Section header */}
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black leading-tight">
                We Are Not Just Building Businesses
              </h2>
              <p className="mt-5 text-charcoal/60 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
                We are building people. We are building communities. We are building a better future.
              </p>
              <div className="mt-6 gold-divider w-16 mx-auto" />
            </div>

            {/* Pillars */}
            <div ref={timelineRef} className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 timeline-line origin-top" />

              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 mb-20 last:mb-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                    }`}
                  >
                    <span className="font-[var(--font-heading)] text-gold/25 text-5xl 2xl:text-6xl block mb-3">
                      {pillar.number}
                    </span>
                    <h3 className="font-[var(--font-heading)] text-xl md:text-2xl 2xl:text-3xl text-black mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal/55 text-sm 2xl:text-base leading-relaxed font-light">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full bg-gold border-2 border-ivory shadow-md" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 text-center"
            >
              <blockquote className="font-[var(--font-accent)] text-xl md:text-2xl 2xl:text-3xl text-gold italic max-w-3xl mx-auto leading-relaxed">
                &ldquo;Together We Build. Together We Grow. Together We Impact.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
