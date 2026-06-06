'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience.' },
  { step: '02', title: 'Strategy', description: 'Developing the best creative solution for your needs.' },
  { step: '03', title: 'Design', description: 'Creating professional visual and digital assets.' },
  { step: '04', title: 'Review', description: 'Gathering feedback and refining deliverables.' },
  { step: '05', title: 'Delivery', description: 'Providing final files and implementation support.' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-ivory overflow-hidden"
      aria-label="Our Process"
    >
      <div className="gold-divider w-full absolute top-0 left-0" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <SectionHeading
          label="How We Work"
          title="Our Process"
          subtitle="A structured approach to delivering exceptional results."
        />

        <div className="relative flex flex-col md:flex-row gap-6 md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gold/15" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex-1 relative text-center px-4 group"
            >
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold/20 bg-ivory flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 shadow-sm">
                <span className="font-[var(--font-heading)] text-gold text-sm font-semibold">
                  {step.step}
                </span>
              </div>
              <h3 className="font-[var(--font-heading)] text-lg 2xl:text-xl text-black mb-2 group-hover:text-gold-dark transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-charcoal/50 text-sm 2xl:text-base font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
