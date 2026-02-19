"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function Reveal({ children, direction = "up", delay = 0, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
    const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

    gsap.fromTo(
      element,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [direction, delay]);

  return <div ref={elementRef} className={className}>{children}</div>;
}

export function InvertCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const hoverIn = () => {
      gsap.to(card, {
        backgroundColor: "#111210",
        color: "#FFFFFF",
        duration: 0.4,
        ease: "power2.out",
      });
      // Находим все элементы с классом 'accent-icon' внутри карточки
      const icons = card.querySelectorAll(".accent-icon");
      gsap.to(icons, {
        color: "#0ECC7E",
        duration: 0.4,
      });
    };

    const hoverOut = () => {
      gsap.to(card, {
        backgroundColor: "#FFFFFF",
        color: "#111210",
        duration: 0.4,
        ease: "power2.out",
      });
      const icons = card.querySelectorAll(".accent-icon");
      gsap.to(icons, {
        color: "#111210",
        duration: 0.4,
      });
    };

    card.addEventListener("mouseenter", hoverIn);
    card.addEventListener("mouseleave", hoverOut);

    return () => {
      card.removeEventListener("mouseenter", hoverIn);
      card.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white border border-hub-graphite/10 p-8 transition-shadow hover:shadow-2xl cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

// Новые GSAP компоненты
export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return <div ref={elementRef} className={className}>{children}</div>;
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return <div ref={elementRef} className={className}>{children}</div>;
}

export function SlideIn({ children, direction = "left", delay = 0, className = "" }: { children: React.ReactNode; direction?: "left" | "right"; delay?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;

    gsap.fromTo(
      element,
      { opacity: 0, x },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [direction, delay]);

  return <div ref={elementRef} className={className}>{children}</div>;
}

export function Parallax({ children, speed = 0.5, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return <div ref={elementRef} className={className}>{children}</div>;
}

export function Counter({ end, duration = 2, className = "" }: { end: number; duration?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (element) {
          element.textContent = Math.floor(obj.value).toString();
        }
      },
    });
  }, [end, duration]);

  return <div ref={elementRef} className={className}>0</div>;
}

export function Stagger({ children, stagger = 0.1, className = "" }: { children: React.ReactNode; stagger?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const childrenElements = element.children;
    
    gsap.fromTo(
      childrenElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [stagger]);

  return <div ref={elementRef} className={className}>{children}</div>;
}
