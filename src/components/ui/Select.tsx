'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* coss/ui Select pattern: a styled trigger + popup listbox with hover /
   selected states, a checkmark on the active value, keyboard navigation and
   click-outside dismissal. Drop-in replacement for a native <select>. */

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  id,
  name,
  className = '',
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  // When opening, highlight the current value.
  useEffect(() => {
    if (open) setActiveIndex(options.findIndex((o) => o.value === value));
  }, [open, value, options]);

  const choose = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) setOpen(true);
        else setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (open) setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open && activeIndex >= 0) choose(options[activeIndex].value);
        else setOpen((o) => !o);
        break;
      case 'Escape':
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id={id}
        data-slot="select-trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={id ? `${id}-listbox` : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`w-full bg-[#F5F0E6] border py-3.5 px-4 text-sm rounded-xl flex items-center justify-between gap-2 cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:border-gold ${
          open ? 'border-gold' : 'border-sand/60 hover:border-sand'
        } ${className}`}
      >
        <span className={selected ? 'text-black' : 'text-charcoal/25'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-charcoal/40 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Keep a real form value for the field name. */}
      {name && <input type="hidden" name={name} value={value} />}

      <AnimatePresence>
        {open && (
          <motion.ul
            id={id ? `${id}-listbox` : undefined}
            role="listbox"
            data-slot="select-popup"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="absolute z-30 mt-2 w-full rounded-xl border border-gold/15 bg-ivory shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden py-1.5"
          >
            {options.map((o, i) => {
              const isSel = o.value === value;
              return (
                <li
                  key={o.value}
                  role="option"
                  aria-selected={isSel}
                  data-slot="select-item"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => choose(o.value)}
                  className={`mx-1.5 px-3.5 py-2.5 rounded-lg text-sm cursor-pointer flex items-center justify-between gap-2 transition-colors duration-150 ${
                    i === activeIndex ? 'bg-gold/10' : ''
                  } ${isSel ? 'text-gold-dark font-medium' : 'text-charcoal/70'}`}
                >
                  <span>{o.label}</span>
                  {isSel && (
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
