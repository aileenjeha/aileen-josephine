"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DEFAULT_PHOTOS = ["/foto-1.png", "/foto-2.png", "/foto-3.png", "/foto-4.png"];

interface PhotoSlideshowProps {
  photos?: string[];
  interval?: number;
  alt?: string;
  className?: string;
  minHeight?: string;
  objectFit?: "cover" | "contain";
}

export default function PhotoSlideshow({
  photos = DEFAULT_PHOTOS,
  interval = 3000,
  alt = "Aileen photo",
  className = "",
  minHeight = "320px",
  objectFit = "cover",
}: PhotoSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [photos.length, interval]);

  return (
    <div className={`relative h-full ${className}`} style={{ minHeight }}>
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          className={`${objectFit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
