'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import GoldButton from '@/components/ui/GoldButton';
import Select from '@/components/ui/Select';

const SERVICE_OPTIONS = [
  { value: 'Brand Identity Design', label: 'Brand Identity Design' },
  { value: 'Social Media Design', label: 'Social Media Design' },
  { value: 'Corporate Documents', label: 'Corporate Documents' },
  { value: 'Website Design', label: 'Website Design' },
];

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e: React.FocusEvent) => {
    const { name } = e.target as HTMLInputElement;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name);
  };

  const validateField = (name: string) => {
    const newErrors: FieldErrors = {};
    if (name === 'name' && !formData.name.trim()) newErrors.name = 'Full name is required';
    if (name === 'email') {
      if (!formData.email.trim()) newErrors.email = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    }
    if (name === 'message' && !formData.message.trim()) newErrors.message = 'Please tell us about your project';
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const valid = validateField('name') && validateField('email') && validateField('message');
    if (!valid) return;
    const msg = `Hi Bantu Creative Solutions! My name is ${formData.name}. I'm interested in ${formData.service || 'your services'}. ${formData.message}`;
    window.open(`https://wa.me/27749761442?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputBase = "w-full bg-[#D8CDB2] border text-black py-3.5 px-4 text-sm focus:outline-none transition-colors duration-300 placeholder:text-charcoal/40 rounded-xl";
  const inputOk = "border-sand/60 focus:border-gold";
  const inputErr = "border-red-400 focus:border-red-500";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-label="Contact Us"
    >
      <div className="gold-arc w-[600px] h-[600px] -top-[250px] -right-[200px] opacity-20" />

      <div className="relative z-10 max-w-[1400px] 4xl:max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-light p-8 md:p-14 lg:p-16 relative overflow-hidden"
        >
          <div className="gold-arc w-[350px] h-[350px] -bottom-[180px] -left-[120px] opacity-25" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-14 md:mb-18">
              <span className="inline-block text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Get In Touch
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black leading-tight max-w-4xl text-center">
                Let&apos;s Build Something{' '}
                <span className="gold-gradient-text">Meaningful</span> Together
              </h2>
              <div className="mt-6 gold-divider w-16" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
              {/* Form — 3 cols */}
              <motion.form
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                noValidate
                className="lg:col-span-3 rounded-2xl bg-ivory/80 border border-gold/[0.06] overflow-hidden"
              >
                <div className="px-7 md:px-9 pt-7 md:pt-9 pb-5">
                  <h3 className="font-[var(--font-heading)] text-lg 2xl:text-xl text-black mb-1">
                    Start a Conversation
                  </h3>
                  <p className="text-charcoal/35 text-sm font-light">
                    Fill in your details and we&apos;ll respond within 24 hours.
                  </p>
                </div>

                <div className="mx-7 md:mx-9 h-px bg-sand/50" />

                <div className="px-7 md:px-9 py-7 space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-charcoal/70 text-xs tracking-[0.15em] uppercase font-semibold">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputBase} ${touched.name && errors.name ? inputErr : inputOk}`} placeholder="Your name" />
                    {touched.name && errors.name && <p className="text-red-500 text-xs" role="alert">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-charcoal/70 text-xs tracking-[0.15em] uppercase font-semibold">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputBase} ${touched.email && errors.email ? inputErr : inputOk}`} placeholder="your@email.com" />
                    {touched.email && errors.email && <p className="text-red-500 text-xs" role="alert">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-charcoal/70 text-xs tracking-[0.15em] uppercase font-semibold">
                      Service Interested In
                    </label>
                    <Select
                      id="service"
                      name="service"
                      options={SERVICE_OPTIONS}
                      value={formData.service}
                      onChange={(v) => setFormData((prev) => ({ ...prev, service: v }))}
                      placeholder="Select a service"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-charcoal/70 text-xs tracking-[0.15em] uppercase font-semibold">
                      Your Message <span className="text-gold">*</span>
                    </label>
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputBase} ${touched.message && errors.message ? inputErr : inputOk} resize-none`} placeholder="Tell us about your project..." />
                    {touched.message && errors.message && <p className="text-red-500 text-xs" role="alert">{errors.message}</p>}
                  </div>
                </div>

                <div className="mx-7 md:mx-9 h-px bg-sand/50" />

                <div className="px-7 md:px-9 py-5 flex items-center justify-between gap-4 flex-wrap">
                  <GoldButton variant="primary">Send Message</GoldButton>
                  <p className="text-charcoal/25 text-xs">Sent via WhatsApp for fastest response.</p>
                </div>
              </motion.form>

              {/* Sidebar — 2 cols */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2 space-y-5"
              >
                {/* Direct Contact */}
                <div className="rounded-2xl bg-ivory/80 border border-gold/[0.06] overflow-hidden">
                  <div className="px-7 pt-7 pb-4">
                    <h3 className="font-[var(--font-heading)] text-base 2xl:text-lg text-black">Direct Contact</h3>
                  </div>
                  <div className="mx-7 h-px bg-sand/50" />
                  <div className="p-7 space-y-4">
                    <a href="https://wa.me/27749761442" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 text-charcoal/75 hover:text-bronze transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium block">WhatsApp</span>
                        <span className="text-sm text-charcoal/80">074 976 1442</span>
                      </div>
                    </a>
                    <a href="mailto:bcs@bantucreativesolutions.co.za" className="flex items-center gap-4 text-charcoal/75 hover:text-bronze transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-4 9 4" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium block">Email</span>
                        <span className="text-sm text-charcoal/80 break-all">bcs@bantucreativesolutions.co.za</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="rounded-2xl bg-ivory/80 border border-gold/[0.06] overflow-hidden">
                  <div className="px-7 pt-7 pb-4">
                    <h3 className="font-[var(--font-heading)] text-base 2xl:text-lg text-black">Social Media</h3>
                  </div>
                  <div className="mx-7 h-px bg-sand/50" />
                  <div className="p-7 space-y-4">
                    <a href="https://www.facebook.com/profile.php?id=61590296622368" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 text-charcoal/75 hover:text-bronze transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium block">Facebook</span>
                        <span className="text-sm text-charcoal/80">Bantu Creative Solutions</span>
                      </div>
                    </a>
                    <a href="https://www.tiktok.com/@bantucreativesolutions" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 text-charcoal/75 hover:text-bronze transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium block">TikTok</span>
                        <span className="text-sm text-charcoal/80">@bantucreativesolutions</span>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/bantu.creativesolutions" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 text-charcoal/75 hover:text-bronze transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium block">Instagram</span>
                        <span className="text-sm text-charcoal/80">@bantu.creativesolutions</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="rounded-2xl border-2 border-gold/15 bg-gold/[0.03] p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </div>
                    <h3 className="font-[var(--font-heading)] text-base 2xl:text-lg text-gold-dark">
                      Based in South Africa
                    </h3>
                  </div>
                  <p className="text-charcoal/50 text-sm font-light leading-relaxed">
                    We serve entrepreneurs, startups, and businesses across South Africa and the African continent. Response time: within 24 hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
