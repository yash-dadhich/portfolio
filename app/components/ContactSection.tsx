"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry");
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:ydadhich007@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "bg-transparent border border-[#abb2bf] px-4 py-2 text-white text-[16px] font-[var(--font-fira-code)] outline-none focus:border-[#c778dd] transition-colors placeholder:text-[#abb2bf]/40 w-full";

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full">
      <div className="absolute top-10 left-[-20px] hidden lg:block opacity-30" aria-hidden="true">
        <div className="border border-[#abb2bf] w-36 h-36" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Heading */}
        <div className="flex items-center gap-4">
          <h2 className="flex items-baseline text-[32px] font-medium leading-none whitespace-nowrap font-[var(--font-fira-code)]">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">contacts</span>
          </h2>
          <div className="flex-1 h-px bg-[#abb2bf] opacity-30 min-w-[40px]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Left — form */}
          <div className="flex flex-col gap-8 flex-1 max-w-lg w-full">
            <p className="text-[#abb2bf] text-[16px] leading-[26px] font-[var(--font-fira-code)]">
              I&apos;m interested in freelance opportunities. However, if you have other
              requests or questions, don&apos;t hesitate to contact me.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)]">
                  <span className="text-[#c778dd]">_</span>name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)]">
                  <span className="text-[#c778dd]">_</span>email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)]">
                  <span className="text-[#c778dd]">_</span>message
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-[#c778dd] text-white text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#c778dd]/10 transition-colors cursor-pointer"
                >
                  send-message &gt;&gt;
                </button>
              </div>
            </form>
          </div>

          {/* Right — contact links */}
          <div className="border border-[#abb2bf] flex flex-col gap-4 p-4 min-w-[260px]">
            <p className="text-white text-[16px] font-semibold font-[var(--font-fira-code)]">Message me here</p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/917727976081" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>+91 77279 76081</span>
              </a>
              <a href="mailto:ydadhich007@gmail.com"
                className="flex items-center gap-2 text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <span>ydadhich007@gmail.com</span>
              </a>
              <a href="https://github.com/yash-dadhich" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/yash-dadhich</span>
              </a>
              <a href="https://in.linkedin.com/in/yashdadhich" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>linkedin.com/in/yashdadhich</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
