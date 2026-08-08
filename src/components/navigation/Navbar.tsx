'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Ubuntu', href: '#ubuntu' },
  { label: 'Industries', href: '#industries' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4"
      >
        <div className={`max-w-[1600px] 4xl:max-w-[2200px] mx-auto transition-all duration-500 ${
          scrolled
            ? 'bg-[#1A1A1A]/85 backdrop-blur-xl shadow-lg border border-gold/15 rounded-2xl'
            : 'bg-transparent'
        }`}>
          <div className="px-6 md:px-10 flex items-center justify-between h-16 md:h-18">
            <a href="#" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logos/BCS_Icon_FullColour_v1.png"
                alt="Bantu Creative Solutions"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                priority
              />
              <span className="font-[var(--font-heading)] text-base md:text-lg text-cream tracking-[0.12em] group-hover:text-gold transition-colors duration-300">
                BANTU
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/65 text-[11px] tracking-[0.18em] uppercase font-medium hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-3 px-5 py-2 bg-gold text-white text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-gold-dark transition-all duration-300 rounded-full shadow-sm"
              >
                Start a Project
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-cream" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-cream" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-cream" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-2xl flex items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-7">
              <Image src="/images/logos/BCS_Icon_FullColour_v1.png" alt="Bantu" width={64} height={64} className="mb-4 object-contain" />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="font-[var(--font-heading)] text-xl text-cream tracking-[0.15em] hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 px-7 py-3 bg-gold text-white tracking-[0.18em] uppercase text-sm font-medium hover:bg-gold-dark transition-all duration-300 rounded-full"
              >
                Start a Project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
