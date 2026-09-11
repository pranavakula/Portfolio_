import React from 'react';
import { motion } from 'motion/react';
import {
  Server,
  BrainCircuit,
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface AboutProps {
  personal: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  const coreStrengths = [
    {
      icon: Server,
      category: '01 // SYSTEMS ARCHITECTURE',
      title: 'Backend & Distributed Systems',
      description:
        'Architecting resilient server-side services with Spring Boot and Node.js. Deep understanding of RESTful contracts, stateless JWT security, transaction integrity in MySQL, and low-latency throughput.',
      metrics: ['Spring Boot & Node.js', 'Relational Modeling', 'API Security'],
    },
    {
      icon: BrainCircuit,
      category: '02 // INTELLIGENT WORKFLOWS',
      title: 'Agentic AI & Machine Learning',
      description:
        'Hands-on engineering of autonomous multi-agent node graphs and workflow orchestrations. Applying classical ML pipelines (SVM, Random Forest, Scikit-learn) and modern LLM paradigms to solve complex operational challenges.',
      metrics: ['Multi-Agent Nodes', 'Scikit-learn Pipelines', 'Agent Studio'],
    },
    {
      icon: Compass,
      category: '03 // RIGOR & EXECUTION',
      title: 'Research & Team Leadership',
      description:
        'Investigating cutting-edge post-quantum cryptographic schemes for 5G IoT (presented at IEEE ICCCNT 2025). Channeling competitive cricket captaincy into calm decision-making, clear communication, and agile team coordination.',
      metrics: ['IEEE Presenter', 'South Zone Inter-University', 'Team Captaincy'],
    },
  ];

  const targetRoles = [
    'Software Development Engineer (SDE)',
    'Backend Engineer',
    'AI & Agentic Systems Developer',
    'Full-Stack Engineer',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-[#F5F6F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            02 // PROFESSIONAL IDENTITY & ENGINEERING FOUNDATION
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        {/* Executive Headline & Quick Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.1] tracking-tight uppercase"
            >
              Solving Complex Systems. <br />
              <span className="text-[#2E8B72]">Built From First Principles.</span>
            </motion.h2>

            <p className="text-base sm:text-lg text-[#555555] mt-4 leading-relaxed max-w-xl">
              I am a Computer Science engineer focused on full-stack development, agentic AI architectures, and scalable systems. I translate ambiguous operational bottlenecks into high-performance, maintainable software.
            </p>

            {/* Target Roles Pill Row */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#555555] uppercase mr-1">
                Target Roles:
              </span>
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full bg-white border border-[#111111]/8 text-xs font-semibold text-[#111111] shadow-2xs"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Verified Impact Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#111111]/8 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#2E8B72] block">
                8.56<span className="text-xs text-[#555555] font-sans ml-1 font-normal">/ 10</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mt-1">
                B.Tech CGPA
              </span>
              <span className="text-[11px] text-[#555555] block mt-0.5">
                Amrita Vishwa Vidyapeetham
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#111111]/8 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#2E8B72] block">
                Enterprise
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mt-1">
                Agent Systems
              </span>
              <span className="text-[11px] text-[#555555] block mt-0.5">
                Tredence Analytics Intern
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#111111]/8 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#2E8B72] block">
                IEEE '25
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mt-1">
                Research Presenter
              </span>
              <span className="text-[11px] text-[#555555] block mt-0.5">
                Post-Quantum Cryptography
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#111111]/8 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#2E8B72] block">
                Captain
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mt-1">
                Competitive Cricket
              </span>
              <span className="text-[11px] text-[#555555] block mt-0.5">
                South Zone Inter-University
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Strengths Cards (Non-repetitive, High-value conceptual pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-[#111111]/8 hover:border-[#2E8B72]/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F5F6F2] group-hover:bg-[#2E8B72] group-hover:text-white text-[#2E8B72] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#2E8B72] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#111111]/6 flex flex-wrap gap-1.5">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-1 rounded-md bg-[#F5F6F2] text-[11px] font-mono font-medium text-[#111111]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
