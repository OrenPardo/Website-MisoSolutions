export default function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <SectionHeading />
      <SectionDescription />
    </div>
  );
}

export function SectionHeading() {
  return (
    <h2 className="font-heading text-[29.6px] font-normal tracking-[-0.6px] leading-[34.7px] text-forest">
      Prompt engineering that feels
      <br />
      like magic
    </h2>
  );
}

export function SectionDescription() {
  return (
    <p className="text-[17.4px] font-normal leading-[26px] text-pretty text-olive-muted">
      Test prompts across datasets, compare models side-by-side, and collaborate
      seamlessly—all with automatic versioning and prompt management that actually works.
    </p>
  );
}
