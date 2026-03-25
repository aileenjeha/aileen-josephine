"use client";

import { useEffect, useState, createContext, useContext } from "react";
import Image from "next/image";

/* ─── Context (kept for potential future use) ─── */
const ActiveCardContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>({ activeId: null, setActiveId: () => {} });

export function ExpandCardGroup({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <ActiveCardContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveCardContext.Provider>
  );
}

interface ExpandCardProps {
  color: string;
  badgeColor: string;
  period: string;
  title: string;
  role: string;
  desc: string | string[];
  img: string;
  slideshow?: string[];
  compact?: boolean;
}

function Slideshow({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-full w-full min-h-[180px]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ borderRadius: "var(--radius)" }}
        />
      ))}
    </div>
  );
}

function FlipCard({
  color,
  badgeColor,
  period,
  title,
  role,
  desc,
  img,
}: Omit<ExpandCardProps, "compact" | "slideshow">) {
  const [flipped, setFlipped] = useState(false);
  const bullets = Array.isArray(desc) ? desc : [desc];

  return (
    <div
      className={`card card-${color} cursor-pointer min-h-[280px]`}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ─── Front ─── */}
        <div
          className="absolute inset-0 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative flex-1 min-h-[140px] overflow-hidden">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover"
              style={{ borderRadius: "var(--radius)" }}
            />
          </div>
          <div className="px-5 py-3">
            <span className={`badge ${badgeColor} !text-[10px]`}>
              {period}
            </span>
            <h3
              className="mt-2 text-sm font-bold text-foreground"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              {title}
            </h3>
            <p className="mt-0.5 text-xs font-semibold text-text-secondary">
              {role}
            </p>
            <p className="mt-1 text-[10px] text-text-muted italic">Click to flip</p>
          </div>
        </div>

        {/* ─── Back ─── */}
        <div
          className="absolute inset-0 overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-5">
            <h3
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              {title}
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-text-muted">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: `var(--${color})` }} />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[10px] text-text-muted italic">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpandCard({
  color,
  badgeColor,
  period,
  title,
  role,
  desc,
  img,
  slideshow,
  compact = false,
}: ExpandCardProps) {
  const bullets = Array.isArray(desc) ? desc : [desc];
  const [hovered, setHovered] = useState(false);

  if (compact) {
    return (
      <FlipCard
        color={color}
        badgeColor={badgeColor}
        period={period}
        title={title}
        role={role}
        desc={desc}
        img={img}
      />
    );
  }

  return (
    <div
      className={`card card-${color} cursor-pointer transition-all duration-500 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.03) translate(-2px, -2px)" : "scale(1)",
      }}
    >
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: hovered ? "180px" : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        {slideshow ? (
          <Slideshow images={slideshow} alt={title} />
        ) : (
          <div className="relative h-[180px] w-full">
            <Image src={img} alt={title} fill className="object-cover" style={{ borderRadius: "var(--radius)" }} />
          </div>
        )}
      </div>

      <div className="p-7">
        <span className={`badge ${badgeColor}`}>
          {period}
        </span>
        <h3
          className="mt-4 text-2xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-base font-semibold text-text-secondary">
          {role}
        </p>

        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-text-muted">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: `var(--${color})` }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
