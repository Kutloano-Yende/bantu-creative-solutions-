'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  { name: 'Ubuntu', principle: 'We believe in collective success and human connection.' },
  { name: 'Unity', principle: 'Together we can achieve more than we ever could alone.' },
  { name: 'Integrity', principle: 'We operate with honesty, accountability, and professionalism.' },
  { name: 'Excellence', principle: 'We strive for quality and continuous improvement.' },
  { name: 'Empowerment', principle: 'We help people unlock opportunities and build confidence.' },
  { name: 'Impact', principle: 'We focus on creating meaningful and lasting change.' },
];

export default function Ubuntu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!headingRef.current) return;

    const chars = headingRef.current.querySelectorAll('.ubuntu-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ubuntu"
      className="relative section-padding overflow-hidden"
      aria-label="Ubuntu Philosophy"
    >
      <div className="gold-arc w-[700px] h-[700px] top-[-300px] left-[-200px] opacity-25" />
      <div className="gold-arc w-[400px] h-[400px] bottom-[-150px] right-[-100px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated p-8 md:p-14 lg:p-20 relative overflow-hidden text-center"
        >
          {/* Inner warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]" />
          <div className="gold-arc-strong w-[500px] h-[500px] top-[-250px] right-[-200px]" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold mb-8"
            >
              Our Philosophy
            </motion.span>

            <div ref={headingRef} className="perspective-[1000px] mb-10">
              <h2 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-none tracking-[0.05em]">
                {'I AM BECAUSE'.split('').map((char, i) => (
                  <span
                    key={`l1-${i}`}
                    className="ubuntu-char inline-block gold-gradient-text"
                    style={{ transformOrigin: 'bottom' }}
                  >
                    {char === ' ' ? ' ' : char}
                  </span>
                ))}
                <br />
                {'WE ARE'.split('').map((char, i) => (
                  <span
                    key={`l2-${i}`}
                    className="ubuntu-char inline-block text-cream"
                    style={{ transformOrigin: 'bottom' }}
                  >
                    {char === ' ' ? ' ' : char}
                  </span>
                ))}
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-cream/60 text-base md:text-lg 2xl:text-xl max-w-3xl mx-auto leading-relaxed font-light font-[var(--font-accent)] italic mb-16"
            >
              Ubuntu is more than a word — it is the heartbeat of our work. It means that
              my success is your success. That your growth lifts us all.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group p-7 2xl:p-8 rounded-2xl border border-gold/[0.08] bg-white/[0.03] hover:border-gold/25 hover:shadow-md transition-all duration-500"
                >
                  <div className="w-11 h-11 rounded-full border-2 border-gold/25 flex items-center justify-center mb-5 mx-auto group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                    <span className="text-gold font-[var(--font-heading)] text-xs font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg 2xl:text-xl text-cream mb-2 group-hover:text-gold-light transition-colors duration-500">
                    {value.name}
                  </h3>
                  <p className="text-cream/50 text-sm 2xl:text-base font-light leading-relaxed">
                    {value.principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
