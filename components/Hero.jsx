import Image from "next/image";

const logos = [
  { src: "/logos/logo-1.png", alt: "DoorDash", width: 103, height: 15 },
  { src: "/logos/logo-2.png", alt: "Discord", width: 75, height: 14 },
  { src: "/logos/logo-3.png", alt: "McKinsey & Company", width: 110, height: 37 },
  { src: "/logos/logo-4.png", alt: "HubSpot", width: 84, height: 26 },
  { src: "/logos/logo-5.png", alt: "SimpleDocs", width: 102, height: 24 },
  { src: "/logos/logo-6.png", alt: "Coframe", width: 106, height: 28 },
  { src: "/logos/logo-7.png", alt: "DoorDash", width: 147, height: 21 },
  { src: "/logos/logo-8.png", alt: "Discord", width: 107, height: 20 },
  { src: "/logos/logo-9.png", alt: "Daybreak", width: 113, height: 29 },
  { src: "/logos/logo-10.png", alt: "McKinsey & Company", width: 118, height: 40 },
  { src: "/logos/logo-11.png", alt: "Serif", width: 38, height: 17 },
  { src: "/logos/logo-12.png", alt: "HubSpot", width: 59, height: 18 },
  { src: "/logos/logo-13.png", alt: "Reforge", width: 73, height: 18 },
];

function LogoItem({ logo }) {
  return (
    <div className="flex items-center justify-center h-[64px] px-[24px] shrink-0">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="object-contain"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-[164px] pb-[100px]">
      <div className="flex flex-col items-center gap-[40px] max-w-[1039px] mx-auto px-6">
        {/* Heading */}
        <h1
          className="text-[46.6px] leading-[47.41px] tracking-[-1.933px] text-center text-forest font-normal"
          style={{ fontFamily: '"Akkurat", sans-serif' }}
        >
          The single platform to iterate,
          <br />
          evaluate, deploy, and monitor AI agents
        </h1>

        {/* Trusted by + Logo carousel */}
        <div className="flex flex-col items-center w-full">
          <p className="pb-[8px] text-[18px] leading-[14px] tracking-[0.02em] text-center text-forest/50 font-[family-name:var(--font-fragment-mono)] [font-variant-caps:all-small-caps]">
            Trusted by
          </p>

          {/* Logo carousel */}
          <div className="relative w-full max-w-[1363px] h-[64px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-scroll">
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
