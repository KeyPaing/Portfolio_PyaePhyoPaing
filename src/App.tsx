/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Experience, Education } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills, Languages } from './components/Skills';
import { Research, Certifications } from './components/Research';
import { motion } from 'motion/react';

import { portfolioData } from './data/portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground grid-pattern">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <Section id="experience" title="Work Experience">
          <Experience />
        </Section>

        <Section id="education" title="Academic Architecture" className="bg-slate-900/30">
          <Education />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="research" title="Publications" className="bg-slate-900/30">
          <Research />
        </Section>

        <Section id="certifications" title="Certifications">
          <Certifications />
        </Section>

        <Section id="skills" title="Core Capabilities">
          <Skills />
          <Languages />
        </Section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-mono">
              [SYSTEM_STATUS: ONLINE] © {new Date().getFullYear()} {portfolioData.profile.name}.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">Neural_Network</a>
              <a href="#" className="text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">Data_Privacy</a>
              <a href="#" className="text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">API_Docs</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

// Simple hook for scroll progress
import { useEffect, useState } from 'react';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(currentScroll / scrollHeight);
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return progress;
}

