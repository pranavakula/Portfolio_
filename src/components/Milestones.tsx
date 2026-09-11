import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Code2, GraduationCap, Users } from 'lucide-react';
import { MilestoneItem } from '../types';

interface MilestonesProps {
  milestones: MilestoneItem[];
}

export const Milestones: React.FC<MilestonesProps> = ({ milestones }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'CRICKET':
        return Trophy;
      case 'TECHNOLOGY':
        return Code2;
      case 'ACADEMICS':
        return GraduationCap;
      case 'LEADERSHIP':
        return Users;
      default:
        return Trophy;
    }
  };

  return (
    <section id="milestones" className="py-24 md:py-32 bg-[#F5F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            07 // KEY ACHIEVEMENTS & MILESTONES
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.05]">
              Proven <span className="text-[#2E8B72]">Milestones.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-xl mt-3">
              Intersecting competitive cricket achievements, engineering deliverables, and leadership impact.
            </p>
          </div>

          <div className="text-xs font-mono text-[#555555] uppercase bg-white px-4 py-2 rounded-full border border-[#111111]/8">
            VERIFIED HIGHLIGHTS
          </div>
        </div>

        {/* Milestones Grid with Large Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#111111]/8 hover:border-[#2E8B72]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#111111]/25 group-hover:text-[#2E8B72] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F5F6F2] flex items-center justify-center text-[#555555] group-hover:bg-[#2E8B72] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#2E8B72] tracking-wider uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#555555] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#111111]/6 flex items-center justify-between text-[10px] font-mono text-[#555555]">
                  <span>RECORDED ENTRY</span>
                  <span className="text-[#2E8B72]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
