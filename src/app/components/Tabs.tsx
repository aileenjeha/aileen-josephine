"use client";

import { useState } from "react";

interface TabsProps {
  tabs: string[];
  children: React.ReactNode[];
  color?: "purple" | "green" | "pink" | "blue" | "yellow";
}

const colorMap = {
  purple: { active: "bg-purple-soft text-purple-dark border-purple-light", shadow: "var(--purple-light)", border: "var(--purple-light)" },
  green: { active: "bg-green-soft text-green-dark border-green-light", shadow: "var(--green-light)", border: "var(--green-light)" },
  pink: { active: "bg-pink-soft text-pink-dark border-pink-light", shadow: "var(--pink-light)", border: "var(--pink-light)" },
  blue: { active: "bg-blue-soft text-blue-dark border-blue-light", shadow: "var(--blue-light)", border: "var(--blue-light)" },
  yellow: { active: "bg-yellow-soft text-yellow-dark border-yellow-light", shadow: "var(--yellow-light)", border: "var(--yellow-light)" },
};

export default function Tabs({ tabs, children, color = "purple" }: TabsProps) {
  const [active, setActive] = useState(0);
  const c = colorMap[color];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
              active === i
                ? `${c.active}`
                : "border-gray-200 bg-white text-text-muted hover:text-foreground"
            }`}
            style={active === i ? { boxShadow: `3px 3px 0 ${c.shadow}`, fontFamily: "var(--font-figtree)" } : { fontFamily: "var(--font-figtree)" }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{children[active]}</div>
    </div>
  );
}
