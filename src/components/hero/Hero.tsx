'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GoldParticles from '@/components/ui/GoldParticles';
import GoldButton from '@/components/ui/GoldButton';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !logoRef.current) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          rotateY: x * 6,
          rotateX: -y * 6,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    container.addEventListener('mousemove', handleMouse);
    return () => container.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 pt-24 pb-12"
      aria-label="Hero"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#EDE8DC]" />

      {/* Large decorative gold arcs */}
      <div className="gold-arc w-[600px] h-[600px] md:w-[900px] md:h-[900px] top-[-200px] right-[-200px] opacity-40" />
      <div className="gold-arc w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-30" />

      <GoldParticles count={35} />

      {/* Main elevated card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-[1600px] 4xl:max-w-[2200px] card-elevated p-8 md:p-14 lg:p-20 overflow-hidden"
      >
        {/* Inner decorative arcs */}
        <div className="gold-arc-strong w-[500px] h-[500px] -top-[250px] -right-[150px]" />
        <div className="gold-arc w-[300px] h-[300px] -bottom-[100px] -left-[100px] opacity-50" />

        {/* Warm glow */}
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px] 2xl:w-[700px] 2xl:h-[700px] rounded-full bg-gold/[0.04] blur-[120px]" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold border border-gold/30 px-5 py-2.5 rounded-full">
                Ubuntu — I Am Because We Are
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.1] tracking-[0.02em]"
            >
              <span className="block text-black">Building</span>
              <span className="block gold-gradient-text">Brands.</span>
              <span className="block text-black">Empowering</span>
              <span className="block gold-gradient-text">Businesses.</span>
              <span className="block text-black">Creating</span>
              <span className="block gold-gradient-text">Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 text-charcoal/60 text-sm md:text-base 2xl:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              A South African creative agency rooted in Ubuntu. We empower
              entrepreneurs, startups, and communities through strategic branding
              and digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GoldButton href="#contact" variant="primary">
                Start Your Project
              </GoldButton>
              <GoldButton href="#portfolio" variant="outline">
                Explore Our Work
              </GoldButton>
            </motion.div>
          </div>

          {/* Logo with gold arc decoration */}
          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 flex items-center justify-center perspective-[1000px]"
          >
            <div className="relative w-[260px] md:w-[340px] lg:w-[380px] xl:w-[440px] 2xl:w-[500px] aspect-square flex items-center justify-center">
              {/* Gold arc behind logo */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-gold/20" />
              <div className="absolute inset-[-8px] rounded-full border border-gold/10" />

              {/* Inner glow circle */}
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.03]" />

              {/* Semi-circle gold accent — like the reference */}
              <div className="absolute top-1/2 right-0 w-[55%] h-[110%] -translate-y-1/2 translate-x-[15%] rounded-full border-2 border-gold/15 opacity-60" />

              {/* Main logo */}
              <Image
                src="/images/logo-transparent.png"
                alt="Bantu Creative Solutions - Unity Symbol"
                width={400}
                height={400}
                className="w-[60%] h-[60%] object-contain relative z-10 drop-shadow-[0_4px_30px_rgba(200,155,60,0.2)]"
                priority
              />

              {/* Floating accent dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: i * 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-gold/50"
                  style={{
                    top: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.cos((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-charcoal/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
