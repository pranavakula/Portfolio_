import React from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Cricket } from './components/Cricket';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Milestones } from './components/Milestones';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const portfolioData = initialPortfolioData;

  return (
    <div className="min-h-screen bg-[#F5F6F2] text-[#111111] relative selection:bg-[#2E8B72] selection:text-white">
      {/* 00 — Minimal Sticky Navigation */}
      <Navbar personal={portfolioData.personal} />

      <main>
        {/* 01 — HERO */}
        <Hero personal={portfolioData.personal} />

        {/* 02 — ABOUT (Software Engineering Identity) */}
        <About personal={portfolioData.personal} />

        {/* 03 — SOFTWARE / SKILLS */}
        <Skills skills={portfolioData.skills} />

        {/* 04 — SELECTED PROJECTS */}
        <Projects projects={portfolioData.projects} />

        {/* 05 — EXPERIENCE */}
        <Experience experience={portfolioData.experience} />

        {/* 06 — EDUCATION */}
        <Education education={portfolioData.education} />

        {/* 07 — ACHIEVEMENTS / MILESTONES */}
        <Milestones milestones={portfolioData.milestones} />

        {/* 08 — CRICKET & SPORTS LEADERSHIP (Personal Dimension) */}
        <Cricket cricket={portfolioData.cricket} />

        {/* 09 — PHILOSOPHY */}
        <Philosophy philosophy={portfolioData.philosophy} />

        {/* 10 — CONTACT */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* 11 — FOOTER */}
      <Footer personal={portfolioData.personal} />

    </div>
  );
}
