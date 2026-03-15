import { useState } from "react";
import { ProjectsContent } from "./ProjectsContent.tsx";
import { createPortal } from "react-dom";
import type { Project } from "./Screen.tsx";

export function ProjectsContainer({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const [showModal, setShowModal] = useState(false);
  const { image, title, stack, description } = project;

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="
          group relative bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl
          overflow-hidden cursor-pointer text-left transition-all duration-300
          hover:border-(--green)/35
        "
      >
        <div className="h-36 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 left-3 z-10">
            <span className="text-[10px] tracking-[.12em] text-green-400 bg-green-400/20 border border-green-400/15 px-2 py-0.5 rounded-sm font-(family-name:--font-ibm)">
              {String(index != null ? index + 1 : 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="px-4 pt-3.5 pb-4">
          <h3 className="text-[#e5e5e5] text-xl font-semibold font-(family-name:--font-ibm) tracking-wide">
            {title}
          </h3>
          <div className="w-full h-px mb-2.5 bg-linear-to-r from-(--green)/800 to-transparent" />
          <div className="flex flex-wrap gap-1.5 mb-3">
            {stack.map((tech: string) => (
              <span
                key={tech}
                className="text-[10px] px-1.5 py-0.5 bg-[#141414] border border-[#252525] rounded-sm text-(--gray) tracking-[.06em] font-(family-name:--font-ibm) group-hover:border-[#2a2a2a] group-hover:text-[#555] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-(--gray) text-[14px] leading-relaxed font-(family-name:--font-ibm)">
            {description}
          </p>
        </div>
      </button>

      {showModal &&
        createPortal(
          <ProjectsContent
            closeModal={() => setShowModal(false)}
            project={project}
            index={index}
          />,
          document.body,
        )}
    </>
  );
}
