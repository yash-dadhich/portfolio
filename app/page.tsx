"use client";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

// ─── Figma Asset URLs ───────────────────────────────────────────────────────
// Home assets
const imgHeroPhoto = "https://www.figma.com/api/mcp/asset/f54f62b4-3969-4335-a787-827ad3003da0";
const imgProfilePhoto = "https://www.figma.com/api/mcp/asset/61325bcc-82db-4495-840e-efaac64f977c";
const imgGithubIcon = "https://www.figma.com/api/mcp/asset/35479e5e-a1a3-4e98-b53d-efce1b422149";
const imgFigmaIcon = "https://www.figma.com/api/mcp/asset/bf0b713f-ee30-4fef-9eae-870358f6d3f4";
const imgDribbleIcon = "https://www.figma.com/api/mcp/asset/dc1aa951-fe66-4d9f-a1d7-d21dd59e9612";
const imgDiscordIcon = "https://www.figma.com/api/mcp/asset/77c703d9-5fde-40ac-a703-842aef652477";
const imgEmailIcon = "https://www.figma.com/api/mcp/asset/ba723e92-17a6-4460-a4eb-4f9827e2792e";
const imgLogoSmall = "https://www.figma.com/api/mcp/asset/c05f43ad-d2d2-4c87-8509-0a1d7b8dbb22";
const imgLogoBig = "https://www.figma.com/api/mcp/asset/0433a64d-0f2f-4442-8c22-e521cb7b6c34";
const imgDot = "https://www.figma.com/api/mcp/asset/d9a53a65-fc9a-4993-811e-9a8600f61326";
// Project assets
const imgProject1 = "https://www.figma.com/api/mcp/asset/3619d8cd-1ecc-434c-a114-b8c2cd946029";
const imgProject2 = "https://www.figma.com/api/mcp/asset/69f724d1-5ad5-4a57-abfc-49bc31e2fe8d";
const imgProject3 = "https://www.figma.com/api/mcp/asset/5fc1e35d-b4af-47cb-b6e2-12c0063ec42e";
const imgProject4 = "https://www.figma.com/api/mcp/asset/88fef2d1-6c95-46f5-accc-521b2e07b6c7";
const imgProject5 = "https://www.figma.com/api/mcp/asset/7c8e807c-83a6-4756-b25e-5c7dd8ded973";
// About assets
const imgAboutPhoto = "https://www.figma.com/api/mcp/asset/22b4846d-15a8-4228-8fbe-136eb6e4e4bd";
const imgLogoOutline = "https://www.figma.com/api/mcp/asset/9af91d2d-5afd-4bac-afd1-ba51430bccf9";
const imgDividerLine = "https://www.figma.com/api/mcp/asset/6167c291-3020-4d52-988d-21170cc024e8";

// ─── Reusable small components ──────────────────────────────────────────────

function DotsGrid({ cols = 5, rows = 5, size = 4, gap = 20 }: { cols?: number; rows?: number; size?: number; gap?: number }) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${size}px)`, gap: `${gap - size}px` }}
      aria-hidden="true"
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <img key={i} src={imgDot} alt="" width={size} height={size} />
      ))}
    </div>
  );
}

function SectionHeading({ tag, title, line = true }: { tag: string; title: string; line?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="flex items-baseline gap-0 text-[32px] font-medium leading-none whitespace-nowrap font-[var(--font-fira-code)]">
        <span className="text-[#c778dd]">{tag}</span>
        <span className="text-white">{title}</span>
      </h2>
      {line && <div className="flex-1 h-px bg-[#abb2bf] opacity-30 min-w-[40px]" />}
    </div>
  );
}

function NavLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <a
      href={href}
      className={`flex items-baseline gap-0 text-[16px] transition-colors hover:text-white font-[var(--font-fira-code)] ${active ? "font-medium" : "font-normal text-[#abb2bf]"}`}
    >
      <span className="text-[#c778dd]">#</span>
      <span className={active ? "text-white" : ""}>{label}</span>
    </a>
  );
}

function PrimaryBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "inline-flex items-center px-4 py-2 border border-[#c778dd] text-white text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#c778dd]/10 transition-colors cursor-pointer";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function SecondaryBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "inline-flex items-center px-4 py-2 border border-[#abb2bf] text-[#abb2bf] text-[16px] font-medium font-[var(--font-fira-code)] hover:bg-[#abb2bf]/10 transition-colors cursor-pointer";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#282c33] border-b border-[#abb2bf]/10">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={imgLogoSmall} alt="Logo" width={16} height={16} />
          <span className="text-white text-[16px] font-bold font-[var(--font-fira-code)]">Yash</span>
        </div>
        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home" label="home" active />
          <NavLink href="#projects" label="works" />
          <NavLink href="#about" label="about-me" />
          <NavLink href="#experience" label="experience" />
          <NavLink href="#reviews" label="reviews" />
          <NavLink href="#contact" label="contacts" />
        </nav>
        {/* Mobile hamburger placeholder */}
        <div className="md:hidden text-[#abb2bf] text-[16px] font-[var(--font-fira-code)]">
          <span className="text-[#c778dd]">≡</span>
        </div>
      </div>
    </header>
  );
}

// ─── Side media bar ──────────────────────────────────────────────────────────
function MediaBar() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/yash-dadhich",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/in/yashdadhich",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Gmail",
      href: "mailto:ydadhich007@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/917727976081",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#", // will be updated later
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed left-4 top-0 bottom-0 hidden lg:flex flex-col items-center justify-start pt-32 gap-3 z-40">
      <div className="flex flex-col items-center gap-3">
        {links.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-[#abb2bf] hover:text-[#c778dd] transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="w-px flex-1 max-h-32 bg-[#abb2bf] opacity-30 mt-3" />
    </div>
  );
}

// ─── Hero / Home Section ─────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden w-full">
      {/* Background decorative elements */}
      <div className="absolute top-[200px] right-[-20px] hidden lg:block opacity-40" aria-hidden="true">
        <div className="border border-[#abb2bf] w-24 h-24" />
      </div>
      <div className="absolute bottom-[200px] left-[-20px] hidden lg:block opacity-40" aria-hidden="true">
        <DotsGrid cols={5} rows={5} size={4} gap={20} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 h-full min-h-[calc(100vh-6rem)]">
        {/* Left content */}
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)]">
            Hi all. I am
          </p>
          <h1 className="text-[48px] md:text-[64px] font-semibold leading-tight text-white font-[var(--font-fira-code)]">
            Yash Dadhich
          </h1>
          <p className="text-[24px] font-medium font-[var(--font-fira-code)]">
            <span className="text-[#abb2bf]">{"> "}</span>
            <span className="text-[#c778dd]">Senior Mobile App</span>
            <span className="text-white"> & </span>
            <span className="text-[#c778dd]">Flutter Developer</span>
          </p>
          <p className="text-[#abb2bf] text-[16px] leading-[26px] font-[var(--font-fira-code)] max-w-md">
            4+ years building scalable Android &amp; Flutter apps with Kotlin, Java, and Dart. 99.4% crash-free rate across production apps.
          </p>
          <div className="flex gap-4 flex-wrap">
            <PrimaryBtn href="#contact">Contact me!!</PrimaryBtn>
            <SecondaryBtn href="#projects">See my work</SecondaryBtn>
          </div>
        </div>

        {/* Right — hero image + decorations */}
        <div className="relative flex-shrink-0">
          {/* Big logo outline watermark */}
          <div className="absolute -bottom-8 -left-8 opacity-20" aria-hidden="true">
            <img src={imgLogoBig} alt="" width={120} height={120} />
          </div>
          {/* Dots decoration */}
          <div className="absolute -top-4 -right-4 hidden lg:block" aria-hidden="true">
            <DotsGrid cols={5} rows={5} size={4} gap={20} />
          </div>
          {/* Hero photo */}
          <div className="relative w-[340px] h-[400px] overflow-hidden">
            <img
              src={imgHeroPhoto}
              alt="Yash Dadhich"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Status badge */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
            <div className="bg-[#282c33] border border-[#abb2bf] flex items-center gap-2 px-3 py-2 text-[14px] font-[var(--font-fira-code)]">
              <div className="w-3 h-3 bg-[#c778dd] border border-[#c778dd]" />
              <span className="text-[#abb2bf]">Currently working at </span>
              <span className="text-white font-semibold">Now-A-Wave</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote banner */}
      <div className="max-w-[1200px] mx-auto px-8 mt-16">
        <div className="border border-[#abb2bf] bg-[#282c33] px-8 py-6 relative inline-block max-w-full">
          <img src={imgLogoBig} alt="" width={40} height={28} className="absolute -top-4 left-2 opacity-70" aria-hidden="true" />
          <p className="text-white text-[16px] md:text-[20px] font-medium font-[var(--font-fira-code)] whitespace-normal">
            Velocity is nothing without direction. Speed is just a number, vector is impact.
          </p>
          <div className="border border-[#abb2bf] px-4 py-2 absolute -bottom-4 right-0">
            <span className="text-white text-[16px] md:text-[20px] font-[var(--font-fira-code)]">- Y.D.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skill Block ─────────────────────────────────────────────────────────────
function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[#abb2bf] flex flex-col gap-2 py-2 flex-1 min-w-[150px] max-w-[200px]">
      <div className="px-2">
        <span className="text-white text-[16px] font-semibold font-[var(--font-fira-code)]">{title}</span>
      </div>
      <div className="h-px bg-[#abb2bf] opacity-20" />
      <div className="flex flex-col gap-1 px-2">
        {items.map((item, i) => (
          <span key={i} className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)] leading-[22px]">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────
function AboutSection() {
  const skills = [
    { title: "Languages", items: ["Kotlin", "Java", "Dart", "XML"] },
    { title: "Architecture", items: ["MVVM", "Clean Architecture"] },
    { title: "State Mgmt", items: ["GetX", "Provider"] },
    { title: "Libraries", items: ["Retrofit", "Room", "RecyclerView", "Jetpack"] },
    { title: "Firebase", items: ["Firestore", "Auth", "FCM", "Crashlytics"] },
    { title: "Tools", items: ["Android Studio", "Git", "GitHub", "Jira", "Postman"] },
    { title: "UI", items: ["Material Design", "Constraint Layout", "Responsive UI"] },
    { title: "Other", items: ["REST APIs", "Google Play Store", "ProGuard"] },
  ];

  const facts = [
    "I speak English and Hindi",
    <>I&apos;ve published <span className="text-white">10+ apps</span> on Google Play Store</>,
    <>I achieved <span className="text-white">99.4%</span> crash-free user rate</>,
    <>I reduced APK size by <span className="text-white">30%</span> through optimization</>,
    <>I love<span className="text-white"> learning </span>new things </>,
    "I love mentoring junior developers",
    <>I&apos;m based in <span className="text-white">Jodhpur, Rajasthan</span></>,
    "I am Google Cloud certified",
    "Sometime I write", "Most of the time I listen"
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-[-20px] hidden lg:block opacity-30" aria-hidden="true">
        <DotsGrid cols={5} rows={5} size={4} gap={20} />
      </div>
      <div className="absolute bottom-20 right-[-20px] hidden lg:block opacity-30" aria-hidden="true">
        <div className="border border-[#abb2bf] w-36 h-36" />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-16">
        {/* About me */}
        <div className="flex flex-col gap-8">
          <SectionHeading tag="#" title="about-me" />
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Bio text */}
            <div className="flex flex-col gap-6 flex-1 max-w-xl">
              <div className="text-[#abb2bf] text-[16px] leading-[26px] font-[var(--font-fira-code)] flex flex-col gap-4">
                <p>Hello, I&apos;m Yash!</p>
                <p>
                  Results-driven Senior Mobile Application Developer with 4+ years of experience
                  designing, developing, and deploying scalable Android and Flutter applications
                  using Kotlin, Java, and Dart.
                </p>
                <p>
                  Demonstrated expertise in MVVM architecture, Jetpack components, and Firebase
                  integration. Proven ability to lead cross-functional mobile development teams,
                  mentor junior developers, and deliver high-quality production applications.
                </p>
                <p>
                  Achieved <span className="text-white font-medium">99.4% crash-free user rate</span> and
                  reduced APK size by <span className="text-white font-medium">30%</span> through performance optimization.
                </p>
              </div>
              <PrimaryBtn href="#contact">{"Get in touch ->"}</PrimaryBtn>
            </div>
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -top-4 -left-4 hidden lg:block" aria-hidden="true">
                <DotsGrid cols={5} rows={5} size={4} gap={20} />
              </div>
              <div className="w-[280px] lg:w-[340px] h-[420px] overflow-hidden border border-[#abb2bf]/30">
                <img src={imgAboutPhoto} alt="About Yash" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block" aria-hidden="true">
                <img src={imgLogoOutline} alt="" width={100} height={100} className="opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-8">
          <SectionHeading tag="#" title="skills" />
          <div className="flex flex-wrap gap-4">
            {skills.map((s) => <SkillBlock key={s.title} {...s} />)}
          </div>
        </div>

        {/* Fun facts */}
        <div className="flex flex-col gap-8">
          <SectionHeading tag="#" title="my-fun-facts" />
          <div className="flex flex-wrap gap-4">
            {facts.map((fact, i) => (
              <div key={i} className="border border-[#abb2bf] px-3 py-2">
                <span className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)]">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Section ──────────────────────────────────────────────────────
function ExperienceSection() {
  const jobs = [
    {
      company: "NOW~A~WAVE PVT.LTD",
      location: "Jodhpur",
      role: "Senior Mobile Application Developer (Android & Flutter)",
      period: "Oct 2024 – Present",
      points: [
        "Led a mobile development team of 4+ developers, conducting code reviews and mentoring junior developers.",
        "Managed end-to-end client communication, requirement gathering, and sprint planning using Agile/Scrum.",
        "Reduced Android APK size by 30% through code optimization, ProGuard rules, and resource compression.",
        "Architected and developed new features for production applications using Kotlin, Flutter, and MVVM.",
        "Collaborated with UI/UX designers to implement pixel-perfect, responsive Material Design interfaces.",
      ],
    },
    {
      company: "Square Bits Pvt. Ltd.",
      location: "Jodhpur",
      role: "Mobile Application Developer (Android & Flutter)",
      period: "Sept 2022 – Sept 2024",
      points: [
        "Designed and developed 10+ Android applications published on Google Play Store using Kotlin, Java, and MVVM.",
        "Integrated third-party REST APIs, payment gateways, and SDKs including Retrofit, Stripe, and Firebase.",
        "Maintained and upgraded legacy codebases, improving stability and reducing crash rates across multiple apps.",
        "Collaborated with UI/UX designers to implement pixel-perfect, responsive Material Design interfaces.",
      ],
    },
    {
      company: "Open Innovations Lab",
      location: "Jodhpur",
      role: "Android Developer Intern",
      period: "Feb 2022 – Sept 2022",
      points: [
        "Built core Android application features using Kotlin following MVVM architecture patterns.",
        "Developed responsive XML layouts using Constraint Layout and Material Design components.",
        "Participated in daily standups, sprint reviews, and code review sessions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden w-full">
      <div className="absolute top-20 right-[-20px] hidden lg:block opacity-30" aria-hidden="true">
        <DotsGrid cols={5} rows={5} size={4} gap={20} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        <SectionHeading tag="#" title="experience" />

        <div className="flex flex-col gap-8">
          {jobs.map((job) => (
            <div key={job.company} className="border border-[#abb2bf] p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-[20px] font-semibold font-[var(--font-fira-code)]">
                    {job.company}
                    <span className="text-[#abb2bf] font-normal text-[16px]">, {job.location}</span>
                  </h3>
                  <p className="text-[#c778dd] text-[16px] font-medium font-[var(--font-fira-code)] italic">{job.role}</p>
                </div>
                <span className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)] whitespace-nowrap">{job.period}</span>
              </div>
              {/* Divider */}
              <div className="h-px bg-[#abb2bf] opacity-20" />
              {/* Points */}
              <ul className="flex flex-col gap-2">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] leading-[26px]">
                    <span className="text-[#c778dd] flex-shrink-0 mt-[2px]">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <SectionHeading tag="#" title="education" />
          <div className="flex flex-col gap-4">
            <div className="border border-[#abb2bf] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-white text-[18px] font-semibold font-[var(--font-fira-code)]">Jodhpur Institute of Engineering and Technology</p>
                <p className="text-[#c778dd] text-[16px] font-[var(--font-fira-code)] italic">B.Tech – Information Technology (65.00%)</p>
              </div>
              <span className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)] whitespace-nowrap">2016 – 2020</span>
            </div>
            <div className="border border-[#abb2bf] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-white text-[18px] font-semibold font-[var(--font-fira-code)]">Geetanjali Sr. Sec. School, Jodhpur</p>
                <p className="text-[#c778dd] text-[16px] font-[var(--font-fira-code)] italic">Senior Secondary – Physics, Chemistry, Mathematics (63.40%)</p>
              </div>
              <span className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)] whitespace-nowrap">2015 – 2016</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col gap-6">
          <SectionHeading tag="#" title="certifications" />
          <div className="flex flex-wrap gap-4">
            {[
              "Prompt Design in Vertex AI – Google Cloud Skill Badge",
              "Build Real World AI Applications with Gemini and Imagen – Google Cloud Skill Badge",
              "Google Cloud Fundamentals: Core Infrastructure – Google Cloud",
            ].map((cert) => (
              <div key={cert} className="border border-[#abb2bf] px-4 py-3 flex items-start gap-3 max-w-sm">
                <span className="text-[#c778dd] text-[18px] flex-shrink-0">✦</span>
                <span className="text-[#abb2bf] text-[15px] font-[var(--font-fira-code)] leading-[24px]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ─────────────────────────────────────────────────────────
function ReviewsSection() {
  const reviews = [
    {
      name: "Byshadh",
      role: "Product Lead",
      text: "Hey, like I mentioned, it was really a great energy to work with you guys. Especially with you, it was more of a different point of view on how we can do a feature better. I enjoyed working with you guys.",
    },
    {
      name: "Rohith",
      role: "Engineering Manager",
      text: "I want to take a moment to highlight the great work you've done throughout this project. You've been incredibly proactive, always getting involved in all tasks and staying ahead of potential issues. Your input on improving the app's performance has been invaluable, and you've consistently identified problems and offered solutions before they became bigger issues. Your dedication and technical expertise have made a significant impact on the quality of product.",
    },
    {
      name: "Conor Grehan",
      role: "Senior Backend Developer",
      text: "Collaborating with Yash at Optimise was a seamless experience. As a backend developer, I really appreciated how clear he was about API requirements and data structures. He didn't just consume endpoints; he actively helped debug integration issues and ensured the data flow was efficient. It's rare to find a mobile dev who understands server-side constraints so well. Highly recommended.",
    },
  ];

  // Duplicate for seamless infinite loop
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-12">
        <SectionHeading tag="#" title="client-reviews" />
        <p className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] mt-3">
          Trusted by teammates and product leaders for proactive collaboration.
        </p>
      </div>

      {/* Scrolling track — overflow hidden on wrapper */}
      <div className="w-full overflow-hidden">
        <div className="marquee-track">
          {doubled.map((review, i) => (
            <div
              key={i}
              className="
                group
                mx-3 flex-shrink-0 w-[340px] sm:w-[400px]
                border border-[#abb2bf]/30 bg-[#282c33]
                p-6 flex flex-col gap-4
                transition-all duration-300 ease-in-out
                hover:scale-[1.04] hover:border-[#c778dd] hover:shadow-[0_0_24px_rgba(199,120,221,0.15)]
                cursor-default
              "
            >
              {/* Header */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#c778dd] text-[22px] font-bold leading-none font-[var(--font-fira-code)]">&ldquo;&ldquo;</span>
                  <span className="text-white text-[18px] font-semibold font-[var(--font-fira-code)]">{review.name}</span>
                </div>
                <span className="text-[#abb2bf] text-[14px] font-[var(--font-fira-code)]">{review.role}</span>
              </div>
              {/* Divider */}
              <div className="h-px bg-[#abb2bf] opacity-20" />
              {/* Review text */}
              <p className="text-[#abb2bf] text-[15px] font-[var(--font-fira-code)] leading-[26px]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#abb2bf]/20 py-8 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src={imgLogoSmall} alt="Logo" width={16} height={16} />
              <span className="text-white text-[16px] font-medium font-[var(--font-fira-code)]">Yash</span>
            </div>
            <a href="mailto:ydadhich007@gmail.com"
              className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)] hover:text-white transition-colors">
              ydadhich007@gmail.com
            </a>
          </div>
          <p className="text-white text-[16px] font-[var(--font-fira-code)]">Senior Mobile Application Developer</p>
        </div>
        {/* Right — social icons */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-[20px] font-medium font-[var(--font-fira-code)]">Media</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/yash-dadhich" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#abb2bf] hover:text-[#c778dd] transition-colors" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://in.linkedin.com/in/yashdadhich" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#abb2bf] hover:text-[#c778dd] transition-colors" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://wa.me/917727976081" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#abb2bf] hover:text-[#c778dd] transition-colors" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="mailto:ydadhich007@gmail.com" aria-label="Gmail">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#abb2bf] hover:text-[#c778dd] transition-colors" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 mt-8">
        <p className="text-[#abb2bf] text-[16px] font-[var(--font-fira-code)]">
          © Copyright {new Date().getFullYear()}. Made by Yash Dadhich
        </p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-[#282c33] min-h-screen w-full overflow-x-hidden">
      <Header />
      <MediaBar />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}