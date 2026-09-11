import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-36 md:pb-28 flex flex-col items-center justify-between overflow-hidden film-grain"
    >
      {/* Atmospheric Pastel Radial Gradients (as in reference image) */}
      <div
        className="absolute top-12 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none opacity-45 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #F1D2D2 0%, rgba(241,210,210,0) 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #DCCFE8 0%, rgba(220,207,232,0) 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/4 w-[360px] h-[360px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #A8DCCB 0%, rgba(168,220,203,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Thin Orbit/Curved Trajectory Background Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50,600 C300,550 500,800 900,450 C1200,180 1350,220 1500,100"
          stroke="#111111"
          strokeWidth="0.75"
          strokeDasharray="4 4"
        />
        <circle cx="900" cy="450" r="3" fill="#2E8B72" />
        <circle cx="1200" cy="180" r="2" fill="#555555" />
      </svg>

      {/* Left Social Links Rail (matching reference image) */}
      <div className="hidden lg:flex flex-col items-center gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-30">
        <div className="w-[1px] h-14 bg-[#111111]/15" />
        {personal.socials.instagram && (
          <a
            href={personal.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#555555] hover:text-[#111111] hover:scale-110 transition-all p-2 rounded-full hover:bg-black/5"
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}
        {personal.socials.github && (
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#555555] hover:text-[#111111] hover:scale-110 transition-all p-2 rounded-full hover:bg-black/5"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {personal.socials.linkedin && (
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#555555] hover:text-[#111111] hover:scale-110 transition-all p-2 rounded-full hover:bg-black/5"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email direct"
          className="text-[#555555] hover:text-[#2E8B72] hover:scale-110 transition-all p-2 rounded-full hover:bg-black/5"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-14 bg-[#111111]/15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Top Minimal Badge / Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 border border-[#111111]/8 text-[11px] font-mono tracking-widest text-[#555555] uppercase shadow-xs backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#2E8B72] animate-pulse" />
          <span>{personal.location}</span>
        </motion.div>

        {/* Hero Visual Composition (Portrait + Arch Backdrop + Looping 3D Trajectory + "Come on Let's Talk" Callout) */}
        <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-[340px] sm:h-[400px] md:h-[440px] mx-auto flex items-end justify-center mb-6">
          {/* Architectural Arch / Circle Backdrop (Reference style: muted sage-green arch) */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 w-[260px] sm:w-[320px] md:w-[350px] h-[300px] sm:h-[360px] md:h-[390px] rounded-t-full bg-[#8FA59D]/75 border border-[#8FA59D] shadow-[0_20px_50px_rgba(46,139,114,0.08)] backdrop-blur-xs"
          />

          {/* Subtly animated Orbit SVG Line Wrapping Around The Subject (Seam / Trajectory motif) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
            viewBox="0 0 480 440"
            fill="none"
          >
            {/* 3D Spiraling trajectory curve around torso */}
            <motion.path
              d="M 60,340 C 40,240 120,180 240,200 C 380,220 440,280 400,340 C 360,400 160,380 130,300 C 100,220 180,140 310,140 C 360,140 380,110 370,80"
              stroke="#2E8B72"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
            />
            {/* Small nodes along the curve */}
            <circle cx="130" cy="300" r="3.5" fill="#2E8B72" />
            <circle cx="240" cy="200" r="3.5" fill="#A8DCCB" />
          </svg>

          {/* The "Come On Let's Talk" Circular Node (Exact motif from uploaded reference image) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5, type: 'spring' }}
            className="absolute top-2 right-4 sm:right-8 z-30 flex flex-col items-center"
          >
            <a
              href="#contact"
              className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 border border-[#2E8B72]/40 shadow-lg flex items-center justify-center hover:scale-105 transition-transform backdrop-blur-sm"
              aria-label="Come on, let's talk"
            >
              {/* Rotating Circular Text SVG */}
              <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[7.5px] font-bold tracking-[0.25em] uppercase fill-[#111111]">
                    <textPath href="#circlePath" startOffset="0%">
                      COME ON • LET'S TALK •
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Center Dot / Icon */}
              <div className="w-9 h-9 rounded-full bg-[#2E8B72] text-white flex items-center justify-center group-hover:bg-[#111513] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          {/* Portrait Image Container (Desaturated / Monochrome portrait silhouette) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 w-[240px] sm:w-[290px] md:w-[320px] h-[310px] sm:h-[370px] md:h-[400px] flex items-end justify-center overflow-hidden"
          >
            <img
              src={personal.portraitUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"}
              alt={`Portrait of ${personal.name} — Software Engineer`}
              className="w-full h-full object-cover object-top contrast-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-t-full"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Shadow Base */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F5F6F2] to-transparent pointer-events-none" />
          </motion.div>

          {/* Photo Note / Placeholder indicator (only shown if no custom photo is configured) */}
          {!personal.portraitUrl && (
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <span className="px-3 py-1 rounded-full bg-white/90 border border-[#111111]/10 text-[9px] font-mono tracking-widest text-[#555555] uppercase shadow-xs">
                [PERSONAL PORTRAIT // EDITABLE]
              </span>
            </div>
          )}
        </div>

        {/* Hero Dominant Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#111111] uppercase leading-[0.95]">
            {personal.name}
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#2E8B72] uppercase">
            SOFTWARE ENGINEER <span className="text-[#111111]/30 mx-1">//</span> AI & AGENTIC SYSTEMS <span className="text-[#111111]/30 mx-1">//</span> RESEARCHER
          </p>

          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#111111]/10 text-[10px] font-mono tracking-widest text-[#111111] uppercase font-semibold">
              BUILD · EXPLORE · LEAD
            </span>
          </div>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#555555] font-normal leading-relaxed pt-2">
            "{personal.tagline}"
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            id="hero-explore-work"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#F5F6F2] text-sm font-semibold tracking-wide hover:bg-[#2E8B72] hover:shadow-lg active:scale-98 transition-all duration-200"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            id="hero-about-me"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-[#111111]/15 text-[#111111] text-sm font-semibold tracking-wide hover:border-[#111111] hover:bg-black/5 active:scale-98 transition-all duration-200"
          >
            <span>About Me</span>
          </a>
        </motion.div>
      </div>

      {/* Editorial Horizontal Ticker Ribbon (Partner/Capability strip matching reference image bottom) */}
      <div className="w-full mt-16 pt-8 border-t border-[#111111]/10 bg-white/30 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 text-xs uppercase font-mono tracking-widest text-[#555555]/80">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
            Agentic AI & Multi-Agent Systems
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
            Spring Boot & Node.js
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
            Machine Learning (Scikit-Learn)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
            Post-Quantum Cryptography Research
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
            Full-Stack Architecture
          </span>
        </div>
      </div>
    </section>
  );
};
