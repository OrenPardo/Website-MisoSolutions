const logos = [
  "Acme Corp",
  "TechFlow",
  "DataVault",
  "CloudSync",
  "NeuralNet",
  "ScaleAI",
];

export default function Logos() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-olive mb-12">
          Powering global brands
          <br />
          and fast scaling startups
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-text-muted/40 text-lg font-semibold tracking-wide"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
