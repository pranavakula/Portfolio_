import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface PhilosophyProps {
  philosophy: {
    quote: string;
    author: string;
    subtext: string;
  };
}

export const Philosophy: React.FC<PhilosophyProps> = ({ philosophy }) => {
  return (
    <section className="py-28 md:py-40 bg-[#111513] text-[#F5F6F2] relative overflow-hidden film-grain">
      {/* Dynamic Background Trajectory Arc */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1440 600"
        fill="none"
      >
        <path
          d="M-100,500 C400,200 1000,600 1600,100"
          stroke="#2E8B72"
          strokeWidth="2"
          strokeDasharray="8 8"
          className="animate-trajectory"
        />
        <circle cx="650" cy="380" r="5" fill="#A8DCCB" />
      </svg>

      {/* Atmospheric Radial Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #2E8B72 0%, rgba(168,220,203,0) 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Minimal Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#A8DCCB] uppercase mb-12">
          <Quote className="w-3.5 h-3.5 text-[#2E8B72]" />
          <span>09 // CORE PHILOSOPHY</span>
        </div>

        {/* Cinematic Dominant Typography */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.0] max-w-6xl mx-auto"
          >
            "Discipline on the field. <br className="hidden sm:inline" />
            <span className="text-[#A8DCCB] font-serif italic lowercase">
              curiosity
            </span>{' '}
            behind the screen."
          </motion.h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-light leading-relaxed mt-10">
            {philosophy.subtext}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-[#2E8B72]" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#A8DCCB]">
              {philosophy.author} // ATHLETE × ENGINEER
            </span>
            <div className="h-[1px] w-8 bg-[#2E8B72]" />
          </div>
        </div>
      </div>
    </section>
  );
};
