import Image from "next/image";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import PhotoSlideshow from "./components/PhotoSlideshow";
import ExpandCard, { ExpandCardGroup } from "./components/ExpandCard";
import WorkCard from "./components/WorkCard";
import ExpandAwardCard from "./components/ExpandAwardCard";

/* ─── Icons ─── */
const IconMail = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 7l10 7 10-7" /></svg>;
const IconLinkedin = () => <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>;
const IconArrowUpRight = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>;
const IconPhone = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>;
const IconMapPin = () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const IconTrophy = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2m12 6h2a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 21h6m-3-4v4M6 3h12v8a6 6 0 11-12 0V3z" /></svg>;
const IconHeart = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;

/* ─── Images ─── */
const IMG = {
  // Design Works
  refood: "/works-refood.svg",
  besafe: "/works-besafe.svg",
  tenagaku: "/works-tenagaku.svg",
  edupath: "/works-edupath.svg",
  meetra: "/works-meetra.svg",
  beasiswaPadi: "/works-beasiswa-padi.svg",
  greenmanager: "/works-greenmanager.svg",
  moneyhoney: "/works-moneyhoney.svg",
  lively: "/works-lively.svg",
  beasigma: "/works-beasigma.svg",
  ristekWS: "/works-ristek-webservice.svg",
  pmbFasilkom: "/works-pmb-fasilkom.svg",
  compfest17: "/works-compfest17.svg",
  fleetManagement: "/works-fleet-management.svg",
  speakroom: "/works-speakroom.svg",
  productivate: "/works-productivate.svg",
  ioc: "/works-ioc.svg",
  atmaCordis: "/works-atma-cordis.svg",
  compfest16: "/works-compfest16.svg",
  infographics: "/works-infographics.svg",
  // Experience / Career / Awards (placeholders kept from old portfolio)
  paragon1: "/works-refood.svg",
  praisindo1: "/praisindo.png",
  workspace: "/works-ristek-webservice.svg",
  projectHalcyon: "/works-compfest17.svg",
  scholarship: "/works-compfest16.svg",
  projectTemanRawat: "/works-refood.svg",
  projectAgrify: "/works-greenmanager.svg",
  projectBeSafe: "/works-besafe.svg",
  projectWattWallet: "/works-moneyhoney.svg",
};

/* ═══ Card ═══ */
type CardColor = "purple" | "green" | "pink" | "yellow" | "blue";
function Card({ children, color = "purple", className = "" }: { children: React.ReactNode; color?: CardColor; className?: string }) {
  return (
    <div className={`card card-${color} ${className}`}>
      {children}
    </div>
  );
}

/* ═══ Decorations ═══ */

function SectionTag({ children, color = "purple" }: { children: React.ReactNode; color?: CardColor }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className={`badge badge-${color}`}>{children}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-background"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      <Navbar />

      {/* ━━━ HERO ━━━ */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-background"
      >

        {/* Pastel blurs */}
        <div className="pointer-events-none absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-blue-light opacity-50 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[5%] h-[450px] w-[450px] rounded-full bg-green-light opacity-40 blur-[120px]" />
        <div className="pointer-events-none absolute left-[20%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-pink-light opacity-40 blur-[120px]" />
        <div className="pointer-events-none absolute right-[10%] bottom-[0%] h-[350px] w-[350px] rounded-full bg-yellow-light opacity-35 blur-[100px]" />
        <div className="pointer-events-none absolute left-[45%] top-[10%] h-[300px] w-[300px] rounded-full bg-purple-light opacity-35 blur-[100px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24">
          <div className="chip-glow relative mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-soft opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-soft" />
            </span>
            Open for Internship &amp; Opportunities
          </div>
          <h1
            className="text-blue text-center leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-biscuitos)",
              fontSize: "clamp(64px, 10vw, 90px)",
            }}
          >
            Aileen Josephine Halim
          </h1>

          <p className="max-w-[700px] mb-10 px-4 text-center text-[15px] md:text-[17px] leading-relaxed text-text-secondary">
            A{" "}
            <span className="font-semibold text-foreground">
              UI/UX designer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              Information Systems student at Universitas Indonesia
            </span>
            , passionate about crafting intuitive digital products that solve
            real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1PLbH62u2pYge5vUQxi_zfxW_NfLU8gWQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-base"
              style={{ boxShadow: "4px 4px 0 #5375B8" }}
            >
              My Resume
            </a>
            <a
              href="#contact"
              className="btn-outline flex items-center gap-2 text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ━━━ MARQUEE ━━━ */}
      <div className="relative z-10 overflow-hidden bg-blue-soft py-4 border-y-[2.5px] border-blue-light">
        <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-7 text-sm font-bold tracking-wider text-blue-dark"
            >
              <span>UI/UX DESIGN</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>DESIGN SYSTEMS</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>PROTOTYPING</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>USER RESEARCH</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>FIGMA</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>WIREFRAMING</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>INTERACTION DESIGN</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>USABILITY TESTING</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>ADOBE PHOTOSHOP</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>ADOBE ILLUSTRATOR</span>
              <span className="text-blue-dark">&#9671;</span>
              <span>GRAPHIC DESIGN</span>
              <span className="text-blue-dark">&#9671;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ━━━ ABOUT ━━━ */}
      <section id="about" className="relative mx-auto max-w-5xl px-10 py-28">

        <SectionTag color="purple">About Me</SectionTag>
        <h2
          className="mb-4 max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          Designing with empathy,{" "}
          <span className="text-purple">building with purpose</span>.
        </h2>
        <p className="mb-12 max-w-3xl text-text-secondary text-lg whitespace-nowrap">
          A UI/UX designer who believes great products start with understanding
          people.
        </p>

        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-[auto_auto_auto]">
          {/* Main about text */}
          <div className="md:col-span-7 md:row-span-2">
            <Card color="purple" className="h-full">
              <div className="p-8 md:p-10">
                <p className="mb-4 text-base leading-[1.9] text-text-secondary">
                  With a strong passion for{" "}
                  <strong className="text-purple">
                    digital product design
                  </strong>
                  , I’ve worked on various{" "}
                  <strong className="text-purple">
                    mobile and web projects
                  </strong>
                  , creating{" "}
                  <strong className="text-purple">
                    user-centered solutions
                  </strong>{" "}
                  that are both engaging and functional. My process is rooted in{" "}
                  <strong className="text-purple">
                    empathy, research, and iteration
                  </strong>{" "}
                  to turn complex problems into{" "}
                  <strong className="text-purple">seamless experiences</strong>.
                  As a third-year{" "}
                  <strong className="text-purple">Information Systems</strong>{" "}
                  student, I continuously grow by applying my knowledge to{" "}
                  <strong className="text-purple">
                    real-world design challenges
                  </strong>
                  .
                </p>
              </div>
            </Card>
          </div>

          {/* Photo */}
          <div className="md:col-span-5 md:row-span-2">
            <Card color="pink" className="h-full">
              <div className="relative h-full" style={{ minHeight: "320px" }}>
                <Image src="/foto-1.png" alt="Aileen Josephine Halim" fill className="object-cover" />
              </div>
            </Card>
          </div>

          {/* Stats */}
          <Card color="green" className="md:col-span-4">
            <div className="p-5 text-center">
              <div
                className="text-3xl font-bold text-green"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                10+
              </div>
              <div className="mt-1 text-sm font-medium text-text-muted">
                Website Designs
              </div>
            </div>
          </Card>
          <Card color="yellow" className="md:col-span-4">
            <div className="p-5 text-center">
              <div
                className="text-3xl font-bold text-yellow-dark"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                15+
              </div>
              <div className="mt-1 text-sm font-medium text-text-muted">
                Mobile App Designs
              </div>
            </div>
          </Card>
          <Card color="blue" className="md:col-span-4">
            <div className="p-5 text-center">
              <div
                className="text-3xl font-bold text-blue"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                2+
              </div>
              <div className="mt-1 text-sm font-medium text-text-muted">
                Years of Experience
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ━━━ WORKS ━━━ */}
      <section id="projects" className="relative overflow-hidden py-28">

        <div className="relative z-10 mx-auto max-w-5xl px-10">
          <SectionTag color="blue">Works</SectionTag>
          <h2
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Design <span className="text-blue">works</span>.
          </h2>
          <p className="mb-14 max-w-lg text-text-secondary text-lg">
            End-to-end product thinking and visual execution.
          </p>

          <Tabs
            tabs={[
              "Case Studies",
              "Projects",
              "Website",
              "Mobile App",
              "Graphic Design",
            ]}
            color="blue"
          >
            {/* Case Studies */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "ReFood",
                    desc: "ReFood is a mobile app that significantly reduces food waste in Indonesia by efficiently redistributing surplus food to those in need through a tech-driven, socially impactful, and user-centered solution, designed for UXVidia (UI/UX Competition at Arkavidia 9.0 ITB).",
                    tag: "Case Study · Competition",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.refood,
                    link: "https://drive.google.com/file/d/1hQzvrzWPsDQ7PmJNOUW8m6SwqIvkS1eJ/view?usp=sharing",
                  },
                  {
                    title: "BeSafe",
                    desc: "BeSafe is a mobile app that enhances public safety in Indonesian urban areas by empowering citizens, accelerating emergency response, and fostering collaboration with authorities through smart, user-driven features—designed for the UI/UX Competition at I/O FESTIVAL 2025 UNTAR.",
                    tag: "Case Study · Competition",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.besafe,
                    link: "https://drive.google.com/file/d/1PmnWH2sNfg3RAGshgwE9QlcTSKJD2CNc/view?usp=sharing",
                  },
                  {
                    title: "TenagaKu",
                    desc: "TenagaKu is a mobile app that connects informal workers and job seekers in Indonesia through a secure, transparent platform. Designed for the Human Computer Interaction course, it offers key features like job search, verification, messaging, reviews, and agreement management tailored to user needs.",
                    tag: "Case Study · Assignment",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.tenagaku,
                    link: "https://drive.google.com/file/d/1Tr96M6cS9feVzhaRPtQzPpd0wZW-U02C/view?usp=sharing",
                  },
                  {
                    title: "EduPath",
                    desc: "EduPath is a mobile learning app that personalizes education through AI-powered paths, gamified challenges, and collaborative features—empowering students to stay motivated, track progress, and learn effectively anywhere. Designed for the UX Design Competition at HOLOGY 7.0 UB.",
                    tag: "Case Study · Competition",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.edupath,
                    link: "https://drive.google.com/file/d/1NG8mtMwmHyNEh2uyFWm2wlI1_BDLpswF/view?usp=sharing",
                  },
                  {
                    title: "Meetra",
                    desc: "Meetra is a digital platform that empowers small businesses in Indonesia by expanding access to funding, networks, and business education, fostering inclusive and sustainable economic growth. Designed for the UI/UX Competition at INVENTION 2024 UNUD.",
                    tag: "Case Study · Competition",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.meetra,
                    link: "https://drive.google.com/file/d/1qlLiyluzV4ikNF10qsMWv6nxnj-dYT4W/view?usp=sharing",
                  },
                  {
                    title: "BeasiswaPADI",
                    desc: "BeasiswaPADI is a scholarship management platform that streamlines provider registration, application submission, and recipient tracking at Universitas Ilmu Padi. Built to simplify manual processes, designed as an assignment for Member Recruitment Digital Product Design RISTEK 2024.",
                    tag: "Case Study · Assignment",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.beasiswaPadi,
                    link: "https://drive.google.com/file/d/1Q9lGv-DR2uWcdH40DkxI88u_yRfbuyx_/view?usp=sharing",
                  },
                ].map((p) => (
                  <WorkCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "GreenManager",
                    desc: "GreenManager is a mobile app designed for the UI/UX Competition at UI DigiTalk 2024, utilizing AI and IoT to address greenhouse challenges through real-time monitoring, AI-driven automation for optimal growth, reduced resource use, predictive insights, and streamlined operations.",
                    tag: "Project · Competition",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.greenmanager,
                  },
                  {
                    title: "MoneyHoney",
                    desc: "MoneyHoney is a mobile app designed for UI/UX Competition 2025 at UNSURYA that simplifies personal finance by integrating payment tools, budgeting, micro-investments, and customizable profiles to help users manage spending and build financial literacy through an intuitive experience.",
                    tag: "Project · Competition",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.moneyhoney,
                  },
                  {
                    title: "Lively",
                    desc: "Lively is a mobile app for doctors to manage tasks, consultations, and documents, enabling them to input patient data, access learning, prescribe medication, manage documents, and communicate through chat. This project was designed as part of a contract-based collaboration.",
                    tag: "Project · Contract",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.lively,
                  },
                  {
                    title: "Beasigma",
                    desc: "Beasigma is a website that streamlines scholarship discovery and registration by offering personalized filters, complete information, and intuitive features to help students find suitable opportunities — designed as an assignment for the Introduction to Software Security course.",
                    tag: "Project · Assignment",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.beasigma,
                  },
                  {
                    title: "RISTEK Web Services",
                    desc: "RISTEK Web Services is a service proudly provided by RISTEK to help boost your digital presence through tailored website and mobile app development, offering customized solutions to enhance visibility, engagement, long-term digital success, and meaningful product experiences.",
                    tag: "Project · Organization",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.ristekWS,
                  },
                  {
                    title: "PMB Fasilkom UI 2024",
                    desc: "PMB Fasilkom UI 2024 is a website designed to help new students adapt to campus life at Fasilkom UI. It introduces academic values and culture through events, leaderboards, assignments, and friend-adding via QR code to support smoother integration.",
                    tag: "Project · Organization",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.pmbFasilkom,
                  },
                  {
                    title: "COMPFEST 17",
                    desc: "COMPFEST 17 is a website that empowers the public to explore, develop, and apply knowledge in information technology through impactful events like academies, competitions, and seminars—fostering awareness, collaboration, and innovation while preparing individuals to adapt to tech changes.",
                    tag: "Project · Organization",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.compfest17,
                  },
                  {
                    title: "Fleet Management System",
                    desc: "Fleet Management System is a website designed as a contract project that prioritizes real-time vehicle tracking with status-based icons, followed by vehicle registration with validation, session logs including distance, fuel, geofence setup using polygon coordinates, and role management.",
                    tag: "Project · Contract",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.fleetManagement,
                  },
                  {
                    title: "Speakroom",
                    desc: "Speakroom is a mobile app to build skills in presentations, speeches, MC, and interviews. With AI-powered feedback, community features, and structured learning, it helps users grow confidently in public speaking, designed for UI/UX Competition TECHFEST 2024 BINUS.",
                    tag: "Project · Competition",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.speakroom,
                  },
                  {
                    title: "Productivate",
                    desc: "Productivate is a mobile app designed to help users manage tasks, track time, and stay on top of deadlines through to-do lists, calendar integration, and productivity reports — designed for UI/UX Competition 2024 GDSC UI, with a focus on daily workflow optimization.",
                    tag: "Project · Competition",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.productivate,
                  },
                ].map((p) => (
                  <WorkCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            {/* Website */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "RISTEK Web Services",
                    desc: "RISTEK Web Services is a service proudly provided by RISTEK to help boost your digital presence through tailored website and mobile app development, offering customized solutions to enhance visibility, engagement, long-term digital success, and meaningful product experiences.",
                    tag: "Organization",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.ristekWS,
                  },
                  {
                    title: "PMB Fasilkom UI 2024",
                    desc: "PMB Fasilkom UI 2024 is a website designed to help new students adapt to campus life at Fasilkom UI. It introduces academic values and culture through events, leaderboards, assignments, and friend-adding via QR code to support smoother integration.",
                    tag: "Organization",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.pmbFasilkom,
                  },
                  {
                    title: "COMPFEST 17",
                    desc: "COMPFEST 17 is a website that empowers the public to explore, develop, and apply knowledge in information technology through impactful events like academies, competitions, and seminars—fostering awareness, collaboration, and innovation while preparing individuals to adapt to tech changes.",
                    tag: "Organization",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.compfest17,
                  },
                  {
                    title: "Fleet Management System",
                    desc: "Fleet Management System is a website designed as a contract project that prioritizes real-time vehicle tracking with status-based icons, followed by vehicle registration with validation, session logs including distance, fuel, geofence setup using polygon coordinates, and role management.",
                    tag: "Contract",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.fleetManagement,
                  },
                  {
                    title: "Beasigma",
                    desc: "Beasigma is a website that streamlines scholarship discovery and registration by offering personalized filters, complete information, and intuitive features to help students find suitable opportunities — designed as an assignment for the Introduction to Software Security course.",
                    tag: "Assignment",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.beasigma,
                  },
                  {
                    title: "BeasiswaPADI",
                    desc: "BeasiswaPADI is a scholarship management platform that streamlines provider registration, application submission, and recipient tracking at Universitas Ilmu Padi. Built to simplify manual processes, designed as an assignment for Member Recruitment Digital Product Design RISTEK 2024.",
                    tag: "Assignment",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.beasiswaPadi,
                  },
                ].map((p) => (
                  <WorkCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            {/* Mobile App */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "ReFood",
                    desc: "ReFood is a mobile app that significantly reduces food waste in Indonesia by efficiently redistributing surplus food to those in need through a tech-driven, socially impactful, and user-centered solution, designed for UXVidia (UI/UX Competition at Arkavidia 9.0 ITB).",
                    tag: "Case Study · Competition",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.refood,
                    link: "https://drive.google.com/file/d/1hQzvrzWPsDQ7PmJNOUW8m6SwqIvkS1eJ/view?usp=sharing",
                  },
                  {
                    title: "BeSafe",
                    desc: "BeSafe is a mobile app that enhances public safety in Indonesian urban areas by empowering citizens, accelerating emergency response, and fostering collaboration with authorities through smart, user-driven features—designed for the UI/UX Competition at I/O FESTIVAL 2025 UNTAR.",
                    tag: "Case Study · Competition",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.besafe,
                    link: "https://drive.google.com/file/d/1PmnWH2sNfg3RAGshgwE9QlcTSKJD2CNc/view?usp=sharing",
                  },
                  {
                    title: "GreenManager",
                    desc: "GreenManager is a mobile app designed for the UI/UX Competition at UI DigiTalk 2024, utilizing AI and IoT to address greenhouse challenges through real-time monitoring, AI-driven automation for optimal growth, reduced resource use, predictive insights, and streamlined operations.",
                    tag: "Project · Competition",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.greenmanager,
                  },
                  {
                    title: "MoneyHoney",
                    desc: "MoneyHoney is a mobile app designed for UI/UX Competition 2025 at UNSURYA that simplifies personal finance by integrating payment tools, budgeting, micro-investments, and customizable profiles to help users manage spending and build financial literacy through an intuitive experience.",
                    tag: "Project · Competition",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.moneyhoney,
                  },
                  {
                    title: "TenagaKu",
                    desc: "TenagaKu is a mobile app that connects informal workers and job seekers in Indonesia through a secure, transparent platform. Designed for the Human Computer Interaction course, it offers key features like job search, verification, messaging, reviews, and agreement management tailored to user needs.",
                    tag: "Case Study · Assignment",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.tenagaku,
                    link: "https://drive.google.com/file/d/1Tr96M6cS9feVzhaRPtQzPpd0wZW-U02C/view?usp=sharing",
                  },
                  {
                    title: "EduPath",
                    desc: "EduPath is a mobile learning app that personalizes education through AI-powered paths, gamified challenges, and collaborative features—empowering students to stay motivated, track progress, and learn effectively anywhere. Designed for the UX Design Competition at HOLOGY 7.0 UB.",
                    tag: "Case Study · Competition",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.edupath,
                    link: "https://drive.google.com/file/d/1NG8mtMwmHyNEh2uyFWm2wlI1_BDLpswF/view?usp=sharing",
                  },
                  {
                    title: "Lively",
                    desc: "Lively is a mobile app for doctors to manage tasks, consultations, and documents, enabling them to input patient data, access learning, prescribe medication, manage documents, and communicate through chat. This project was designed as part of a contract-based collaboration.",
                    tag: "Project · Contract",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.lively,
                  },
                  {
                    title: "Speakroom",
                    desc: "Speakroom is a mobile app to build skills in presentations, speeches, MC, and interviews. With AI-powered feedback, community features, and structured learning, it helps users grow confidently in public speaking, designed for UI/UX Competition TECHFEST 2024 BINUS.",
                    tag: "Project · Competition",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.speakroom,
                  },
                  {
                    title: "Productivate",
                    desc: "Productivate is a mobile app designed to help users manage tasks, track time, and stay on top of deadlines through to-do lists, calendar integration, and productivity reports — designed for UI/UX Competition 2024 GDSC UI, with a focus on daily workflow optimization.",
                    tag: "Project · Competition",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.productivate,
                  },
                  {
                    title: "Meetra",
                    desc: "Meetra is a digital platform that empowers small businesses in Indonesia by expanding access to funding, networks, and business education, fostering inclusive and sustainable economic growth. Designed for the UI/UX Competition at INVENTION 2024 UNUD.",
                    tag: "Case Study · Competition",
                    badge: "badge-blue",
                    color: "blue",
                    img: IMG.meetra,
                    link: "https://drive.google.com/file/d/1qlLiyluzV4ikNF10qsMWv6nxnj-dYT4W/view?usp=sharing",
                  },
                ].map((p) => (
                  <WorkCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            {/* Graphic Design */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "IOC",
                    desc: "Indonesia Organizations Chamber (IOC) is part of Magna Partners, a platform that empowers youth-led organizations through leadership programs, partnerships, and stakeholder connections — where I serve as a Creative Associate, designing Instagram feeds, stories, and visual documents.",
                    tag: "Graphic Design · Organization",
                    badge: "badge-green",
                    color: "green",
                    img: IMG.ioc,
                  },
                  {
                    title: "Atma Cordis Systolic 2024",
                    desc: "Atma Cordis Systolic 2024 is a sports and arts competition organized by FKIK Universitas Atma Jaya, featuring branches such as badminton, basketball, futsal, band & vocal, fan art, modern dance, and Mobile Legends, where I contributed as a contract-based Instagram Feed Designer.",
                    tag: "Graphic Design · Contract",
                    badge: "badge-pink",
                    color: "pink",
                    img: IMG.atmaCordis,
                  },
                  {
                    title: "COMPFEST 16",
                    desc: "COMPFEST 16 is the biggest student-held IT event in Indonesia, empowering the public to explore and apply IT knowledge through academies, competitions, and seminars—fostering innovation and tech adaptability, where I served as PIC of Visual Design, handling feeds, stories, merchandise, and documents.",
                    tag: "Graphic Design · Organization",
                    badge: "badge-purple",
                    color: "purple",
                    img: IMG.compfest16,
                  },
                  {
                    title: "Infographics",
                    desc: "Infographics showcase my design work, created as part of various competitions I've participated in. Each piece reflects my ability to communicate complex information visually while adapting to different themes, audiences, and competition requirements.",
                    tag: "Graphic Design · Competition",
                    badge: "badge-yellow",
                    color: "yellow",
                    img: IMG.infographics,
                  },
                ].map((p) => (
                  <WorkCard key={p.title} {...p} />
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* ━━━ EXPERIENCES ━━━ */}
      <section id="experience" className="relative overflow-hidden py-28">

        <div className="relative z-10 mx-auto max-w-5xl px-10">
          <SectionTag color="pink">Experiences</SectionTag>
          <h2
            className="mb-14 text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            My <span className="text-pink">journey</span>.
          </h2>

          <Tabs
            tabs={["Career", "Education", "Organization", "Awards"]}
            color="pink"
          >
            {/* Career — timeline style with connecting line */}
            <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-4 before:h-[calc(100%-32px)] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-green before:via-pink before:to-purple md:pl-10 before:md:left-[13px]">
              {[
                {
                  company: "PT Paragon Technology",
                  role: "CX Designer Intern",
                  period: "Aug — Nov 2025",
                  color: "green" as CardColor,
                  badgeColor: "badge-green",
                  dotColor: "bg-green",
                  img: "/paragon-1.png",
                  imgFit: undefined as "contain" | undefined,
                  slideshow: [
                    "/paragon-1.png",
                    "/paragon-2.png",
                    "/paragon-3.png",
                  ],
                  bullets: [
                    "Supported end-to-end UI/UX design for multiple internal systems (DigiSO, DOTS, SFM), including flows, wireframes, and high-fidelity prototypes, improving usability and process clarity across operational tools.",
                    "Conducted UX research and developed complete research guidelines, enabling standardized UX measurement across teams.",
                    "Collaborated in CX discussions and qualitative reviews, synthesizing survey insights to inform design iterations and improvement roadmaps.",
                    "Ensured design consistency by organizing auto-layout structures, cleaning up complex flows, and applying standardized components across systems, resulting in cleaner files and smoother handoff for developers.",
                  ],
                },
                {
                  company: "PT Praisindo Teknologi",
                  role: "UI/UX Designer Intern",
                  period: "Sep 2024 — Jul 2025",
                  color: "pink" as CardColor,
                  badgeColor: "badge-pink",
                  dotColor: "bg-pink",
                  img: IMG.praisindo1,
                  imgFit: "contain" as const,
                  slideshow: undefined as string[] | undefined,
                  bullets: [
                    "Contributed to UI/UX design for banking products, including SMBC Bank and PHB Property Investment platforms, as well as the CRM system for BTN Prioritas, focusing on improving user experience, usability, and functionality.",
                    "Designed the design system for QNB Bank, focusing on visual consistency and optimal scalability.",
                    "Involved in the interface design for Praisindo's Wealth Management System, supporting investment portfolio management, and contributed to designing its centralized design system to streamline design processes and maintain consistency.",
                  ],
                },
              ].map((item) => (
                <div key={item.company} className="relative">
                  <div
                    className={`absolute -left-8 top-6 h-6 w-6 rounded-full border-[3px] border-white ${item.dotColor} md:-left-10`}
                    style={{ boxShadow: "0 0 0 2px var(--purple-light)" }}
                  />
                  <Card color={item.color}>
                    <div className="flex">
                      <div
                        className="relative shrink-0 overflow-hidden self-stretch"
                        style={{ aspectRatio: "1/1", minWidth: "260px" }}
                      >
                        {item.slideshow ? (
                          <PhotoSlideshow
                            photos={item.slideshow}
                            interval={3000}
                            alt={item.company}
                            minHeight="100%"
                          />
                        ) : (
                          <Image
                            src={item.img}
                            alt={item.company}
                            fill
                            className={
                              item.imgFit === "contain"
                                ? "object-contain"
                                : "object-cover"
                            }
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <span className={`badge ${item.badgeColor}`}>
                          {item.period}
                        </span>
                        <h3
                          className="mt-2 text-lg font-bold text-foreground"
                          style={{ fontFamily: "var(--font-figtree)" }}
                        >
                          {item.company}
                        </h3>
                        <p
                          className={`mt-0.5 text-sm font-semibold text-${item.color}`}
                        >
                          {item.role}
                        </p>
                        <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-text-secondary">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                              <span
                                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.dotColor}`}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Education */}
            <Card color="blue">
              <div className="grid md:grid-cols-[1fr_280px]">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border-2 border-blue-light overflow-hidden"
                      style={{ boxShadow: "3px 3px 0 var(--blue-light)" }}
                    >
                      <Image src="/logo-ui.png" alt="Universitas Indonesia" width={36} height={36} className="object-contain" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-foreground"
                        style={{ fontFamily: "var(--font-figtree)" }}
                      >
                        Universitas Indonesia
                      </h3>
                      <span className="badge badge-blue mt-1">2023 — 2027</span>
                    </div>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-blue">
                    Bachelor of Information Systems
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    cGPA:{" "}
                    <strong className="text-foreground">3.91 / 4.00</strong>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Served as a Teaching Assistant for Human Computer
                    Interaction (HCI), Calculus 1, and Discrete Mathematics 2
                    courses.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "HCI",
                      "Platform-Based Programming",
                      "Project Management",
                      "Business and Technical Communication",
                      "Business Management",
                      "Principles of Information Systems",
                    ].map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-blue-soft px-3 py-1 text-[11px] font-bold text-blue-dark border border-blue-light"
                        style={{ boxShadow: "1px 1px 0 var(--blue-light)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative hidden min-h-[280px] overflow-hidden md:block">
                  <PhotoSlideshow
                    photos={[
                      "/ui-1.png",
                      "/ui-2.png",
                      "/ui-3.png",
                      "/ui-4.png",
                      "/ui-5.png",
                      "/ui-6.png",
                      "/ui-7.png",
                      "/ui-8.png",
                      "/ui-9.png",
                    ]}
                    interval={3000}
                    alt="Universitas Indonesia"
                    minHeight="280px"
                  />
                </div>
              </div>
            </Card>

            {/* Organization — 2 big featured + 6 in 2x3 grid */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "RISTEK Fasilkom UI",
                    role: "Director of Digital Product Design",
                    period: "Feb — Dec 2025",
                    desc: [
                      "Structured digital product design programs to align with SIG's strategic direction and innovation goals.",
                      "Managed coordination between internal SIGs and external partners to ensure seamless execution and impactful collaboration.",
                    ],
                    color: "green",
                    badgeColor: "badge-green",
                    img: "/ristek-1.png",
                    slideshow: [
                      "/ristek-1.png",
                      "/ristek-2.png",
                      "/ristek-3.png",
                      "/ristek-4.png",
                      "/ristek-5.png",
                      "/ristek-6.png",
                    ],
                  },
                  {
                    title: "COMPFEST 17",
                    role: "PIC of UI/UX",
                    period: "Jan — Nov 2025",
                    desc: [
                      "Spearheaded web user activity research and crafted key COMPFEST 17 platform prototypes, resulting in a significantly improved user experience.",
                      "Developed the Halcyon Design System and led a team of 9 designers, aligning closely with engineers to ensure consistent, scalable, and user-focused digital product delivery.",
                    ],
                    color: "purple",
                    badgeColor: "badge-purple",
                    img: "/compfest17-1.svg",
                    slideshow: [
                      "/compfest17-1.svg",
                      "/compfest17-2.svg",
                      "/compfest17-3.svg",
                    ],
                  },
                ].map((item) => (
                  <ExpandCard key={item.title} {...item} />
                ))}
              </div>
              <ExpandCardGroup>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "IOC",
                      role: "Creative Associate",
                      period: "Sep 2024 — Feb 2025",
                      desc: [
                        "Designed all contents to align with IOC's brand and values.",
                        "Analyzed marketing content trends, particularly for student organizations, and applied insights to enhance design.",
                      ],
                      color: "green",
                      badgeColor: "badge-green",
                      img: "/works-ioc.svg",
                      compact: true,
                    },
                    {
                      title: "BEM Fasilkom UI",
                      role: "UI/UX Designer",
                      period: "Jun 2024 — Feb 2025",
                      desc: [
                        "Responsible for UI/UX design of internal websites developed by BEM Fasilkom UI.",
                        "Oversaw the main website of BEM Fasilkom UI to ensure consistency and usability.",
                      ],
                      color: "blue",
                      badgeColor: "badge-blue",
                      img: "/bem-1.svg",
                      compact: true,
                    },
                    {
                      title: "RISTEK Fasilkom UI",
                      role: "Member of Digital Product Design",
                      period: "Mar 2024 — Jan 2025",
                      desc: [
                        "Acknowledged as the Best Growth in the Digital Product Design team during Q2, showcasing outstanding skills and commitment.",
                        "Handled three external contract projects and three internal projects in collaboration with project managers and developers, contributing to both web and mobile app development.",
                      ],
                      color: "green",
                      badgeColor: "badge-green",
                      img: "/ristek2-1.svg",
                      compact: true,
                    },
                    {
                      title: "Open House Fasilkom UI",
                      role: "Manager of Creative Development",
                      period: "May — Dec 2024",
                      desc: [
                        "Monitored and ensured the smooth operation of the Creative Development Department, including UI/UX, Visual Design, IT Development, and Documentation and Cinematography.",
                        "Made key decisions on requests, coordinated with all running divisions, and ensured the quality of all products met our standards.",
                      ],
                      color: "yellow",
                      badgeColor: "badge-yellow",
                      img: "/openhouse-1.svg",
                      compact: true,
                    },
                    {
                      title: "COMPFEST 16",
                      role: "PIC of Visual Design",
                      period: "Dec 2023 — Dec 2024",
                      desc: [
                        "Conceptualized and finalized innovative visual concepts, enhancing COMPFEST 16's brand presence and engagement across digital platforms.",
                        "Led a team of 10 designers, designing publication and non-publication visual materials for COMPFEST 16's visual identity.",
                      ],
                      color: "pink",
                      badgeColor: "badge-pink",
                      img: "/compfest16-1.svg",
                      compact: true,
                    },
                    {
                      title: "BETIS Fasilkom UI",
                      role: "UI/UX Designer",
                      period: "Jan — Mar 2024",
                      desc: [
                        "Created user-centric interface designs focused on usability, accessibility, and visual clarity.",
                        "Ensured a seamless and intuitive digital experience for BETIS participants through thoughtful interaction design.",
                      ],
                      color: "purple",
                      badgeColor: "badge-purple",
                      img: "/betis-1.svg",
                      compact: true,
                    },
                  ].map((item) => (
                    <ExpandCard key={item.title} {...item} />
                  ))}
                </div>
              </ExpandCardGroup>
            </div>

            {/* Awards */}
            <div className="space-y-6">
              {/* Scholarship — wide horizontal */}
              <Card color="pink">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[240px] overflow-hidden">
                    <Image
                      src="/bakti-bca.png"
                      alt="Bakti BCA Scholarship"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <span className="badge badge-pink w-fit">
                      Bakti BCA 2025
                    </span>
                    <h3
                      className="mt-4 text-2xl font-bold text-foreground"
                      style={{ fontFamily: "var(--font-figtree)" }}
                    >
                      Bakti BCA Scholarship Awardee
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-secondary">
                      Awarded a merit-based scholarship for academic excellence,
                      leadership potential, and active contribution to student
                      communities after a rigorous selection process involving
                      interviews and document screening.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Row 2 — top 3 wins */}
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    place: "1st",
                    comp: "UI/UX Design INFEST XI 2025",
                    organizer: "Universitas Syiah Kuala",
                    project: "TemanRawat",
                    color: "green",
                    desc: "Designed TemanRawat, a digital support ecosystem for caregivers, integrating community forums, expert consultation, AI-assisted journaling—empowering caregivers to reduce stress and navigate daily care challenges with confidence and psychological safety.",
                    img: "/award-infest.jpeg",
                  },
                  {
                    place: "1st",
                    comp: "UI/UX Design Competition TECHFEST 2025",
                    organizer: "BINUS University",
                    project: "Agrify",
                    color: "purple",
                    desc: "Designed Agrify, an AI and IoT powered mobile app tackling 50% post-harvest loss by enabling real-time produce grading, waste-to-value integration, and data-driven farming—earning national recognition for its impact on sustainable agriculture.",
                    img: IMG.projectAgrify,
                    slideshow: ["/award-techfest-1.jpeg", "/award-techfest-2.jpeg"],
                  },
                  {
                    place: "1st",
                    comp: "UI/UX Design National Competition SILOGY EXPO 2025",
                    organizer: "Universitas Singaperbangsa Karawang",
                    project: "BeSafe",
                    color: "yellow",
                    desc: "Designed BeSafe, a community-based mobile app for real-time public safety through panic buttons, witness reporting, and data-driven security maps—winning 1st place nationally.",
                    img: "/award-silogy.jpeg",
                  },
                ].map((a) => (
                  <ExpandAwardCard key={a.comp} {...a} />
                ))}
              </div>

              {/* Row 3 — remaining 3 */}
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    place: "2nd",
                    comp: "UI/UX Design Portal 7 International Competition 2025",
                    organizer: "Institut Pertanian Bogor",
                    project: "WattWallet",
                    color: "blue",
                    desc: "Designed WattWallet, a mobile app that helps households cut electricity waste through real-time IoT monitoring, AI-based bill prediction, and reward-driven behavioral nudges—enabling users to lower costs while supporting sustainable energy use.",
                    img: "/award-portal7-1.jpeg",
                    slideshow: ["/award-portal7-1.jpeg", "/award-portal7-2.jpeg"],
                  },
                  {
                    place: "1st Runner Up",
                    comp: "Google Developer Groups on Campus Universitas Indonesia Hackathon 2025",
                    organizer: "GDG on Campus Universitas Indonesia",
                    project: "BinaGuru",
                    color: "green",
                    desc: "Led the user interface design for BinaGuru, an AI-powered platform developed during a hackathon to support teachers in remote regions through low-connectivity, automated training, and collaborative learning—helping the team secure 1st Runner Up nationally.",
                    img: "/award-hackathon-1.png",
                    slideshow: ["/award-hackathon-1.png", "/award-hackathon-2.jpeg"],
                  },
                  {
                    place: "2nd",
                    comp: "UI/UX Mini Competition 2024 Google Developer Student Club Universitas Indonesia",
                    organizer: "GDSC Universitas Indonesia",
                    project: "Productivate",
                    color: "purple",
                    desc: "Designed Productivate, a task management app with calendar integration and productivity tracking that enhances daily planning and time efficiency—earning 2nd place nationally.",
                    img: IMG.productivate,
                    slideshow: ["/award-gdsc-ui.jpeg"],
                  },
                ].map((a) => (
                  <ExpandAwardCard key={a.comp} {...a} />
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* ━━━ CONTACT ━━━ */}
      <section id="contact" className="relative mx-auto max-w-5xl px-10 pt-28 pb-44">

        <div
          className="bg-white border-2 border-green-light overflow-hidden transition-all duration-300"
          style={{
            borderRadius: "36px",
            boxShadow: "8px 8px 0 var(--green-light)",
          }}
        >
          <div className="relative overflow-hidden p-10 text-center md:p-20">
            {/* Pastel blurs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-blue-light opacity-40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 top-[10%] h-[250px] w-[250px] rounded-full bg-pink-light opacity-35 blur-[100px]" />
            <div className="pointer-events-none absolute left-[30%] -bottom-20 h-[280px] w-[280px] rounded-full bg-green-light opacity-30 blur-[100px]" />
            <div className="pointer-events-none absolute right-[20%] top-[5%] h-[200px] w-[200px] rounded-full bg-purple-light opacity-30 blur-[90px]" />
            <div className="relative z-10">
              <SectionTag color="green">Get in Touch</SectionTag>
              <h2
                className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Let&apos;s create something{" "}
                <span className="text-blue">amazing</span> together.
              </h2>
              <p className="mx-auto mb-10 max-w-md text-lg text-text-secondary">
                Always open to new opportunities, collaborations, and design
                conversations.
              </p>
              <div className="mx-auto flex gap-6 max-w-4xl [&>a]:w-1/2">
                <a
                  href="mailto:aileenjeha@gmail.com"
                  className="flex items-center gap-4 text-left px-6 py-6 w-full bg-white rounded-2xl border-2 border-green-light transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--green-light)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_var(--green-light)]"
                  style={{ boxShadow: "5px 5px 0 var(--green-light)" }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-soft border-2 border-green-light"
                    style={{ boxShadow: "2px 2px 0 var(--green-light)" }}
                  >
                    <IconMail />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      aileenjeha@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/aileen-josephine-halim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-left px-6 py-6 w-full bg-white rounded-2xl border-2 border-purple-light transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--purple-light)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_var(--purple-light)]"
                  style={{ boxShadow: "5px 5px 0 var(--purple-light)" }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-soft border-2 border-purple-light"
                    style={{ boxShadow: "2px 2px 0 var(--purple-light)" }}
                  >
                    <IconLinkedin />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      LinkedIn
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      linkedin.com/in/aileen-josephine-halim/
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="relative bg-blue-soft">
        <div className="mx-auto max-w-5xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm font-semibold text-text-secondary"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            &copy; 2025 Aileen Josephine Halim
          </p>
          <div className="flex items-center gap-5 text-sm font-semibold text-text-secondary">
            {[
              { label: "About", href: "#about" },
              { label: "Works", href: "#projects" },
              { label: "Experiences", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-blue"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:aileenjeha@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue border-2 border-blue-light transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
              style={{ boxShadow: "2px 2px 0 var(--blue-light)" }}
              aria-label="Email"
            >
              <IconMail />
            </a>
            <a
              href="https://www.linkedin.com/in/aileen-josephine-halim/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue border-2 border-blue-light transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
              style={{ boxShadow: "2px 2px 0 var(--blue-light)" }}
              aria-label="LinkedIn"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
