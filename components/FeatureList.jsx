const features = [
  {
    number: "1",
    title: "Prompt management across providers",
    description:
      "Centralize your prompts for all LLM providers in one intuitive workspace, eliminating fragmentation and ensuring consistency across your AI applications.",
  },
  {
    number: "2",
    title: "Multi-modal and dynamic variables",
    description: null,
  },
  {
    number: "3",
    title: "Automatic version history",
    description: null,
    titleColor: "#0a1d08",
  },
];

function FeatureItem({ number, title, description, titleColor = "#6b7860" }) {
  return (
    <li className="border-t border-pebble-200 flex items-start pt-[17px]">
      <div
        className="w-12 shrink-0 text-[18px] font-normal leading-[26px]"
        style={{ color: "#6b7860", fontFamily: "var(--font-spline-sans), sans-serif" }}
      >
        {number}
      </div>
      <div className="flex-1 flex flex-col">
        <h3
          className="text-[17.7px] font-normal leading-[26px] pb-4"
          style={{ color: titleColor, fontFamily: "var(--font-spline-sans), sans-serif" }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-[17.6px] font-normal leading-[26px] pb-4 text-pretty"
            style={{ color: "#6b7860", fontFamily: "var(--font-spline-sans), sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>
    </li>
  );
}

export default function FeatureList() {
  return (
    <ul className="flex flex-col">
      {features.map((feature) => (
        <FeatureItem key={feature.number} {...feature} />
      ))}
    </ul>
  );
}
