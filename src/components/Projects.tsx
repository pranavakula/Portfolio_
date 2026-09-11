import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F5F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            04 // FEATURED ENGINEERING PROJECTS
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.05]">
              Featured <span className="text-[#2E8B72]">Projects.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-2xl mt-3">
              Case studies in autonomous multi-agent AI systems, full-stack Spring Boot architectures, enterprise BI analytics, and predictive machine learning pipelines.
            </p>
          </div>

          <span className="text-xs font-mono text-[#555555] uppercase">
            Click any project for technical case study
          </span>
        </div>

        {/* Alternating Project Previews */}
        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // Project 02: Info Left / Image Right
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 rounded-3xl bg-white/50 hover:bg-white border border-[#111111]/8 hover:border-[#2E8B72]/40 transition-all duration-300 shadow-xs hover:shadow-xl"
              >
                {/* Project Image Column */}
                <div
                  className={`lg:col-span-7 overflow-hidden rounded-2xl bg-[#111513] relative aspect-video ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-mono font-bold tracking-widest text-[#111111] uppercase shadow-xs">
                      PROJECT 0{idx + 1}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-[#A8DCCB]" />
                  </div>
                </div>

                {/* Project Info Column */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#F5F6F2] border border-[#111111]/8 text-xs font-medium text-[#111111]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-transparent text-xs text-[#555555]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#2E8B72] transition-colors">
                    <span>View Technical Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
