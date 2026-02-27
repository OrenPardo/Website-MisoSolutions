const stats = [
  { value: "200M+", label: "API requests processed monthly" },
  { value: "5B+", label: "Tokens evaluated across models" },
  { value: "300+", label: "Enterprise teams onboarded" },
  { value: "99.998%", label: "Platform uptime guaranteed" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-olive text-center leading-tight">
          Precisely engineered for
          <br />
          unparalleled reliability
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-olive">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
