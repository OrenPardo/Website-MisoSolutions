const features = [
  {
    tag: "Evaluate",
    title: "10x",
    subtitle: "faster iteration cycles",
    description:
      "Run thousands of evaluations in parallel. Compare model outputs side-by-side with automated scoring and human review workflows.",
    accent: "bg-olive/10",
  },
  {
    tag: "Library",
    title: "Library",
    subtitle: "Centralized prompt management",
    description:
      "Version, organize, and share prompts across your team. Track performance metrics for every prompt variant in production.",
    accent: "bg-cream-dark",
  },
  {
    tag: "Deploy",
    title: "Deploy",
    subtitle: "One-click deployments",
    description:
      "Ship prompt changes without code deployments. A/B test in production with built-in traffic splitting and rollback capabilities.",
    accent: "bg-olive/5",
  },
  {
    tag: "Monitor",
    title: "Monitor",
    subtitle: "Real-time observability",
    description:
      "Track latency, cost, and quality metrics across all your LLM calls. Get alerts before issues impact your users.",
    accent: "bg-cream-dark",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.tag}
              className={`${feature.accent} rounded-2xl p-8 md:p-10 border border-olive/8`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-olive/60">
                {feature.tag}
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-olive">
                {feature.title}
              </h3>
              <p className="text-lg text-olive/70 font-medium">
                {feature.subtitle}
              </p>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Placeholder visual */}
              <div className="mt-8 h-40 bg-white/60 rounded-xl border border-olive/10 flex items-center justify-center">
                <span className="text-text-muted/30 text-sm">
                  Feature illustration
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
