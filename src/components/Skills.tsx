import React, { useState } from 'react';
import { Terminal, Layers, Database, Cpu, Wrench, Search, Code2 } from 'lucide-react';
import { SKILLS, Skill } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { label: 'All', icon: Layers },
    { label: 'Languages', icon: Code2 },
    { label: 'Frontend', icon: Layers },
    { label: 'Backend & Database', icon: Database },
    { label: 'AI / Machine Learning', icon: Cpu },
    { label: 'DevOps & Tools', icon: Wrench },
  ];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#0b0f19]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#38bdf8] font-semibold">
              <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
              <span>02. Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Skills & Tooling
            </h2>
            <p className="text-[#bdc8d1] text-base max-w-xl">
              Engineered with JetBrains Mono chips. A comprehensive breakdown of programming languages, frameworks, databases, and machine learning toolsets.
            </p>
          </div>

          {/* Search bar within surface-inset styling */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#87929a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by skill or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#070a10] border border-white/[0.08] text-sm text-[#f1f5f9] placeholder-[#87929a] input-slate-focus font-mono text-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#38bdf8] text-[#0b0f19] font-semibold shadow-[0_0_16px_rgba(56,189,248,0.35)]'
                    : 'bg-[#0f172a] text-[#bdc8d1] border border-white/[0.08] hover:text-white hover:border-[#38bdf8]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0b0f19]' : 'text-[#38bdf8]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredSkills.map((skill) => (
            <SpotlightCard
              key={skill.name}
              className="p-4 flex flex-col justify-between group hover:border-[#38bdf8]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    <span className="font-mono text-sm font-semibold text-white group-hover:text-[#38bdf8] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#1e293b] text-[#bdc8d1] border border-white/[0.06]">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#87929a] font-mono leading-relaxed line-clamp-2">
                  {skill.context}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-[#87929a]">
                <span className="text-[10px] text-[#818cf8]">{skill.category}</span>
                <span className="opacity-0 group-hover:opacity-100 text-[#38bdf8] transition-opacity">
                  active
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredSkills.length === 0 && (
          <div className="p-8 text-center rounded-lg bg-[#070a10] border border-white/[0.08]">
            <p className="text-sm font-mono text-[#87929a]">
              No technical skills matched "{searchQuery}" in category "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs font-mono text-[#38bdf8] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Technical stack summary bar */}
        <div className="mt-10 p-5 rounded-lg bg-[#070a10] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center text-[#38bdf8]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono text-white font-medium">
                Production-Tested Tech Stacks
              </p>
              <p className="text-[11px] font-mono text-[#87929a]">
                MERN (MongoDB, Express, React, Node.js) · FastAPI + PyTorch · Supabase PostgreSQL
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-[#38bdf8] shrink-0">
            {SKILLS.length} Total Technologies
          </div>
        </div>
      </div>
    </section>
  );
};
