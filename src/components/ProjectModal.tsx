import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Github, ExternalLink, CheckCircle, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F5F6F2] rounded-3xl border border-[#111111]/10 shadow-2xl film-grain"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F6F2]/90 backdrop-blur-md border-b border-[#111111]/10">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555555] hover:text-[#111111] transition-colors py-1.5 px-3 rounded-full hover:bg-black/5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#111111] hover:bg-black/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Project Image Banner */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#111513]">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#A8DCCB] uppercase block">
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Links and Role Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#111111]/8 shadow-xs">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#555555] block">Role / Contribution</span>
                <span className="text-sm font-bold text-[#111111]">{project.role}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#2E8B72] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 text-[#111111] text-xs font-semibold hover:bg-black/5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#111111]/8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#111111] mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#111111]/8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#111111] mb-2">
                  <CheckCircle className="w-4 h-4 text-[#2E8B72]" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 rounded-2xl bg-white border border-[#111111]/8 space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2E8B72]" />
                <span>Key Features & Architecture</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B72] mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/60 border border-[#111111]/6">
                <span className="text-xs font-mono font-bold text-[#555555] uppercase block mb-1">
                  Key Technical Challenge
                </span>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#2E8B72]/10 border border-[#2E8B72]/20">
                <span className="text-xs font-mono font-bold text-[#2E8B72] uppercase block mb-1">
                  Measurable Outcome
                </span>
                <p className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#555555] block">Technology Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white border border-[#111111]/10 text-xs font-semibold text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
