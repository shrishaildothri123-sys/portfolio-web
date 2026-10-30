import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text resume file
    const textContent = `
============================================================
SHRISHAIL DOTHRI
AIML Student & Full-Stack Developer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
============================================================

EDUCATION
---------
B.Tech in Computer Science & Engineering (AIML)
REVA University, Bengaluru, India | 2023 - 2027 (Expected)
Focus: Deep Learning, Data Structures & Algorithms, Systems Architecture

TECHNICAL SKILLS
----------------
Languages: Python, JavaScript, TypeScript, SQL, C++
Frontend: React, Tailwind CSS, HTML5, CSS3, Next.js
Backend & Database: Node.js, Express, MongoDB, MySQL, Supabase, REST APIs
AI & Machine Learning: PyTorch, TensorFlow, Computer Vision, NumPy, Pandas
DevOps & Tooling: Git, GitHub, Docker, Postman, Linux

KEY PROJECTS
------------
1. PET-MART: Full-Stack Pet Care & Adoption Ecosystem
   - Built with React, Node.js, Express, MongoDB, Tailwind CSS, JWT.
   - Comprehensive pet adoption, veterinary scheduling, and supplies marketplace.
   - Sub-150ms indexed search query response across adoption profiles.

2. SAHARA: AI-Driven Disaster Relief & Resource Coordination
   - Built with Python, FastAPI, React, Supabase, PostgreSQL, PyTorch.
   - Crisis response logistics platform with predictive resource allocation.
   - Prioritized urgency ranking for emergency supply distribution.

3. NeuralVision Sentinel: Real-Time Edge Visual Inference
   - Built with Python, PyTorch, YOLOv8, OpenCV, FastAPI, Docker.
   - Sub-second edge anomaly detection with 42 FPS sustained inference.

EXPERIENCE & MILESTONES
-----------------------
- Full-Stack Developer & Technical Lead (PET-MART & SAHARA) [2024 - 2025]
- Inter-Collegiate Hackathon Finalist & Lead Architect [2024]
- Open Source Contributor & Systems Researcher [2023 - 2024]
============================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shrishail_Dothri_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const text = `Shrishail Dothri - AIML Student & Full-Stack Developer (${PERSONAL_INFO.email}) - REVA University, Bengaluru`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-xl bg-[#0f172a] border border-white/[0.14] shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#070a10] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center text-[#38bdf8]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">
                Curriculum Vitae — Shrishail Dothri
              </h3>
              <p className="font-mono text-[11px] text-[#87929a]">
                Verified Academic & Professional Overview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="btn-primary-gradient px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-secondary-outline px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              title="Print formatted document"
            >
              <Printer className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1e293b]/70 hover:bg-[#1e293b] text-[#bdc8d1] hover:text-white transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Viewport */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0f19] text-[#dae2fd]">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="font-mono text-xs text-[#38bdf8]">
                {PERSONAL_INFO.status}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#8ed5ff]">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.institution}
            </p>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#87929a]">
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:underline">{PERSONAL_INFO.email}</a></span>
              <span>·</span>
              <span>Location: <span className="text-white">{PERSONAL_INFO.location}</span></span>
              <span>·</span>
              <span>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline">github.com/shrishaildothri</a></span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-lg bg-[#0f172a] border border-white/[0.08] space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-semibold text-white text-base">
                  {PERSONAL_INFO.degree}
                </h3>
                <span className="font-mono text-xs text-[#bdc8d1]">
                  2023 — 2027 (Expected)
                </span>
              </div>
              <p className="text-xs font-mono text-[#8ed5ff]">
                {PERSONAL_INFO.institution}, Bengaluru
              </p>
              <p className="text-xs text-[#bdc8d1] leading-relaxed">
                Specialized coursework in Deep Learning, Artificial Intelligence, Neural Computation, Operating Systems, Database Management Systems, and Object-Oriented Analysis & Design.
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#0f172a] border border-white/[0.08] space-y-2">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {proj.title} — <span className="text-xs font-mono font-normal text-[#8ed5ff]">{proj.headline}</span>
                    </h3>
                    <span className="font-mono text-[11px] text-[#38bdf8] px-2 py-0.5 rounded bg-[#1e293b]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#bdc8d1] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="badge-chip px-2 py-0.5 rounded text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-bold">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/[0.06]">
                <span className="text-[#87929a] block mb-1">LANGUAGES</span>
                <span className="text-white">Python, JavaScript, TypeScript, SQL, C++</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/[0.06]">
                <span className="text-[#87929a] block mb-1">FRONTEND</span>
                <span className="text-white">React, Tailwind CSS, HTML5/CSS3, Next.js</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/[0.06]">
                <span className="text-[#87929a] block mb-1">BACKEND & STORAGE</span>
                <span className="text-white">Node.js, Express, MongoDB, MySQL, Supabase</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/[0.06]">
                <span className="text-[#87929a] block mb-1">AIML & TOOLS</span>
                <span className="text-white">PyTorch, OpenCV, Docker, Git, REST APIs</span>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Leadership & Achievements</span>
            </h2>
            <div className="p-4 rounded-lg bg-[#0f172a] border border-white/[0.08] space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2 text-xs">
                <span className="font-semibold text-white">Inter-Collegiate Innovation Hackathon Finalist</span>
                <span className="font-mono text-[#87929a]">2024</span>
              </div>
              <p className="text-xs text-[#bdc8d1]">
                Lead Architect for crisis response platform, recognized in top 50+ collegiate teams for real-time edge dispatch viability.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#070a10] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#87929a]">
          <span>Format: Full Academic & Technical Resume</span>
          <button onClick={onClose} className="text-[#38bdf8] hover:underline cursor-pointer">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
