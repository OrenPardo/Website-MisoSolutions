const files = [
  {
    name: "Customer Service",
    icon: "/icons/file-icon-prompt.png",
    opacity: 0.81,
    indent: 0,
  },
  {
    name: "AI representative",
    icon: "/icons/file-icon-document.png",
    opacity: 0.68,
    indent: 17,
  },
  {
    name: "Test Cases",
    icon: "/icons/file-icon-document.png",
    opacity: 0.46,
    indent: 16,
  },
  {
    name: "May Production Logs",
    icon: "/icons/file-icon-dataset.png",
    opacity: 0.15,
    indent: 13,
  },
];

function FileRow({ name, icon, opacity, indent }) {
  return (
    <div
      className="flex items-center gap-1 h-[24px]"
      style={{ opacity, marginLeft: indent }}
    >
      <img src={icon} alt="" className="w-5 h-5 shrink-0" />
      <span
        className="text-[13.9px] font-normal leading-5 whitespace-nowrap text-forest"
        style={{ fontFamily: "var(--font-spline-sans), sans-serif" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function ProjectPanel() {
  return (
    <div className="relative px-4 pt-[15px] pb-4 min-w-[216px]">
      {/* Dashed grid lines */}
      <div className="absolute inset-x-4 top-0 border-t border-dashed border-[#c5ccb6] opacity-20" />
      <div className="absolute inset-x-4 bottom-0 border-t border-dashed border-[#c5ccb6] opacity-20" />
      <div className="absolute left-4 inset-y-0 border-l border-dashed border-[#c5ccb6] opacity-20" />
      <div className="absolute right-4 inset-y-0 border-l border-dashed border-[#c5ccb6] opacity-20" />

      {/* Shared label */}
      <p
        className="text-[11.8px] font-normal leading-4 text-forest opacity-70 mb-1"
        style={{ fontFamily: "var(--font-spline-sans), sans-serif" }}
      >
        Shared
      </p>

      {/* File tree */}
      <div className="flex flex-col gap-1">
        {files.map((file) => (
          <FileRow key={file.name} {...file} />
        ))}
      </div>
    </div>
  );
}
