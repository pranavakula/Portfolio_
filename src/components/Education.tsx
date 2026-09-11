import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, CheckCircle } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#F5F6F2] relative border-t border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            06 // ACADEMIC FOUNDATION & THEORY
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.1]">
              Education & Theory.
            </h2>
            <p className="text-sm sm:text-base text-[#555555] max-w-xl mt-2">
              Rigorous grounding in computing principles, discrete structures, and distributed software engineering.
            </p>
          </div>

          <span className="text-xs font-mono text-[#555555] uppercase">
            Verified Curriculum
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#111111]/8 hover:border-[#2E8B72]/40 transition-all shadow-xs"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#111111]/8 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2E8B72] uppercase tracking-wider block">
                    {item.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mt-1">
                    {item.degree}
                  </h3>
                  <p className="text-base text-[#555555] font-medium mt-1">
                    {item.university}
                  </p>
                </div>

                <span className="px-4 py-1.5 rounded-full bg-[#F5F6F2] border border-[#111111]/10 text-xs font-mono font-semibold text-[#111111]">
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Coursework / Skills */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider block">
                    Core Coursework & Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-[#F5F6F2] text-xs font-medium text-[#111111]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider block">
                    Honors & Activities
                  </span>
                  <ul className="space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                        <CheckCircle className="w-4 h-4 text-[#2E8B72] mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
