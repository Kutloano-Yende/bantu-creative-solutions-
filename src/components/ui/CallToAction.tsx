'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import GoldButton from '@/components/ui/GoldButton';

export default function CallToAction() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden"
      aria-label="Partnership call to action"
    >
      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elevated-dark p-10 md:p-16 lg:p-24 relative overflow-hidden"
        >
          {/* African pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04] rounded-3xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C89B3C' stroke-width='0.5'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z' fill='none' stroke='%23C89B3C' stroke-width='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />

          {/* Gold arcs on dark */}
          <div className="gold-arc-strong w-[400px] h-[400px] -top-[200px] -right-[150px]" />
          <div className="gold-arc w-[300px] h-[300px] -bottom-[150px] -left-[100px] opacity-40" />

          {/* Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
            <Image src="/images/watermark.png" alt="" width={400} height={400} className="w-[300px] md:w-[400px] object-contain" aria-hidden="true" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo-gold-black.png"
                alt=""
                width={52}
                height={52}
                className="w-11 h-11 md:w-13 md:h-13 object-contain mx-auto mb-8"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold mb-5"
            >
              Partnerships & Collaborations
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-white leading-tight mb-6"
            >
              We Are Not Just Building Businesses.{' '}
              <span className="gold-gradient-text">We Are Building a Better Future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 text-sm md:text-base 2xl:text-lg leading-relaxed font-light font-[var(--font-accent)] italic max-w-2xl mx-auto mb-10"
            >
              Together we can create opportunities, empower communities, and drive
              sustainable growth. Let us be part of your journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GoldButton href="#contact" variant="primary">
                Partner With Us
              </GoldButton>
              <GoldButton href="https://wa.me/27749761442" variant="outline">
                WhatsApp Us
              </GoldButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
