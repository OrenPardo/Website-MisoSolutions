import WorkflowStepper from "./WorkflowStepper";
import LearnMoreBar from "./LearnMoreBar";
import SectionIntro from "./SectionIntro";
import FeatureList from "./FeatureList";
import ProjectPanel from "./ProjectPanel";

function PanelBody() {
  return (
    <div className="w-full px-12">
      <div className="relative max-w-[2048px] h-[800px] -mx-12 px-12 border-t border-dashed border-[#c5ccb6] overflow-hidden">
        {/* Left column */}
        <div className="flex flex-col justify-between w-[500px] opacity-[0.82] h-full pb-6">
          <div>
            <SectionIntro />
          </div>
          <div>
            <FeatureList />
          </div>
        </div>
        {/* Right column — absolutely positioned */}
        <div className="absolute top-0 bottom-0 right-12 flex items-center">
          <ProjectPanel />
        </div>
      </div>
    </div>
  );
}

export default function Placeholder() {
  return (
    <section className="bg-[#fbfdf6] flex flex-col items-start">
      {/* Anchor menu — sticks under the navbar */}
      <div
        className="sticky z-10 w-full px-12 pt-16 bg-[#fbfdf6]"
        style={{ top: "var(--nav-height, 64px)" }}
      >
        <div className="flex items-center justify-between max-w-[2048px]">
          <WorkflowStepper />
          <LearnMoreBar />
        </div>
      </div>
      {/* 4 body panels — anchor menu stays sticky across all */}
      <PanelBody />
      <PanelBody />
      <PanelBody />
      <PanelBody />
    </section>
  );
}
