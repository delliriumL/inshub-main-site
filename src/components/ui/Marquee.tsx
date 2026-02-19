"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export const Marquee = ({ items, direction = "left", speed = 50, className = "" }: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const items = Array.from(track.children) as HTMLElement[];
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
    
    // Клонируем элементы для бесшовности
    const clones = items.map(item => item.cloneNode(true) as HTMLElement);
    clones.forEach(clone => track.appendChild(clone));

    const animation = gsap.to(track, {
      x: direction === "left" ? -totalWidth : totalWidth,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
      onReverseComplete: () => {
        gsap.set(track, { x: 0 });
      }
    });

    if (direction === "right") {
      gsap.set(track, { x: -totalWidth });
      animation.play();
    }

    return () => {
      animation.kill();
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap py-4 border-y border-hub-graphite/5 bg-white ${className}`}>
      <div ref={trackRef} className="inline-flex items-center gap-12">
        {items.map((item, index) => {
          const isAccent = item.startsWith("*") && item.endsWith("*");
          const cleanItem = isAccent ? item.slice(1, -1) : item;
          
          return (
            <span
              key={index}
              className={`text-4xl md:text-6xl font-bold uppercase tracking-tighter ${
                isAccent ? "text-hub-emerald" : "text-hub-graphite/20"
              }`}
            >
              {cleanItem}
            </span>
          );
        })}
      </div>
    </div>
  );
};
