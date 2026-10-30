import React from 'react';
import { GraduationCap, BookOpen, Layers, Cpu, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { PERSONAL_INFO, PHILOSOPHY } from '../data/portfolioData';

export const About: React.FC = () => {
  const academicHighlights = [
    'Deep exploration of Neural Network Architectures, Computer Vision, and Supervised/Unsupervised Learning.',
    'Systematic software engineering practices: modular design, RESTful protocols, and database schema normalization.',
    'Algorithmic problem solving across data structures, graph traversals, and dynamic programming in Python & C++.',
    'Real-time full-stack deployments integrating frontend interfaces with modern serverless/microservice backends.'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#38bdf8] font-semibold">
            <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
            <span>01. Profile & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-[#bdc8d1] text-base max-w-2xl">
            Undergraduate Computer Science engineer with a dedicated focus on Artificial Intelligence, Machine Learning, and Full-Stack systems.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Academic Focus Card (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start justify-between flex-wrap gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1e293b] border border-white/[0.08] flex items-center justify-center text-[#38bdf8]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Academic Focus
                      </h3>
                      <p className="font-mono text-xs text-[#38bdf8]">
                        REVA University, Bengaluru
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#070a10] border border-white/[0.08] font-mono text-xs text-[#bdc8d1]">
                    B.Tech CSE (AIML) · 2023–2027
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#bdc8d1] leading-relaxed">
                  <p>
                    My academic curriculum at <strong className="text-white">REVA University</strong> is centered at the intersection of classical computer science fundamentals and modern machine learning breakthroughs. I study how computational models can perceive patterns, reason over data, and drive automation.
                  </p>
                  <p>
                    Beyond theoretical machine learning, I focus intensively on translating algorithms into resilient, production-ready software. I believe an AI model only delivers value when wrapped in robust APIs, accompanied by intuitive user interfaces, and hosted on reliable infrastructure.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                    Key Academic & Research Pursuits
                  </h4>
                  <ul className="space-y-2">
                    {academicHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bdc8d1]">
                        <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#87929a]">
                <span>Specialization: AI & Machine Learning</span>
                <span className="text-[#38bdf8]">Bengaluru Tech Hub</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Philosophy Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="px-1 pb-1">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#38bdf8] font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </h3>
            </div>

            {PHILOSOPHY.map((phil, idx) => {
              const IconComponent = phil.icon === 'Layers' ? Layers : phil.icon === 'Cpu' ? Cpu : Zap;
              return (
                <SpotlightCard key={idx} className="p-5 flex-1">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1e293b] border border-white/[0.08] flex items-center justify-center text-[#38bdf8] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {phil.title}
                      </h4>
                      <p className="text-xs text-[#bdc8d1] leading-relaxed">
                        {phil.summary}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}

            {/* Quick Tech Highlights Badge Container */}
            <div className="p-4 rounded-lg bg-[#070a10] border border-white/[0.08]">
              <div className="text-xs font-mono text-[#87929a] mb-2 flex items-center justify-between">
                <span>SYSTEM DISCIPLINE</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['MERN Stack', 'PyTorch Inference', 'PostgreSQL / Supabase', 'REST Design', 'Docker', 'Clean Architecture'].map((tag) => (
                  <span key={tag} className="badge-chip px-2 py-0.5 rounded text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
