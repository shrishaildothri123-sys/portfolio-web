import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#0b0f19]/40 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
      style={{ backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Active Status Pulse */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0f172a] border border-white/[0.1] flex items-center justify-center text-[#38bdf8] group-hover:border-[#38bdf8]/40 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white tracking-tight text-base sm:text-lg group-hover:text-[#38bdf8] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                {/* Active status pulse indicator */}
                <span className="relative flex h-2 w-2" title="Available for opportunities">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#bdc8d1]/70 tracking-wide hidden sm:block">
                AIML & Full-Stack
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`px-3 py-1.5 text-sm transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#38bdf8] font-medium'
                      : 'text-[#bdc8d1] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="btn-secondary-outline px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 cursor-pointer group"
              title="View and Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#bdc8d1] group-hover:text-[#38bdf8] transition-colors" />
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="btn-primary-gradient px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="btn-secondary-outline px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0f172a] border border-white/[0.08] text-[#bdc8d1] hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0b0f19]/95 border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 mt-3 backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
              </span>
              <span className="font-mono text-xs text-[#38bdf8]">
                REVA University · AIML
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#bdc8d1]">Status: Available</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-sm text-[#dae2fd] hover:text-white hover:bg-[#1e293b]/60 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full btn-secondary-outline py-2.5 rounded-lg text-xs font-mono flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="w-full btn-primary-gradient py-2.5 rounded-lg text-xs font-semibold text-center block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
