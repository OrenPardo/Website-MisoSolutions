const links = [
  { label: "Editor", href: "https://www.adaline.ai/editor" },
  { label: "Datasets", href: "https://www.adaline.ai/datasets" },
];

export default function LearnMoreBar() {
  return (
    <aside className="bg-[#eff2e8] flex gap-4 items-center overflow-hidden pl-4 pr-2 rounded-lg h-full">
      <p
        className="text-[13.8px] font-normal leading-5 whitespace-nowrap"
        style={{ color: "#6b7860", fontFamily: "var(--font-spline-sans), sans-serif" }}
      >
        Learn more
      </p>
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.label} className="flex items-center justify-center h-[14px]">
            <a
              href={link.href}
              className="atlas-web-mono px-3 text-center text-forest whitespace-nowrap"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
