import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F5F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            05 // PROFESSIONAL TRAJECTORY & EXPERIENCE
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.05]">
              Experience & <span className="text-[#2E8B72]">Growth.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-2xl mt-3">
              Professional engineering contributions, leadership roles, and real-world system optimization.
            </p>
          </div>

          <div className="text-xs font-mono text-[#555555] uppercase bg-white px-4 py-2 rounded-full border border-[#111111]/8">
            VERIFIED ROLES // CAREER TIMELINE
          </div>
        </div>

        {/* Minimal Animated Vertical Timeline */}
        <div className="relative border-l border-[#111111]/15 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full bg-[#F5F6F2] border-2 border-[#111111] group-hover:border-[#2E8B72] group-hover:bg-[#2E8B72] transition-colors" />

              {/* Card Container */}
              <div className="p-8 rounded-3xl bg-white border border-[#111111]/8 hover:border-[#2E8B72]/40 transition-all shadow-xs space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#2E8B72]/10 text-[#2E8B72] text-xs font-mono font-bold">
                    {item.year}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1.5 text-xs text-[#555555] font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#2E8B72]" />
                      {item.location}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#2E8B72] mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-[#111111] tracking-wider block">
                    Key Execution & Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                        <CheckCircle2 className="w-4 h-4 text-[#2E8B72] mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#111111]/6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#F5F6F2] text-[11px] font-mono text-[#111111]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
