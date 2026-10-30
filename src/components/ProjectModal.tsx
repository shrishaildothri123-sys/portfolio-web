import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Server, Terminal } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-xl bg-[#0f172a] border border-white/[0.14] shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#070a10] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="font-mono text-xs text-[#87929a] uppercase tracking-wider">
              {project.category} · {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1e293b]/70 hover:bg-[#1e293b] text-[#bdc8d1] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-[#38bdf8] text-base font-medium">
              {project.headline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-[#bdc8d1] leading-relaxed">
            {project.longDescription}
          </p>

          {/* Key Metrics / Highlights */}
          <div className="p-4 rounded-lg bg-[#070a10] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8ed5ff] font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Performance & Architectural Benchmarks</span>
            </div>
            <ul className="space-y-2">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae2fd]">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-[#87929a] uppercase tracking-wider font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>System Design Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.architectureNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#1e293b]/50 border border-white/[0.06] font-mono text-xs text-[#bdc8d1]"
                >
                  <span className="text-[#38bdf8] mr-2">›</span>
                  {note}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2">
            <h4 className="font-mono text-xs text-[#87929a] uppercase tracking-wider font-semibold">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge-chip px-2.5 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-[#070a10] border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
          <div className="font-mono text-xs text-[#87929a]">
            Project ID: <span className="text-[#dae2fd]">{project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-outline px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#38bdf8]" />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="btn-primary-gradient px-4 py-2 rounded-lg text-xs font-semibold"
            >
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
