import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, X, RotateCcw, Copy, Check, Info, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';

interface DataCustomizerDrawerProps {
  portfolioData: PortfolioData;
  onUpdateData: (updated: PortfolioData) => void;
  onResetData: () => void;
}

export const DataCustomizerDrawer: React.FC<DataCustomizerDrawerProps> = ({
  portfolioData,
  onUpdateData,
  onResetData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<'profile' | 'cricket' | 'projects'>('profile');

  const [localName, setLocalName] = useState(portfolioData.personal.name);
  const [localInitials, setLocalInitials] = useState(portfolioData.personal.initials);
  const [localTagline, setLocalTagline] = useState(portfolioData.personal.tagline);
  const [localLocation, setLocalLocation] = useState(portfolioData.personal.location);
  const [localEmail, setLocalEmail] = useState(portfolioData.personal.email);
  const [localCricketRole, setLocalCricketRole] = useState(portfolioData.cricket.role);

  const handleApplyChanges = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateData({
      ...portfolioData,
      personal: {
        ...portfolioData.personal,
        name: localName,
        initials: localInitials,
        tagline: localTagline,
        location: localLocation,
        email: localEmail,
      },
      cricket: {
        ...portfolioData.cricket,
        role: localCricketRole,
      },
    });
    setIsOpen(false);
  };

  const handleTogglePlaceholderMode = () => {
    if (portfolioData.personal.name.includes('[YOUR NAME]')) {
      // Revert to customized name
      onUpdateData({
        ...portfolioData,
        personal: {
          ...portfolioData.personal,
          name: "AKULA PRANAV",
          initials: "AP",
          location: "Hyderabad, Telangana, India",
        },
      });
      setLocalName("AKULA PRANAV");
      setLocalInitials("AP");
    } else {
      // Switch to literal placeholder mode
      onUpdateData({
        ...portfolioData,
        personal: {
          ...portfolioData.personal,
          name: "[YOUR NAME]",
          initials: "YN",
          location: "[YOUR LOCATION] // FULL-STACK & SYSTEMS",
        },
      });
      setLocalName("[YOUR NAME]");
      setLocalInitials("YN");
    }
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(portfolioData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Action Badge */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          id="customizer-open-btn"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111111] text-[#F5F6F2] hover:bg-[#2E8B72] text-xs font-semibold shadow-xl border border-white/10 hover:scale-105 active:scale-95 transition-all"
          title="Customize portfolio content without touching code"
        >
          <Sliders className="w-3.5 h-3.5 text-[#A8DCCB] group-hover:rotate-90 transition-transform duration-300" />
          <span>Live Data Editor</span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md h-full bg-[#F5F6F2] shadow-2xl flex flex-col justify-between border-l border-[#111111]/10 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#111111]/10 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#2E8B72]" />
                  <h3 className="text-base font-bold text-[#111111] tracking-tight">
                    Live Data & Placeholders
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#555555]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-6 flex-1">
                {/* Notice on Rule 27 */}
                <div className="p-4 rounded-2xl bg-white border border-[#111111]/8 text-xs text-[#555555] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#111111]">
                    <Info className="w-4 h-4 text-[#2E8B72]" />
                    <span>Content Rule & Verification</span>
                  </div>
                  <p>
                    All values are driven by a single centralized source in <code className="bg-[#F5F6F2] px-1.5 py-0.5 rounded text-[#111111] font-mono">portfolioData.ts</code>. You can test your changes live below or toggle placeholder mode.
                  </p>
                  <button
                    type="button"
                    onClick={handleTogglePlaceholderMode}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-[#2E8B72]/10 border border-[#2E8B72]/30 text-[#2E8B72] font-semibold text-xs hover:bg-[#2E8B72] hover:text-white transition-colors"
                  >
                    Toggle Template Mode: {portfolioData.personal.name.includes('[YOUR NAME]') ? 'Switch to Pranav Akula' : 'Switch to [YOUR NAME]'}
                  </button>
                </div>

                {/* Edit Form */}
                <form onSubmit={handleApplyChanges} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={localName}
                      onChange={(e) => setLocalName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs text-[#111111] font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                        Initials / Monogram
                      </label>
                      <input
                        type="text"
                        value={localInitials}
                        onChange={(e) => setLocalInitials(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs text-[#111111] font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={localEmail}
                        onChange={(e) => setLocalEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs text-[#111111] font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                      Hero Tagline
                    </label>
                    <textarea
                      rows={2}
                      value={localTagline}
                      onChange={(e) => setLocalTagline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs text-[#111111] font-medium resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#111111] uppercase mb-1">
                      Cricket Playing Role
                    </label>
                    <input
                      type="text"
                      value={localCricketRole}
                      onChange={(e) => setLocalCricketRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs text-[#111111] font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#111111] hover:bg-[#2E8B72] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply Changes to Preview
                  </button>
                </form>

                {/* Quick Actions */}
                <div className="space-y-2 pt-4 border-t border-[#111111]/10">
                  <button
                    onClick={handleCopyConfig}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#111111]/10 text-xs font-semibold text-[#111111] hover:bg-black/5 flex items-center justify-center gap-2 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#2E8B72]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied Full JSON Config' : 'Copy Portfolio JSON Config'}</span>
                  </button>

                  <button
                    onClick={onResetData}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#555555] hover:text-[#111111] flex items-center justify-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Verified Defaults</span>
                  </button>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-white border-t border-[#111111]/10 text-center text-[10px] font-mono text-[#555555]">
                Vibe Coding Portfolio • Centralized Data Driven
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
