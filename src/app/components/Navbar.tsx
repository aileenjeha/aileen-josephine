"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Works" },
  { id: "experience", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);

      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`bg-white/90 backdrop-blur-md fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border-2 border-blue-light  transition-all duration-500 ${
        visible
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0 pointer-events-none"
      }`}
      style={{ boxShadow: "4px 4px 0 var(--blue-light)" }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] leading-normal transition-all duration-300 ${
            active === item.id
              ? "bg-blue-soft text-blue-dark font-bold border-2 border-blue-light"
              : "text-foreground/60 hover:text-blue"
          }`}
          style={{
            fontFamily: "var(--font-figtree)",
            ...(active === item.id ? { boxShadow: "3px 3px 0 var(--blue-light)" } : {}),
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
