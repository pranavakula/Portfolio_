import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111513] text-[#F5F6F2] py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Left: Initials Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2E8B72] text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm">
              {personal.initials}
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block">
                {personal.name}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                {personal.roleSubtitle}
              </span>
            </div>
          </div>

          {/* Center: Duality Tagline */}
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#A8DCCB] uppercase text-center">
            SOFTWARE ENGINEER <span className="text-white/30 mx-1">×</span> CRICKETER
          </div>

          {/* Right: Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#2E8B72] text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#2E8B72] text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personal.socials.instagram && (
              <a
                href={personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#2E8B72] text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#111513] transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed & Built with Vibe Coding</span>
            <span className="w-1 h-1 rounded-full bg-[#2E8B72]" />
            <span className="text-white font-semibold">Software Engineer × Cricketer Edition</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
