import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Download, Send } from 'lucide-react';
import { PersonalInfo } from '../types';

interface NavbarProps {
  personal: PersonalInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ personal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Cricket', href: '#cricket' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#F5F6F2]/85 backdrop-blur-md border-b border-[#111111]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B72] rounded-full"
            aria-label="Back to top"
          >
            <div className="w-10 h-10 rounded-full bg-[#111513] text-[#F5F6F2] flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-[#2E8B72] transition-colors duration-200 shadow-sm">
              {personal.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#111111] group-hover:text-[#2E8B72] transition-colors">
                {personal.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#555555] font-medium">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks
              .filter((link) => link.href !== '#contact')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-[#555555] hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#2E8B72] hover:after:w-full after:transition-all after:duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B72] rounded"
                >
                  {link.label}
                </a>
              ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              id="nav-connect-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F5F6F2] text-xs font-semibold tracking-wide hover:bg-[#2E8B72] active:scale-98 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E8B72] shrink-0"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B72]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-Over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#F5F6F2] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#2E8B72] font-bold">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="text-2xl font-bold text-[#111111] hover:text-[#2E8B72] transition-colors py-1 flex items-center justify-between border-b border-[#111111]/5"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#555555]">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#111111]/10">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111111] text-white font-medium text-sm hover:bg-[#2E8B72] transition-colors"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-[#555555]">
                {personal.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
