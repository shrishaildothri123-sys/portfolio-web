import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award, GitBranch, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0b0f19]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#38bdf8] font-semibold">
            <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
            <span>04. Milestones & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic & Project Milestones
          </h2>
          <p className="text-[#bdc8d1] text-base max-w-xl">
            A chronological timeline of technical education, leadership initiatives, competitive hackathons, and systems engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.1] space-y-12 max-w-4xl mx-auto ml-2 sm:ml-6">
          {EXPERIENCES.map((item, index) => {
            const isEducation = item.roleType === 'Education';
            const isHackathon = item.roleType === 'Hackathon';
            const isLead = item.roleType === 'Project Leadership';

            const IconComponent = isEducation
              ? GraduationCap
              : isHackathon
              ? Award
              : isLead
              ? Briefcase
              : GitBranch;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0f172a] border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                {/* Milestone Content Card */}
                <SpotlightCard className="p-6 sm:p-7">
                  <div className="space-y-4">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#1e293b] text-[#38bdf8] border border-white/[0.08]">
                            {item.roleType}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-[#8ed5ff] mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-[#87929a]">
                        <span className="flex items-center gap-1 text-[#bdc8d1]">
                          <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                          {item.period}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#87929a]" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm text-[#bdc8d1] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet achievements */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#87929a]">
                        Key Highlights & Outcomes
                      </div>
                      <ul className="space-y-1.5">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae2fd]">
                            <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge-chip px-2 py-0.5 rounded text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
