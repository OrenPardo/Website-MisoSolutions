"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/logo-1.png", alt: "DoorDash", width: 102.9, height: 14.7 },
  { src: "/logos/logo-2.png", alt: "Discord", width: 74.9, height: 14 },
  { src: "/logos/logo-3.png", alt: "McKinsey & Company", width: 109.85, height: 36.91 },
  { src: "/logos/logo-4.png", alt: "HubSpot", width: 83.79, height: 25.935 },
  { src: "/logos/logo-5.png", alt: "SimpleDocs", width: 102, height: 24 },
  { src: "/logos/logo-6.png", alt: "Coframe", width: 106, height: 28 },
  { src: "/logos/logo-7.png", alt: "DoorDash", width: 147, height: 21 },
  { src: "/logos/logo-8.png", alt: "Discord", width: 107, height: 20 },
  { src: "/logos/logo-9.png", alt: "Daybreak", width: 112.93, height: 28.982 },
  { src: "/logos/logo-10.png", alt: "McKinsey & Company", width: 118.13, height: 39.692 },
  { src: "/logos/logo-11.png", alt: "Serif", width: 37.8, height: 16.8 },
  { src: "/logos/logo-12.png", alt: "HubSpot", width: 58.8, height: 18.2 },
  { src: "/logos/logo-13.png", alt: "Reforge", width: 72.8, height: 18.2 },
];

function LogoItem({ logo }) {
  return (
    <div className="flex items-center justify-center h-[64px] shrink-0">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={Math.ceil(logo.width)}
        height={Math.ceil(logo.height)}
        style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
        className="object-contain"
      />
    </div>
  );
}

export default function Hero() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pxPerSecond = 60;
    const halfWidth = track.scrollWidth / 2;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      offsetRef.current += (pxPerSecond * delta) / 1000;
      if (offsetRef.current >= halfWidth) {
        offsetRef.current -= halfWidth;
      }

      track.style.transform = `translateX(${-offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-[164px] pb-[100px]">
      <div className="flex flex-col items-center gap-[40px] mx-auto">
        {/* Heading */}
        <h1
          className="text-[46.6px] leading-[47.41px] tracking-[-1.933px] text-center text-forest font-normal max-w-[943.2px] px-[72.7px]"
          style={{ fontFamily: '"Akkurat", sans-serif' }}
        >
          The single platform to iterate,
          <br />
          evaluate, deploy, and monitor AI agents
        </h1>

        {/* Trusted by + Logo carousel */}
        <div className="flex flex-col items-center w-full overflow-clip">
          <p className="pb-[8px] text-[14px] leading-[14px] tracking-[0.28px] text-center text-forest/50 font-[family-name:var(--font-fragment-mono)]">
            Trusted by
          </p>

          {/* Logo carousel */}
          <div
            className="relative w-full max-w-[1363.33px] h-[64px] overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 5%, rgb(0,0,0) 95%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div
              ref={trackRef}
              className="flex gap-[64px] pr-[64px]"
              style={{ willChange: "transform" }}
            >
              {logos.map((logo, i) => (
                <LogoItem key={`a-${i}`} logo={logo} />
              ))}
              {logos.map((logo, i) => (
                <LogoItem key={`b-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
