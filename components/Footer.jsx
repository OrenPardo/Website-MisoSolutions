import Link from "next/link";

const footerLinks = {
  Product: ["Evaluate", "Library", "Deploy", "Monitor", "Pricing"],
  Resources: ["Documentation", "API Reference", "Changelog", "Blog", "Status"],
  Company: ["About", "Careers", "Press", "Contact", "Legal"],
  Connect: ["Twitter", "GitHub", "Discord", "LinkedIn", "YouTube"],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              Adaline
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              The single platform for LLM operations.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-xs">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Adaline. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5">
            Made in Brooklyn
          </p>
        </div>
      </div>
    </footer>
  );
}
