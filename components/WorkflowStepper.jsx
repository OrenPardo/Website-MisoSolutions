const MUTED = "#C5CCB6";
const ACTIVE = "#0A1D08";

function IterateIcon({ color }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="-8 -8 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <g transform="rotate(-54.29, 24, 24)">
        {/* Heptagon */}
        <path
          d="M23.941 0.555L42.707 9.592L47.341 29.898L34.355 46.182H13.527L0.541 29.899L5.175 9.592L23.941 0.555Z"
          stroke={color}
          strokeWidth="1"
          transform="translate(0, 0.66)"
        />
      </g>
      <g transform="rotate(-103.48, 24, 24)">
        {/* Nonagon */}
        <path
          d="M24.158 0.532L39.584 6.147L47.792 20.363L44.942 36.53L32.367 47.083H15.948L3.374 36.53L0.524 20.363L8.732 6.147L24.158 0.532Z"
          stroke={color}
          strokeWidth="1"
          transform="translate(0, 0.21)"
        />
      </g>
    </svg>
  );
}

function EvaluateIcon({ color }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <circle
        cx="24.5"
        cy="24.5"
        r="24"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="5 3"
        transform="rotate(27.97, 24.5, 24.5)"
      />
    </svg>
  );
}

function DeployIcon({ color }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <g transform="rotate(28.42, 24.5, 24.5)">
        <path
          d="M23.303 0.523C15.347 0.913 8.41 5.177 4.338 11.469L12.03 17.293L3.137 13.543C1.398 16.931 0.494 20.685 0.5 24.493C0.5 28.438 1.452 32.16 3.138 35.443L12.03 31.693L4.339 37.518C8.411 43.809 15.349 48.073 23.303 48.464L24.5 38.893L25.698 48.463C33.652 48.071 40.588 43.807 44.661 37.516L36.971 31.693L45.861 35.442C47.6 32.055 48.505 28.301 48.5 24.493C48.5 20.549 47.549 16.827 45.863 13.545L36.972 17.293L44.662 11.469C40.592 5.178 33.655 0.913 25.7 0.522L24.502 10.094L23.303 0.523Z"
          stroke={color}
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

function MonitorIcon({ color }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="-4 -4 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      {/* Solid circle */}
      <circle
        cx="20.497"
        cy="20.497"
        r="20"
        stroke={color}
        strokeWidth="1"
      />
      {/* Dashed circle */}
      <circle
        cx="20.497"
        cy="20.497"
        r="24"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="5 3"
        transform="rotate(113.12, 20.497, 20.497)"
      />
    </svg>
  );
}

const STEP_ICONS = {
  iterate: IterateIcon,
  evaluate: EvaluateIcon,
  deploy: DeployIcon,
  monitor: MonitorIcon,
};

function StepNumber({ number, color }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center text-[13.2px] font-normal"
      style={{ color }}
    >
      {number}
    </div>
  );
}

function ProgressBar({ total }) {
  return (
    <div className="flex gap-1 h-0.5 w-full pl-4">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-px min-w-px" style={{ backgroundColor: MUTED }} />
      ))}
    </div>
  );
}

function StepCounter({ current, total }) {
  return (
    <div className="absolute right-0 top-0 flex items-center">
      <span className="text-[13.2px] text-right text-olive-muted">
        {current} / {total}
      </span>
    </div>
  );
}

const steps = [
  {
    number: "01",
    label: "Iterate",
    icon: "iterate",
    active: false,
    progress: { current: 1, total: 3 },
    labelWidth: 120,
  },
  {
    number: "02",
    label: "Evaluate",
    icon: "evaluate",
    active: false,
    progress: null,
    labelWidth: 72,
  },
  {
    number: "03",
    label: "Deploy",
    icon: "deploy",
    active: false,
    progress: null,
    labelWidth: 61,
  },
  {
    number: "04",
    label: "Monitor",
    icon: "monitor",
    active: true,
    progress: null,
    labelWidth: 67,
  },
];

export default function WorkflowStepper() {
  return (
    <div className="flex gap-2 items-center">
      {steps.map((step) => {
        const color = step.active ? ACTIVE : MUTED;
        const IconComponent = STEP_ICONS[step.icon];

        return (
          <div
            key={step.number}
            className="flex items-center rounded-full border border-transparent shrink-0"
            style={{ padding: "9px 25px 9px 9px" }}
          >
            <div className="relative w-12 h-12 shrink-0">
              <IconComponent color={color} />
              <StepNumber number={step.number} color={color} />
            </div>
            <div
              className="flex flex-col items-start overflow-hidden shrink-0"
              style={{
                width: step.labelWidth,
                height: step.progress ? "auto" : 20,
              }}
            >
              <div className="relative w-full pl-4">
                <span
                  className="text-sm font-normal leading-5 whitespace-nowrap"
                  style={{ color }}
                >
                  {step.label}
                </span>
                {step.progress && (
                  <StepCounter
                    current={step.progress.current}
                    total={step.progress.total}
                  />
                )}
              </div>
              {step.progress && (
                <div className="pt-2 w-full">
                  <ProgressBar total={step.progress.total} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
