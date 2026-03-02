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

// Easing functions matching Adaline's source
function easeScale(t) {
  // cubic-bezier(0.2, 0, 0.3, 1)
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeBorderRadius(t) {
  // cubic-bezier(0.2, 0.4, 0.4, 0)
  return t * (2 - t);
}

function easeTranslateY(t) {
  // Adaline's custom quadratic for curtain lift
  return t < 0.5
    ? -2 * Math.pow(t, 2)
    : -2 * Math.pow(t - 0.5, 2) - 0.5;
}

function easeContent(t) {
  return 1 - Math.pow(1 - t, 3);
}

function mapRange(easedProgress, start, end) {
  return start + (end - start) * easedProgress;
}

export default function Hero() {
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);
  const currentProgress = useRef(0);

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

  // Scroll-driven shrink + curtain reveal animation
  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const content = contentRef.current;
    if (!outer || !sticky || !content) return;

    const isMobile = window.innerWidth < 768;
    const scaleEnd = isMobile ? 0.95 : 0.97;
    const radiusEnd = isMobile ? 16 : 32;
    const lerpFactor = 0.15;

    let animFrameId;

    function animate() {
      const rect = outer.getBoundingClientRect();
      const heroH = rect.height;
      const viewportH = window.innerHeight;

      // Image finishes revealing when hero bottom reaches viewport bottom
      const imageEnd = heroH - viewportH;
      // Shrink animation starts after 65% of hero has been scrolled through
      const animStart = heroH * 0.65;
      const animEnd = animStart + viewportH * 0.35;
      const scrollY = -rect.top;

      const targetProgress = Math.max(
        0,
        Math.min(1, (scrollY - animStart) / (animEnd - animStart))
      );

      // Scroll the background image up to reveal the hidden bottom 30%
      if (bgRef.current) {
        const bgProgress = Math.min(1, Math.max(0, scrollY / imageEnd));
        bgRef.current.style.transform = `translateY(${-bgProgress * 30 / 1.3}%)`;
      }

      // Lerp for smooth feel
      currentProgress.current +=
        (targetProgress - currentProgress.current) * lerpFactor;
      const p = currentProgress.current;

      // Scale: 1 → scaleEnd (applied to inner sticky)
      const scale = mapRange(easeScale(p), 1, scaleEnd);

      // Border radius: 0 → radiusEnd (applied to both)
      const radius = mapRange(easeBorderRadius(p), 0, radiusEnd);

      // TranslateY: 0 → -50vh (applied to outer wrapper, disabled on mobile)
      const rawTY = -easeTranslateY(p); // 0 → +0.5
      const translateYVh = isMobile ? 0 : rawTY * 50; // 0 → 25vh... wait

      // Apply to outer wrapper: translateY + borderRadius
      outer.style.transform = `translateY(-${translateYVh}vh)`;
      outer.style.borderRadius = `${radius}px`;

      // Apply to inner sticky: scale + borderRadius
      sticky.style.transform = `scale(${scale})`;
      sticky.style.borderRadius = `${radius}px`;

      // Content fades out gradually — fully invisible before header reaches "Trusted by"
      const h1 = content.querySelector("h1");
      const h1Bottom = h1 ? h1.getBoundingClientRect().bottom : content.getBoundingClientRect().bottom;
      const fadeRange = window.innerHeight * 0.3;
      const contentOpacity = Math.max(0, Math.min(1, (h1Bottom - 64) / fadeRange));
      content.style.opacity = String(contentOpacity);

      animFrameId = requestAnimationFrame(animate);
    }

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative z-10"
      style={{
        height: "2000px",
        marginBottom: "-50vh",
        willChange: "transform, border-radius",
        overflow: "clip",
      }}
    >
      {/* Inner sticky: receives scale + borderRadius (background only) */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-clip bg-pebble-50"
        style={{ transformOrigin: "center bottom", willChange: "transform, border-radius" }}
      >
        {/* Background image — 1.3× taller, anchored to top, bottom hidden */}
        <div ref={bgRef} className="absolute inset-x-0 top-0" style={{ height: "130%", willChange: "transform" }}>
          <Image
            src="/images/hero-landscape.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Content: h1 + carousel — scrolls naturally with the page */}
      <div
        ref={contentRef}
        className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center gap-6 md:gap-10 w-full text-center text-balance pt-[25vh] md:pt-[22vh]"
        style={{ willChange: "opacity" }}
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
    </div>
  );
}
