import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a10] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0f172a] border border-white/[0.08] flex items-center justify-center text-[#38bdf8]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold tracking-tight text-sm">
                {PERSONAL_INFO.name}
              </div>
              <p className="font-mono text-xs text-[#87929a]">
                AIML Scholar · REVA University · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Social Icons & Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#0f172a] border border-white/[0.08] text-[#bdc8d1] hover:text-white hover:border-[#38bdf8]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#0f172a] border border-white/[0.08] text-[#bdc8d1] hover:text-white hover:border-[#38bdf8]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#0f172a] border border-white/[0.08] text-[#bdc8d1] hover:text-white hover:border-[#38bdf8]/40 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0f172a] border border-white/[0.08] text-[#bdc8d1] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors cursor-pointer ml-2"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#87929a]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span>Synthetic Slate Design System</span>
            <span>·</span>
            <span className="text-[#38bdf8]">Bengaluru, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
