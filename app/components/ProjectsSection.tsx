"use client";

import { useState } from "react";

interface ProjectCardProps {
  image?: string;
  techs: string[];
  title: string;
  description: string;
  liveUrl?: string;
  cacheUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
}

function PrimaryBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls =
    "inline-flex items-center px-4 py-2 border border-[#c778dd] text-white text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#c778dd]/10 transition-colors cursor-pointer";
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function SecondaryBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls =
    "inline-flex items-center px-4 py-2 border border-[#abb2bf] text-[#abb2bf] text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#abb2bf]/10 transition-colors cursor-pointer";
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function ProjectCard({ image, techs, title, description, liveUrl, cacheUrl, githubUrl, playStoreUrl }: ProjectCardProps) {
  return (
    <div className="border border-[#abb2bf] flex flex-col w-full h-full">
      {image && (
        <div className="border-b border-[#abb2bf] h-[201px] overflow-hidden flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-wrap gap-2 p-2 text-[#abb2bf] text-[14px] font-[var(--font-fira-code)]">
        {techs.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="border-t border-[#abb2bf] flex flex-col gap-4 p-4 flex-1">
        <h3 className="text-white text-[24px] font-medium font-[var(--font-fira-code)]">{title}</h3>
        <p className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] leading-[24px]">{description}</p>
        <div className="flex gap-3 flex-wrap mt-auto">
          {liveUrl && <PrimaryBtn href={liveUrl}>Live &lt;~&gt;</PrimaryBtn>}
          {githubUrl && <PrimaryBtn href={githubUrl}>Github &lt;~&gt;</PrimaryBtn>}
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 border border-[#c778dd] text-white text-[14px] font-medium font-[var(--font-fira-code)] hover:bg-[#c778dd]/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.2l.1-.03 11.07-11.07-3.03-3.03L3.18 23.76zM20.3 10.43l-2.28-1.32-3.4 3.4 3.4 3.38 2.3-1.33c.65-.38.65-1.34-.02-1.73zM2.01 1.05C1.97 1.2 1.95 1.37 1.95 1.56v20.9c0 .19.02.36.06.51l.1.09 11.7-11.7-.1-.1L2.01 1.05zM12.38 12.5l1.43-1.43-11.07-11.1c-.32-.19-.68-.24-1.02-.16l10.66 12.69z" />
              </svg>
              Play Store
            </a>
          )}
          {cacheUrl && <SecondaryBtn href={cacheUrl}>Cached &gt;=</SecondaryBtn>}
        </div>
      </div>
    </div>
  );
}

const COMPLETE_PROJECTS: ProjectCardProps[] = [
  { image: "/projects/kreedo.png", techs: ["Kotlin", "MVVM", "Room", "Firebase"], title: "Kreedo", description: "School management platform — teacher-facing Android app with attendance tracking, lesson planning, and parent communication.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.Kreedo.Kreedo&hl=en_IN" },
  { image: "/projects/taaskyz.png", techs: ["Flutter", "GetX", "Firebase", "FCM"], title: "Taaskyz", description: "Task management app built from scratch with Flutter and GetX. Real-time sync via Firestore, Firebase Auth, and push notifications.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.nowawave.tasky&hl=en_IN" },
  { image: "/projects/srta.png", techs: ["Kotlin", "MVVM", "Firebase", "Crashlytics"], title: "SRTA", description: "Sharjah Road Transport Authority App — road complaint filing, taxi booking, and permit management. 99.4% crash-free users.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.sharjahrta&hl=en_IN" },
  { image: "/projects/zipgrid.png", techs: ["React-Native", "Node.js", "ListViewBuilder"], title: "ZipGrid", description: "Society management platform. Led team of 5 developers. Reduced app load time by 20% via lazy loading and RecyclerView optimizations.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.remindnmore.app&hl=en_IN" },
  { image: "/projects/optimise.png", techs: ["Android", "Kotlin", "MVVM", "RecyclerView"], title: "Optimise", description: "Carry out work tasks and audits assigned to you. Request supervisor approvals or create audits straight from your device.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.apleonaserv.optimise&hl=en_IN" },
  { image: "/projects/hindizaa.png", techs: ["Flutter", "Dart", "Provider", "GetX", "In-App Purchase"], title: "Hindizaa", description: "One-stop reading platform for Hindi book lovers. Vast collection across novels, motivational, spiritual, educational & self-improvement books.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.hindizaa.app&hl=en_IN" },
  { image: "/projects/designDpo.png", techs: ["Android", "Java", "Kotlin", "MVVM", "REST API"], title: "DesignDpo", description: "Interior designing app that brings home decor, renovation, and design to your fingertips. Browse unlimited designs and connect with professionals.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.developer.dsigndpo&hl=en_IN" },
  { techs: ["Java", "Kotlin", "IntelliJ Plugin", "ADB"], title: "Current Fragment", description: "IntelliJ/Android Studio plugin to inspect the active Activity & Fragment stack via ADB. Alt+0 shortcut. 205 downloads · ⭐ 4.7", liveUrl: "https://plugins.jetbrains.com/plugin/29122-current-fragment" },
  { image: "/projects/uplivo.png", techs: ["Android", "Firebase", "DeepAR", "Agora", "In-App Purchase"], title: "Uplivo", description: "Live social community platform with voice chat rooms, live streaming, real-time messaging, virtual gifting, and global friend discovery. High-quality voice/video with a safe, interactive experience." },
];

const SMALL_PROJECTS: ProjectCardProps[] = [
  { techs: ["Flutter", "GetX", "Dart"], title: "Pay QR", description: "Generate UPI QR codes instantly for any amount. Split bills with friends, save QR codes offline — no more awkward 'who owes what' conversations.", playStoreUrl: "https://play.google.com/store/apps/details?id=com.sylionixtech.payqr&hl=en_IN" },
  { techs: ["Flutter", "GetX", "Dart", "Firebase"], title: "Rinkoo Patwa — Tailoring App", description: "Dual-app tailoring platform — a customer app to place orders and a master app to manage them. Built with Flutter, GetX, and Firebase." },
  { techs: ["Flutter", "GetX", "MVVM", "Firebase", "RevenueCat"], title: "Sonix", description: "Flutter-based speaker cleaning utility that generates targeted sound frequencies to remove water and dust. In-app purchases via RevenueCat." },
  { techs: ["Android", "Kotlin", "MVVM", "Firebase", "REST API"], title: "Gold Rush", description: "Casino utility app with voucher and coupon logic, secure onboarding flow, and multi-channel push notifications." },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? COMPLETE_PROJECTS : COMPLETE_PROJECTS.slice(0, 5);

  return (
    <section id="projects" className="py-24 relative overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col gap-12">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <h2 className="flex items-baseline text-[32px] font-medium leading-none whitespace-nowrap font-[var(--font-fira-code)]">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">projects</span>
          </h2>
          <div className="flex-1 h-px bg-[#abb2bf] opacity-30 min-w-[40px]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <div
              key={p.title}
              style={{ animation: showAll && i >= 5 ? `fadeSlideIn 0.4s ease-out ${(i - 5) * 80}ms both` : "none" }}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        {/* See all button */}
        {!showAll && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border border-[#c778dd] text-white text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#c778dd]/10 transition-colors cursor-pointer"
            >
              See all projects ~~&gt;
            </button>
          </div>
        )}

        {/* Small projects */}
        {showAll && (
          <div className="flex flex-col gap-8" style={{ animation: "fadeSlideIn 0.5s ease-out both" }}>
            <div className="flex items-center gap-4">
              <h2 className="flex items-baseline text-[32px] font-medium leading-none whitespace-nowrap font-[var(--font-fira-code)]">
                <span className="text-[#c778dd]">#</span>
                <span className="text-white">small-projects</span>
              </h2>
              <div className="flex-1 h-px bg-[#abb2bf] opacity-30 min-w-[40px]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SMALL_PROJECTS.map((p, i) => (
                <div key={p.title} style={{ animation: `fadeSlideIn 0.4s ease-out ${i * 80}ms both` }}>
                  <ProjectCard {...p} />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="px-6 py-3 border border-[#abb2bf] text-[#abb2bf] text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#abb2bf]/10 transition-colors cursor-pointer"
              >
                Show less ~~&lt;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
