"use client";

import React, { useEffect, useRef } from "react";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export const AuroraBackground = ({
  children,
  showRadialGradient = true,
  className,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={`relative flex flex-col h-[100vh] items-center justify-center bg-white text-slate-950 transition-bg ${className}`}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`
            pointer-events-none
            absolute -inset-[10px] opacity-50
            [--white-gradient:radial-gradient(at_50%_0%,#fff_0%,transparent_50%)]
            [--dark-gradient:radial-gradient(at_50%_0%,#000_0%,transparent_50%)]
            [--aurora:repeating-linear-gradient(100deg,#0ECC7E_10%,#53C0D2_15%,#0ECC7E_20%,#53C0D2_25%,#0ECC7E_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[100px] invert-0
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed]
            after:mix-blend-difference
            `}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
