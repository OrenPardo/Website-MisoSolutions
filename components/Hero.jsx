"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/logo-1.svg", alt: "DoorDash", width: 102.9, height: 14.7 },
  { src: "/logos/logo-2.svg", alt: "Discord", width: 74.9, height: 14 },
  { src: "/logos/logo-3.svg", alt: "McKinsey & Company", width: 109.85, height: 36.91 },
  { src: "/logos/logo-4.svg", alt: "HubSpot", width: 83.79, height: 25.935 },
  { src: "/logos/logo-5.svg", alt: "SimpleDocs", width: 102, height: 24 },
  { src: "/logos/logo-6.svg", alt: "Coframe", width: 106, height: 28 },
  { src: "/logos/logo-7.svg", alt: "DoorDash", width: 147, height: 21 },
  { src: "/logos/logo-8.svg", alt: "Discord", width: 107, height: 20 },
  { src: "/logos/logo-9.svg", alt: "Daybreak", width: 112.93, height: 28.982 },
  { src: "/logos/logo-10.svg", alt: "McKinsey & Company", width: 118.13, height: 39.692 },
  { src: "/logos/logo-11.svg", alt: "Serif", width: 37.8, height: 16.8 },
  { src: "/logos/logo-12.svg", alt: "HubSpot", width: 58.8, height: 18.2 },
  { src: "/logos/logo-13.svg", alt: "Reforge", width: 72.8, height: 18.2 },
];

function LogoItem({ logo }) {
  return (
    <div className="flex items-center justify-center h-[64px] shrink-0">
      <img
        src={logo.src}
        alt={logo.alt}
        width={Math.ceil(logo.width)}
        height={Math.ceil(logo.height)}
      />
    </div>
  );
}

function LogoGroup({ prefix }) {
  return (
    <div className="flex gap-[64px] pr-[64px] shrink-0">
      {logos.map((logo, i) => (
        <LogoItem key={`${prefix}-${i}`} logo={logo} />
      ))}
    </div>
  );
}

const MASK_STYLE = {
  maskImage:
    "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 5%, rgb(0,0,0) 95%, rgba(0,0,0,0) 100%)",
};

const TRACK_STYLE = { willChange: "transform" };

const CONTENT_STYLE = {
  transform: "translate3d(0, calc(-25% + var(--scroll-y, 0px)), 0)",
  opacity: "var(--scroll-opacity, 1)",
  maskImage: "var(--scroll-mask, none)",
  WebkitMaskImage: "var(--scroll-mask, none)",
  willChange: "transform, opacity",
};

const LANDSCAPE_STYLE = {
  transform: "translate3d(0, 0, 0) scale(var(--landscape-scale, 1))",
  willChange: "transform",
};

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);

  // Carousel infinite scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pxPerSecond = 60;
    const firstGroup = track.children[0];
    const groupWidth = firstGroup.offsetWidth;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      offsetRef.current += (pxPerSecond * delta) / 1000;
      if (offsetRef.current >= groupWidth) {
        offsetRef.current -= groupWidth;
      }

      track.style.transform = `translateX(${-offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Scroll-driven parallax, content fade, mask, and pointer-events
  useEffect(() => {
    const section = sectionRef.current;
    const landscape = bgRef.current;
    const content = contentRef.current;
    if (!section || !landscape || !content) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / (vh * 0.8));

        // Landscape: scale up (zoom reveal)
        const scale = 1 + progress * 0.15;
        landscape.style.setProperty("--landscape-scale", String(scale));

        // Content: fade out + drift up
        const opacity = Math.max(0, 1 - progress * 2);
        content.style.setProperty("--scroll-y", `${-scrolled * 0.2}px`);
        content.style.setProperty("--scroll-opacity", String(opacity));

        // Content: mask dissolve from bottom
        if (progress > 0.05) {
          const maskPct = Math.min(100, ((progress - 0.05) / 0.5) * 100);
          content.style.setProperty(
            "--scroll-mask",
            `linear-gradient(to bottom, black ${100 - maskPct}%, transparent 100%)`
          );
        } else {
          content.style.setProperty("--scroll-mask", "none");
        }

        // Pointer events: disable when mostly faded
        content.style.pointerEvents = opacity > 0.1 ? "auto" : "none";

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-pebble-50">
      {/* Absolute background — parallax via scroll JS */}
      <div className="absolute inset-x-0 top-0 h-[120%]">
        <Image
          ref={bgRef}
          src="/images/hero-landscape.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
          style={LANDSCAPE_STYLE}
        />
      </div>

      {/* Sticky content — fades + drifts via scroll JS */}
      <div
        ref={contentRef}
        className="sticky top-[25vh] md:top-[22vh] z-20 flex flex-col items-center gap-6 md:gap-10 w-full text-center text-balance"
        style={CONTENT_STYLE}
      >
        <h1
          className="mx-[var(--grid-margin)] text-[53px] leading-[52px] md:text-[min(53px,min(calc(2.5vh+25px),calc(1.5vw+25px)))] md:leading-[calc(52/53)] tracking-[-0.04em] text-forest font-normal max-w-[32ch]"
          style={{ fontFamily: '"Akkurat", sans-serif' }}
        >
          <span>The single platform to iterate, evaluate, deploy, and monitor AI agents</span>
        </h1>

        {/* Trusted by + Logo carousel */}
        <div className="flex flex-col items-center w-full">
          <p className="mb-2 atlas-web-mono text-forest/50">
            Trusted by
          </p>

          {/* Logo carousel — 12-col grid */}
          <div className="max-w-full w-full">
            <div className="grid grid-cols-12 gap-[var(--grid-gutter)] w-full">
              <div
                className="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 flex items-center h-[64px] overflow-clip"
                style={MASK_STYLE}
              >
                <div ref={trackRef} className="flex" style={TRACK_STYLE}>
                  <LogoGroup prefix="a" />
                  <LogoGroup prefix="b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
