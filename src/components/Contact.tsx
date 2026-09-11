import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, ArrowUpRight, MapPin } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personal: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulate real interaction response
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 750);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F5F6F2] relative overflow-hidden film-grain">
      {/* Subtle Atmospheric Pastel Radial Gradients (matching hero aesthetic) */}
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #DCCFE8 0%, rgba(220,207,232,0) 70%)',
        }}
      />
      <div
        className="absolute top-10 left-0 w-[380px] h-[380px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #A8DCCB 0%, rgba(168,220,203,0) 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            10 // DIRECT DIALOGUE & CONTACT
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.05]">
                Let's Build <br />
                <span className="text-[#2E8B72]">Something.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555555] mt-4 leading-relaxed">
                Have an engineering opportunity, technical collaboration, cricket match fixture, or simply want to talk systems design? My inbox is always open.
              </p>
            </div>

            {/* Direct Details Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#111111]/8 space-y-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-bold text-[#111111] hover:text-[#2E8B72] transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>

                {personal.phone && (
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-base font-bold text-[#111111] hover:text-[#2E8B72] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#111111]/6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] block">
                  Location & Availability
                </span>
                <span className="text-sm font-semibold text-[#111111] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2E8B72]" />
                  {personal.location}
                </span>
              </div>

              {/* Verified Social Channels */}
              <div className="pt-4 border-t border-[#111111]/6 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555] block">
                  Social Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  {personal.socials.github && (
                    <a
                      href={personal.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F6F2] hover:bg-[#111111] hover:text-white text-xs font-semibold text-[#111111] transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {personal.socials.linkedin && (
                    <a
                      href={personal.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F6F2] hover:bg-[#111111] hover:text-white text-xs font-semibold text-[#111111] transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {personal.socials.instagram && (
                    <a
                      href={personal.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F6F2] hover:bg-[#111111] hover:text-white text-xs font-semibold text-[#111111] transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Tactile Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#111111]/8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-bold text-[#111111] uppercase tracking-wider mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F6F2] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#555555]/50 focus:outline-none focus:border-[#2E8B72] focus:ring-1 focus:ring-[#2E8B72] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-bold text-[#111111] uppercase tracking-wider mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F6F2] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#555555]/50 focus:outline-none focus:border-[#2E8B72] focus:ring-1 focus:ring-[#2E8B72] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-bold text-[#111111] uppercase tracking-wider mb-2"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    placeholder="Engineering Role / Project Discussion / General Connect"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F6F2] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#555555]/50 focus:outline-none focus:border-[#2E8B72] focus:ring-1 focus:ring-[#2E8B72] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-bold text-[#111111] uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Share your goals, project details, or what prompted you to connect..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F6F2] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#555555]/50 focus:outline-none focus:border-[#2E8B72] focus:ring-1 focus:ring-[#2E8B72] transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#2E8B72]/15 border border-[#2E8B72]/40 text-[#2E8B72] text-xs font-semibold flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message received. I will review and reply to your email shortly!</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  id="contact-submit-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#F5F6F2] text-xs font-bold uppercase tracking-wider hover:bg-[#2E8B72] active:scale-98 transition-all duration-200 shadow-sm disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
