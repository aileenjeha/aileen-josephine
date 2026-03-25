"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ExpandAwardCardProps {
  color: string;
  place: string;
  comp: string;
  organizer: string;
  project: string;
  desc: string;
  img: string;
  slideshow?: string[];
}

const IconTrophy = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2m12 6h2a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 21h6m-3-4v4M6 3h12v8a6 6 0 11-12 0V3z" />
  </svg>
);

export default function ExpandAwardCard({
  color,
  place,
  comp,
  organizer,
  project,
  desc,
  img,
  slideshow,
}: ExpandAwardCardProps) {
  const [hovered, setHovered] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slideshow) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshow.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideshow]);

  return (
    <div
      className={`card card-${color} cursor-pointer transition-all duration-500 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.03) translate(-2px, -2px)" : "scale(1)",
      }}
    >
      {/* Expandable image */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: hovered ? "200px" : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="relative h-[200px] w-full">
          {slideshow ? (
            slideshow.map((src, i) => (
              <Image key={src} src={src} alt={`${project} ${i + 1}`} fill className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`} style={{ borderRadius: "var(--radius)" }} />
            ))
          ) : (
            <Image src={img} alt={project} fill className="object-cover" style={{ borderRadius: "var(--radius)" }} />
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="text-yellow"><IconTrophy /></span>
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-figtree)" }}>{place.includes("Runner") ? place : `${place} Place`}</span>
        </div>
        <p className="mt-1 text-sm font-bold text-text-secondary">{comp}</p>
        <p className="mt-0.5 text-xs text-text-muted">{organizer}</p>

        {/* Expandable description */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          <hr className="mt-2 border-t border-gray-200" />
          <div className="mt-2 max-h-[80px] overflow-y-auto">
            <p className="text-xs leading-relaxed text-text-muted">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
