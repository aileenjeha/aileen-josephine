"use client";

import { useState } from "react";
import Image from "next/image";

interface WorkCardProps {
  color: string;
  badge: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  link?: string;
}

const IconArrowUpRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function WorkCard({ color, badge, tag, title, desc, img, link }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card card-${color} cursor-pointer transition-all duration-500 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.03) translate(-2px, -2px)" : "scale(1)",
      }}
    >
      {/* Expandable image on hover */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: hovered ? "180px" : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="relative h-[180px] w-full">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            style={{ borderRadius: "var(--radius)" }}
          />
        </div>
      </div>

      <div className="p-6">
        <span className={`badge ${badge}`}>{tag}</span>
        <h3
          className="mt-3 text-lg font-bold text-foreground"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-4 !rounded-xl !px-4 !py-2 !text-xs flex items-center gap-1 w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            See Details <IconArrowUpRight />
          </a>
        )}
      </div>
    </div>
  );
}
