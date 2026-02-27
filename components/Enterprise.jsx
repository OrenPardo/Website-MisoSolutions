const capabilities = [
  {
    title: "SSO & RBAC",
    description: "Enterprise-grade authentication with role-based access controls.",
  },
  {
    title: "Audit Logs",
    description: "Complete audit trail for every action across your organization.",
  },
  {
    title: "Data Residency",
    description: "Choose where your data lives with regional deployment options.",
  },
  {
    title: "SLA Guarantee",
    description: "99.998% uptime SLA with dedicated support and incident response.",
  },
  {
    title: "Custom Models",
    description: "Bring your own fine-tuned models or use our optimized defaults.",
  },
  {
    title: "API & SDK",
    description: "Full API access with SDKs for Python, TypeScript, and Go.",
  },
];

export default function Enterprise() {
  return (
    <section className="py-24 px-6 bg-navy text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Adaline is enterprise-grade
            <br />
            scalable. Giving 2,000+
            <br />
            teams confidence.
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Built from the ground up for security, compliance, and scale.
            Trusted by the world&apos;s most demanding engineering organizations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-navy-light/50 border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-sm font-semibold text-white/90">
                {cap.title}
              </h4>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
