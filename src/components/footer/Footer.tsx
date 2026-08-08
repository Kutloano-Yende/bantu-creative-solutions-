'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative px-4 md:px-8 pb-6">
      <div className="max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <div className="card-elevated-dark px-8 md:px-14 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/BCS_Icon_FullColour_v1.png"
                alt="Bantu Creative Solutions"
                width={44}
                height={44}
                className="w-9 h-9 md:w-11 md:h-11 object-contain"
              />
              <div className="text-left">
                <span className="font-[var(--font-heading)] text-lg 2xl:text-xl text-white tracking-[0.12em]">
                  BANTU
                </span>
                <p className="text-white/30 text-[10px] tracking-[0.1em]">
                  Creative Solutions
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="font-[var(--font-accent)] text-base 2xl:text-lg text-gold italic">
                &ldquo;I Am Because We Are&rdquo;
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/30 text-xs">
                &copy; {new Date().getFullYear()} Bantu Creative Solutions.
              </p>
              <p className="text-white/15 text-[10px] mt-1">
                Building Brands. Empowering Businesses. Creating Impact.
              </p>
            </div>
          </div>

          {/* Asset attribution (CC BY 3.0 requires visible credit) */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-white/20 text-[10px] tracking-wide">
              3D lion model by{' '}
              <a
                href="https://poly.pizza/m/3XAJojWxSWz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gold/60 transition-colors"
              >
                Poly by Google
              </a>{' '}
              · licensed under{' '}
              <a
                href="https://creativecommons.org/licenses/by/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gold/60 transition-colors"
              >
                CC BY 3.0
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
