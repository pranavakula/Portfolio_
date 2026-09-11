import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Server,
  BrainCircuit,
  Code2,
  BarChart3,
  Binary,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowUpRight,
  Shield,
  Layers,
  Terminal,
} from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skills: SkillCategory[];
}

interface EnrichedSkill {
  name: string;
  category: string;
  highlight?: boolean;
  tier: 'Production' | 'Advanced' | 'Proficient';
  context?: string;
  proficiencyScore: number; // 1 to 5
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map categories to visual iconography and descriptors
  const categoryMeta: Record<
    string,
    { icon: React.ElementType; tag: string; color: string; desc: string }
  > = {
    'Backend & Systems': {
      icon: Server,
      tag: 'PRODUCTION BACKEND',
      color: '#2E8B72',
      desc: 'Architecting high-throughput microservices, REST APIs, and relational schemas.',
    },
    'Agentic AI & Machine Learning': {
      icon: BrainCircuit,
      tag: 'AUTONOMOUS AI',
      color: '#2E8B72',
      desc: 'Multi-agent graphs, autonomous node configs, and Scikit-learn pipelines.',
    },
    'Programming Languages': {
      icon: Code2,
      tag: 'CORE LANGUAGES',
      color: '#2E8B72',
      desc: 'High-performance systems programming, object-oriented design, and scripting.',
    },
    'Frontend & Analytics': {
      icon: BarChart3,
      tag: 'DATA VISUALIZATION',
      color: '#2E8B72',
      desc: 'Component-driven interfaces and automated operational BI dashboards.',
    },
    'Core Computer Science': {
      icon: Binary,
      tag: 'THEORY & SYSTEMS',
      color: '#2E8B72',
      desc: 'First-principles computation, process scheduling, memory, and algorithms.',
    },
  };

  // Enriched skill context mapping to show where each technology was practically deployed
  const skillDetailsMap: Record<
    string,
    { tier: 'Production' | 'Advanced' | 'Proficient'; context: string; score: number }
  > = {
    'Node.js': { tier: 'Production', context: 'Tredence Agent Studio Backend', score: 5 },
    'Express.js': { tier: 'Production', context: 'Microservice API Routers', score: 5 },
    'Spring Boot (Java)': { tier: 'Production', context: 'CampusMart eCommerce Architecture', score: 5 },
    'RESTful API Architecture': { tier: 'Production', context: 'Enterprise Data Contracts & Endpoints', score: 5 },
    'JWT Authentication & Security': { tier: 'Production', context: 'Stateless Token Auth & Role RBAC', score: 4 },
    'MySQL & Relational Modeling': { tier: 'Production', context: 'Schema Design, Indices & ACID Transactions', score: 4 },
    'SQL Query Optimization': { tier: 'Advanced', context: 'Complex Joins, Aggregations & Performance', score: 4 },

    'Agentic AI & Multi-Agent Systems': { tier: 'Production', context: 'UnicornVision & Tredence Agent Graphs', score: 5 },
    'Agent Workflows & Node Configs': { tier: 'Production', context: 'Multi-Node Task Routing in Agent Studio', score: 5 },
    'Agent Studio Platform': { tier: 'Production', context: 'Enterprise Agent Authoring & Deployment', score: 4 },
    'Scikit-learn': { tier: 'Advanced', context: 'Insurance Prediction Classification Pipeline', score: 5 },
    'Support Vector Machines (SVM)': { tier: 'Advanced', context: 'High-Dimensional Hyperplane Optimization', score: 4 },
    'Random Forest & Logistic Regression': { tier: 'Advanced', context: 'Ensemble Learning & Feature Benchmarking', score: 4 },
    'Data Preprocessing & Feature Selection': { tier: 'Advanced', context: 'Imputation, Scaling & Variance Filtering', score: 5 },
    'Generative AI & LLMs Concepts': { tier: 'Advanced', context: 'Amazon ML Summer School 2025 Curriculum', score: 4 },

    'C++': { tier: 'Advanced', context: 'Competitive Algorithms & Memory Efficiency', score: 5 },
    'Java': { tier: 'Production', context: 'Enterprise OOP, Spring Boot & Design Patterns', score: 5 },
    'Python': { tier: 'Advanced', context: 'Agentic Workflows, ML Pipelines & ETL Scripts', score: 5 },
    'SQL': { tier: 'Advanced', context: 'Database Queries, Analytical Procedures & Aggregates', score: 5 },
    'JavaScript / TypeScript': { tier: 'Production', context: 'Type-Safe Full-Stack App Engineering', score: 4 },

    'React.js': { tier: 'Production', context: 'Interactive SPAs & High-Frame-Rate UI', score: 4 },
    'HTML5 & CSS3': { tier: 'Proficient', context: 'Semantic Web & Accessible Markup', score: 4 },
    'Tailwind CSS & Responsive UI': { tier: 'Production', context: 'Utility-First Systems & Responsive Layouts', score: 5 },
    'Power BI': { tier: 'Advanced', context: 'Operational KPI Dashboards & DAX Modeling', score: 4 },
    'Tableau': { tier: 'Advanced', context: 'Multi-Dimensional Business Visualizations', score: 4 },
    'KPI Dashboard Engineering': { tier: 'Advanced', context: 'Automated Real-Time Business Telemetry', score: 4 },

    'Data Structures & Algorithms': { tier: 'Advanced', context: 'Big-O Optimization, Trees, Graphs & DP', score: 5 },
    'Operating Systems & Concurrency': { tier: 'Advanced', context: 'Process Scheduling, Mutexes, Threads & IPC', score: 5 },
    'Computer Architecture': { tier: 'Advanced', context: 'Memory Hierarchy, Caches & Instruction Sets', score: 4 },
    'Database Management Systems (DBMS)': { tier: 'Advanced', context: 'Normalization, Concurrency Control & Indexing', score: 5 },
    'Process Scheduling & IPC': { tier: 'Advanced', context: 'Round-Robin, Preemption, Pipes & Semaphores', score: 4 },
    'Memory Management': { tier: 'Advanced', context: 'Paging, Segmentation, Allocation & Virtual Memory', score: 4 },
    'Object-Oriented Programming (OOP)': { tier: 'Production', context: 'Inheritance, Polymorphism & SOLID Principles', score: 5 },
  };

  // Flatten and enrich all skills
  const allSkills: EnrichedSkill[] = useMemo(() => {
    const list: EnrichedSkill[] = [];
    skills.forEach((cat) => {
      cat.skills.forEach((s) => {
        const meta = skillDetailsMap[s.name] || {
          tier: s.highlight ? 'Production' : 'Advanced',
          context: cat.category,
          score: s.highlight ? 5 : 4,
        };
        list.push({
          name: s.name,
          category: cat.category,
          highlight: s.highlight,
          tier: meta.tier,
          context: meta.context,
          proficiencyScore: meta.score,
        });
      });
    });
    return list;
  }, [skills]);

  // Categories list for filter tabs
  const categoryTabs = ['ALL', ...skills.map((s) => s.category)];

  // Filter skills based on tab & query
  const filteredSkills = useMemo(() => {
    return allSkills.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.context && item.context.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [allSkills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F5F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B72] uppercase">
            03 // TECHNICAL STACK & CAPABILITIES
          </span>
          <div className="h-[1px] w-12 bg-[#2E8B72]/40" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight uppercase leading-[1.1]">
              Technical <span className="text-[#2E8B72]">Arsenal.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-2xl mt-3">
              Full-stack architectures, autonomous agent workflows, and core computing fundamentals built for high reliability.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#555555] bg-white px-3.5 py-1.5 rounded-full border border-[#111111]/8 shadow-2xs font-semibold">
              {allSkills.length}+ VERIFIED CAPABILITIES
            </span>
            <span className="text-xs font-mono text-[#2E8B72] bg-[#2E8B72]/10 px-3.5 py-1.5 rounded-full border border-[#2E8B72]/20 font-semibold">
              TREDENCE & INDUSTRY TESTED
            </span>
          </div>
        </div>

        {/* Interactive Domain Spotlight Cards (Bento Top Strip) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className="p-6 rounded-3xl bg-white border border-[#111111]/8 shadow-2xs hover:border-[#2E8B72]/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#2E8B72]/10 text-[#2E8B72] flex items-center justify-center group-hover:bg-[#2E8B72] group-hover:text-white transition-colors">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2E8B72] bg-[#2E8B72]/10 px-2 py-0.5 rounded">
                ENTERPRISE BACKEND
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-1">
              Distributed Backend & APIs
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed mb-4">
              Spring Boot microservices, Node.js / Express services, stateless JWT authentication, and relational MySQL schemas.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Spring Boot', 'Node.js', 'Express', 'JWT', 'MySQL'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-[#F5F6F2] text-[10px] font-mono font-semibold text-[#111111]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#111111]/8 shadow-2xs hover:border-[#2E8B72]/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#2E8B72]/10 text-[#2E8B72] flex items-center justify-center group-hover:bg-[#2E8B72] group-hover:text-white transition-colors">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2E8B72] bg-[#2E8B72]/10 px-2 py-0.5 rounded">
                AGENTIC & ML
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-1">
              Autonomous AI & Modeling
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed mb-4">
              Multi-agent node graphs in Agent Studio, Scikit-learn classification pipelines, and Amazon ML Summer School graduate.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Agent Studio', 'Multi-Agent', 'Scikit-learn', 'SVM', 'Random Forest'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-[#F5F6F2] text-[10px] font-mono font-semibold text-[#111111]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#111111]/8 shadow-2xs hover:border-[#2E8B72]/40 transition-all group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#2E8B72]/10 text-[#2E8B72] flex items-center justify-center group-hover:bg-[#2E8B72] group-hover:text-white transition-colors">
                <Binary className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2E8B72] bg-[#2E8B72]/10 px-2 py-0.5 rounded">
                FIRST PRINCIPLES
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-1">
              Systems & Theoretical Rigor
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed mb-4">
              Deep algorithmic problem solving in C++ and Java, OS concurrency, process scheduling, memory hierarchies, and IEEE research.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['C++', 'Java', 'Python', 'OS & Concurrency', 'DBMS'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-[#F5F6F2] text-[10px] font-mono font-semibold text-[#111111]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs & Quick Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-white text-[#555555] border border-[#111111]/8 hover:text-[#111111] hover:border-[#111111]/20'
                  }`}
                >
                  {tab === 'ALL' ? 'ALL SKILLS' : tab}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#555555] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by tech (e.g. Spring, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#111111]/8 text-xs font-medium text-[#111111] placeholder:text-[#555555]/60 focus:outline-none focus:border-[#2E8B72] transition-colors"
            />
          </div>
        </div>

        {/* Dynamic Skill Cards Grid with Rich Visual Context */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isHighlight = skill.highlight;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                    isHighlight
                      ? 'bg-white border-[#2E8B72]/30 hover:border-[#2E8B72] hover:shadow-md'
                      : 'bg-white/80 border-[#111111]/8 hover:border-[#111111]/20 hover:bg-white'
                  }`}
                >
                  <div>
                    {/* Top Tier Badge & Category */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          skill.tier === 'Production'
                            ? 'bg-[#2E8B72]/10 text-[#2E8B72] border border-[#2E8B72]/20'
                            : 'bg-[#F5F6F2] text-[#555555]'
                        }`}
                      >
                        {skill.tier}
                      </span>

                      {/* Visual 5-dot Proficiency Meter */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= skill.proficiencyScore
                                ? 'bg-[#2E8B72]'
                                : 'bg-[#111111]/10'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Skill Title */}
                    <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#2E8B72] transition-colors leading-snug">
                      {skill.name}
                    </h4>

                    {/* Real-World Context (Where It Was Applied) */}
                    {skill.context && (
                      <p className="text-[11px] text-[#555555] mt-1.5 leading-normal line-clamp-2">
                        {skill.context}
                      </p>
                    )}
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="mt-3 pt-2.5 border-t border-[#111111]/5 flex items-center justify-between text-[10px] font-mono text-[#555555]/80">
                    <span className="truncate">{skill.category}</span>
                    {isHighlight && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B72] shrink-0" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if Search Matches Nothing */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#111111]/8 mt-4">
            <Search className="w-8 h-8 text-[#555555]/40 mx-auto mb-3" />
            <h4 className="text-base font-bold text-[#111111]">No matching technologies found</h4>
            <p className="text-xs text-[#555555] mt-1">Try clearing your search query or selecting "ALL SKILLS".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-[#2E8B72] text-white text-xs font-semibold hover:bg-[#2E8B72]/90 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
