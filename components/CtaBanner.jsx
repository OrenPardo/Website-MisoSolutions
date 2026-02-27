export default function CtaBanner() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-navy to-[#111827]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          Start your journey
          <br />
          with Adaline
        </h2>
        <p className="mt-6 text-white/50 text-lg leading-relaxed">
          Join hundreds of teams shipping better LLM products, faster.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="bg-white text-navy px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Get Started Free
          </a>
          <a
            href="#"
            className="border border-white/20 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
