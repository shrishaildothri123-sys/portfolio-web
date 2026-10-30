import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, Terminal, Sparkles, MapPin, GraduationCap, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// System profile: Shrishail Dothri
const engineer = {
  name: "Shrishail Dothri",
  institution: "REVA University, Bengaluru",
  discipline: "Computer Science & Engineering (AIML)",
  coreStack: ["Python", "React", "Node.js", "Express", "PyTorch"],
  mission: "Building intelligent web apps and scalable architectures",
  status: "Available for internships & full-time roles"
};

export default engineer;`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-ambient-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Top subtle light flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-52 bg-gradient-to-b from-[#38bdf8]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0f172a] border border-white/[0.08] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
              </span>
              <span className="font-mono text-xs text-[#dae2fd]">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="font-mono text-sm tracking-wider uppercase text-[#38bdf8] font-semibold flex items-center gap-2">
                <span className="inline-block w-6 h-[1px] bg-[#38bdf8]"></span>
                {PERSONAL_INFO.title}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8ed5ff] to-[#38bdf8]">{PERSONAL_INFO.name}</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#bdc8d1] font-normal leading-relaxed max-w-2xl pt-1">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Brief Context & Bio */}
            <p className="text-sm sm:text-base text-[#87929a] leading-relaxed max-w-2xl">
              Studying Computer Science with AIML specialization at{' '}
              <span className="text-[#dae2fd] font-medium">REVA University, Bengaluru</span>.
              Specialized in engineering high-reliability full-stack services with modern TypeScript, React, and Python AI inference pipelines.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-primary-gradient px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="btn-secondary-outline px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 text-xs font-mono text-[#bdc8d1] hover:text-white transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-white/20 hover:decoration-[#38bdf8]"
              >
                <span>Curriculum Vitae</span>
                <span className="text-[#38bdf8]">↗</span>
              </button>
            </div>

            {/* Quick Micro-telemetry */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  REVA
                </div>
                <div className="text-xs text-[#87929a] font-mono mt-0.5">
                  Univ. Scholar
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#38bdf8] tracking-tight">
                  15+
                </div>
                <div className="text-xs text-[#87929a] font-mono mt-0.5">
                  Projects & Repos
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Full-Stack
                </div>
                <div className="text-xs text-[#87929a] font-mono mt-0.5">
                  + AIML Pipeline
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal Block (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-[#070a10] border border-white/[0.1] shadow-2xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0f172a]/90 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                  <span className="font-mono text-xs text-[#87929a] ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#38bdf8]" />
                    shrishail.config.ts
                  </span>
                </div>

                {/* Floating copy button */}
                <button
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-[#1e293b]/70 hover:bg-[#1e293b] border border-white/[0.08] text-xs font-mono text-[#dae2fd] flex items-center gap-1.5 transition-all cursor-pointer hover:border-[#38bdf8]/40"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#bdc8d1]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#dae2fd] overflow-x-auto">
                <pre className="text-[#dae2fd]">
                  <code>
                    <span className="text-[#87929a] italic">// System profile: Shrishail Dothri</span>{'\n'}
                    <span className="text-[#818cf8]">const</span> <span className="text-[#8ed5ff]">engineer</span> = {'{'}{'\n'}
                    {'  '}name: <span className="text-emerald-300">"Shrishail Dothri"</span>,{'\n'}
                    {'  '}institution: <span className="text-emerald-300">"REVA University, Bengaluru"</span>,{'\n'}
                    {'  '}discipline: <span className="text-emerald-300">"CSE (AIML)"</span>,{'\n'}
                    {'  '}coreStack: [{'\n'}
                    {'    '}<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node.js"</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"PyTorch"</span>, <span className="text-emerald-300">"Supabase"</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}mission: <span className="text-amber-200">"Building intelligent web apps</span>{'\n'}
                    {'           '}<span className="text-amber-200">& scalable architectures"</span>,{'\n'}
                    {'  '}status: <span className="text-[#38bdf8]">"Open for opportunities"</span>{'\n'}
                    {'}'};{'\n\n'}
                    <span className="text-[#818cf8]">export default</span> engineer;
                  </code>
                </pre>
              </div>

              {/* Bottom status bar */}
              <div className="px-4 py-2 bg-[#0b0f19] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#87929a]">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">●</span>
                  <span>TypeScript 5.x</span>
                  <span>·</span>
                  <span>UTF-8</span>
                </div>
                <div className="text-[#38bdf8]">
                  git:(main)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
