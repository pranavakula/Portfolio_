import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X,
  Camera,
  Layers,
} from 'lucide-react';
import { CricketProfile } from '../types';

interface CricketProps {
  cricket: CricketProfile;
}

export const Cricket: React.FC<CricketProps> = ({ cricket }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect all gallery images or fallback to actionPhotoUrl
  const galleryItems =
    cricket.gallery && cricket.gallery.length > 0
      ? cricket.gallery
      : [
          {
            url:
              cricket.actionPhotoUrl ||
              'https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?auto=format&fit=crop&w=1200&q=80',
            title: 'Cricket Match Action',
            caption: 'Competitive play and match execution.',
          },
        ];

  const currentPhoto = galleryItems[activePhotoIndex] || galleryItems[0];

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
        );
      }
    },
    [lightboxIndex, galleryItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="cricket" className="py-24 md:py-32 bg-[#111513] text-[#F5F6F2] relative overflow-hidden film-grain">
      {/* Subtle Atmospheric Dark Ambient Glows */}
      <div
        className="absolute -top-24 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2E8B72 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #A8DCCB 0%, transparent 70%)' }}
      />

      {/* Decorative Cricket Ball Seam / Trajectory Path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M-100,200 C300,500 700,100 1300,600"
          stroke="#2E8B72"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="animate-trajectory"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#A8DCCB] uppercase">
            08 // BEYOND THE SCREEN — CRICKET & LEADERSHIP
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
              {cricket.headline}
            </h2>
            <p className="text-lg md:text-xl text-[#A8DCCB] font-light mt-3">
              "{cricket.subheading}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-gray-300">
              DISCIPLINE × COMPETITION × LEADERSHIP
            </span>
            <span className="px-3 py-2 rounded-full bg-[#2E8B72]/20 border border-[#2E8B72]/40 text-xs font-mono text-[#A8DCCB] flex items-center gap-1.5 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              {galleryItems.length} MATCH PHOTOS
            </span>
          </div>
        </div>

        {/* Cricket Profile Snapshot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left: Cricket Action Visual Showcase with Multi-Photo Switcher */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-black/50 border border-white/10 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-8 group shadow-2xl">
            {/* Background Image with Cross-Fade Transition */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto.url}
                  src={currentPhoto.url}
                  alt={currentPhoto.title || 'Cricket match action'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.55, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-center filter contrast-110"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111513] via-[#111513]/70 to-[#111513]/30" />
            </div>

            {/* Top Bar with Badge, Photo Counter, and Controls */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#2E8B72] text-white font-mono text-xs uppercase tracking-wider shadow-sm font-semibold">
                Official Playing Profile
              </span>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-mono text-[#A8DCCB]">
                  0{activePhotoIndex + 1} / 0{galleryItems.length}
                </span>

                {/* Lightbox Trigger */}
                <button
                  onClick={() => setLightboxIndex(activePhotoIndex)}
                  className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#2E8B72] hover:border-[#2E8B72] flex items-center justify-center transition-colors cursor-pointer"
                  title="Open photo fullscreen"
                  aria-label="Open photo fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Middle: Interactive 4-Thumbnail Switcher Strip */}
            <div className="relative z-10 py-6">
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {galleryItems.map((item, idx) => {
                  const isSelected = idx === activePhotoIndex;
                  return (
                    <button
                      key={item.url + idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative w-16 h-14 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        isSelected
                          ? 'border-[#2E8B72] ring-2 ring-[#2E8B72]/50 scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white bg-black/70 px-1 rounded">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] font-mono text-gray-300 mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72]" />
                {currentPhoto.title} — {currentPhoto.caption}
              </p>
            </div>

            {/* Bottom Profile Details */}
            <div className="relative z-10 space-y-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs uppercase font-mono text-[#A8DCCB] tracking-widest">
                  Primary Playing Role
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {cricket.role}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-gray-400 block uppercase">Batting Technique</span>
                  <span className="text-white font-semibold">{cricket.battingStyle}</span>
                </div>
                <div>
                  <span className="text-gray-400 block uppercase">Tactical Role</span>
                  <span className="text-white font-semibold">{cricket.bowlingStyle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mindset Synergy Cards (Cricket to Tech) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {cricket.keyMindsets.map((mindset, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2E8B72] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#2E8B72]/30 text-[#A8DCCB] flex items-center justify-center text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {mindset.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                  {mindset.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-[11px] font-mono">
                  <span className="px-2.5 py-1 rounded bg-black/40 text-gray-300 border border-white/5">
                    Field: {mindset.cricketAspect}
                  </span>
                  <span className="text-[#A8DCCB]">→</span>
                  <span className="px-2.5 py-1 rounded bg-[#2E8B72]/20 text-[#A8DCCB] border border-[#2E8B72]/30">
                    Engineering: {mindset.techSynergy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Image Match Action & Championship Gallery Grid */}
        <div className="mb-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#A8DCCB] uppercase">
                08.1 // MATCH & CHAMPIONSHIP ARCHIVE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Tournament Action Gallery
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-400">
              CLICK ANY PHOTO TO ENLARGE FULLSCREEN
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.url}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setActivePhotoIndex(idx);
                  setLightboxIndex(idx);
                }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#2E8B72] transition-all cursor-pointer flex flex-col justify-between shadow-lg"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <img
                    src={item.url}
                    alt={item.title || `Cricket photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Photo Index Tag */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-[#A8DCCB] font-bold">
                    PHOTO 0{idx + 1}
                  </span>

                  {/* Quick Expand Icon */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/70 border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption & Title */}
                <div className="p-4 bg-white/[0.03]">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#A8DCCB] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verified Cricket Achievement Timeline */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#A8DCCB] uppercase">
                Campaign Log
              </span>
              <h3 className="text-2xl font-bold text-white">Competitive Milestones & Representation</h3>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              VERIFIED CAMPAIGNS
            </div>
          </div>

          {/* Clean Horizontal Timeline on Desktop / Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cricket.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#2E8B72]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#A8DCCB] bg-[#2E8B72]/20 px-2.5 py-1 rounded">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-[#A8DCCB] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-gray-400">
                  <Award className="w-3.5 h-3.5 text-[#2E8B72]" />
                  <span>Amrita Cricket Division Record</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for High-Res Inspection */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Modal Controls */}
            <div
              className="flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#A8DCCB] bg-[#2E8B72]/20 px-3 py-1 rounded-full border border-[#2E8B72]/40">
                  PHOTO 0{lightboxIndex + 1} OF 0{galleryItems.length}
                </span>
                <span className="text-sm font-semibold text-white hidden sm:inline">
                  {galleryItems[lightboxIndex].title}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Main Image with Prev / Next Arrows */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
                  )
                }
                className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-black/60 hover:bg-[#2E8B72] border border-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={galleryItems[lightboxIndex].url}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={galleryItems[lightboxIndex].url}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % galleryItems.length)
                }
                className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-black/60 hover:bg-[#2E8B72] border border-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Strip */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 z-10 max-w-4xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
                {galleryItems[lightboxIndex].caption}
              </p>

              {/* Thumbnails */}
              <div className="flex items-center gap-2">
                {galleryItems.map((item, idx) => (
                  <button
                    key={item.url + idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === lightboxIndex
                        ? 'border-[#2E8B72] scale-105'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={`Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
