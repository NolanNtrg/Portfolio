import { useState } from "react";
import { ProjectsContent } from "./ProjectsContent";
import { createPortal } from "react-dom";
import type { Project } from "./Screen";

export function ProjectsContainer({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const { image, title, stack, description } = project;

  return (
    <>
      <button
        className="bg-(--background-containers) border border-gray-700 rounded-xl overflow-hidden cursor-pointer transition-all text-left duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
        onClick={() => setShowModal(true)}
      >
        <div className="h-40 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {stack.map((stack) => (
              <span
                key={stack}
                className="text-[10px] px-2 py-1 bg-gray-800 rounded text-gray-300 border border-gray-700"
              >
                {stack}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
        </div>
      </button>
      {showModal &&
        createPortal(
          <ProjectsContent
            closeModal={() => setShowModal(false)}
            project={project}
          />,
          document.body,
        )}
    </>
  );
}
