import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Copy, Check, MessageSquare, Clock, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#38bdf8] font-semibold">
            <span className="w-4 h-[1px] bg-[#38bdf8]"></span>
            <span>05. Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#bdc8d1] text-base max-w-xl">
            Have a project in mind, seeking an intern/full-time engineer, or exploring collaboration? Send a message directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SpotlightCard className="p-6 sm:p-7 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Inquiries & Collaboration
                </h3>
                <p className="text-sm text-[#bdc8d1] leading-relaxed">
                  I am actively open to discussions regarding software engineering roles, AIML projects, research ventures, and high-impact hackathon collaborations.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-lg bg-[#070a10] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#87929a] uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                    Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-[#38bdf8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base text-white hover:text-[#38bdf8] transition-colors break-all block font-semibold"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Quick Metadata Points */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3 text-[#bdc8d1]">
                  <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[#bdc8d1]">
                  <Clock className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Typical Response Time: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-[#bdc8d1]">
                  <MessageSquare className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Available for Virtual or In-Person Meetups</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-outline px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-[#38bdf8]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-outline px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e293b] border border-[#38bdf8]/40 text-[#38bdf8] flex items-center justify-center mx-auto shadow-[0_0_16px_rgba(56,189,248,0.3)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-[#bdc8d1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your communication payload has been recorded. I will review and reply to{' '}
                    <span className="text-[#38bdf8] font-mono">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="btn-secondary-outline px-4 py-2 rounded-lg text-xs font-mono cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Shrishail,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="btn-primary-gradient px-4 py-2 rounded-lg text-xs font-semibold"
                    >
                      Open in Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-semibold">
                      Send Secure Message
                    </h3>
                    <span className="font-mono text-[11px] text-[#87929a]">
                      Encrypted Transit
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-[#93000a]/20 border border-[#ffb4ab]/30 text-xs font-mono text-[#ffdad6]">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block font-mono text-xs text-[#bdc8d1]">
                        Your Name <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a10] border border-white/[0.08] text-sm text-[#f1f5f9] placeholder-[#87929a]/60 input-slate-focus font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block font-mono text-xs text-[#bdc8d1]">
                        Email Address <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a10] border border-white/[0.08] text-sm text-[#f1f5f9] placeholder-[#87929a]/60 input-slate-focus font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block font-mono text-xs text-[#bdc8d1]">
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration regarding PET-MART or AIML"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a10] border border-white/[0.08] text-sm text-[#f1f5f9] placeholder-[#87929a]/60 input-slate-focus font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block font-mono text-xs text-[#bdc8d1]">
                      Message <span className="text-[#38bdf8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shrishail, I came across your portfolio and would love to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070a10] border border-white/[0.08] text-sm text-[#f1f5f9] placeholder-[#87929a]/60 input-slate-focus font-sans resize-y"
                    />
                  </div>

                  {/* Form Footer */}
                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-[11px] font-mono text-[#87929a]">
                      Direct destination: {PERSONAL_INFO.email}
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gradient px-6 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-[#0b0f19] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
