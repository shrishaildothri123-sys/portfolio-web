import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, Cpu, Server, Check } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI / ML', 'Systems'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#38bdf8] font-semibold">
              <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
              <span>03. Featured Engineering Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-[#bdc8d1] text-base max-w-xl">
              Engineered with interactive cursor-tracking spotlight illumination. Showcasing full-stack applications, intelligent AI pipelines, and distributed event systems.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#070a10] border border-white/[0.08] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1e293b] text-[#38bdf8] font-medium shadow-sm border border-white/[0.08]'
                    : 'text-[#87929a] hover:text-[#dae2fd]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isPetMart = project.id === 'pet-mart';
            const isSahara = project.id === 'sahara';

            return (
              <SpotlightCard
                key={project.id}
                className="p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Card Header Status */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                        {project.category}
                      </span>
                      <span className="text-[#87929a] text-xs">·</span>
                      <span className="font-mono text-[11px] text-[#bdc8d1]">
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="badge-chip px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Headline */}
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-[#87929a] group-hover:text-[#38bdf8] p-1 transition-colors"
                        title="View Architecture Specs"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#8ed5ff] mt-1">
                      {project.headline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#bdc8d1] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights / Metrics */}
                  <div className="p-3.5 rounded-lg bg-[#070a10] border border-white/[0.06] space-y-1.5">
                    <div className="text-[11px] font-mono text-[#87929a] uppercase tracking-wider">
                      Core Metrics & Architecture
                    </div>
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#dae2fd]">
                        <span className="text-[#38bdf8] font-bold">›</span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge-chip px-2 py-0.5 rounded text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#38bdf8] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#070a10] border border-white/[0.08] text-[#bdc8d1] hover:text-white hover:border-[#38bdf8]/40 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="btn-secondary-outline px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Project Modal Dialog */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
