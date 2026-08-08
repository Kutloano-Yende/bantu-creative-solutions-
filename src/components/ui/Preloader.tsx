'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0D0D0D] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Image
              src="/images/logos/BCS_Icon_FullColour_v1.png"
              alt="Bantu Creative Solutions"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-4"
              priority
            />
            <h1 className="font-[var(--font-heading)] text-2xl md:text-3xl text-cream tracking-[0.2em] mb-1">
              BANTU
            </h1>
            <p className="text-gold text-[10px] tracking-[0.4em] uppercase font-semibold mb-12">
              Creative Solutions
            </p>

            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gold"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-cream/30 text-xs tracking-[0.2em] mt-4 font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
