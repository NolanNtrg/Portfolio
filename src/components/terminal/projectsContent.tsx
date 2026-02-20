import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../button";
import type { Project } from "./screen";

export function ProjectsContent({
  closeModal,
  project,
}: {
  closeModal: () => void;
  project: Project;
}) {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-4xl max-h-[80vh] bg-(--background-navbar) rounded-lg shadow-2xl border border-gray-700 text-white overflow-hidden">
        <div className="absolute top-4 right-4 z-20">
          <Button title="X" small={true} onClick={closeModal} full={true} />
        </div>
        <div className="overflow-y-auto custom-scrollbar p-6 md:p-10 max-h-[80vh]">
          <div className="mt-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--green) md:p-0 pr-10">
              {project.title}
            </h2>
            <p className="text-(--color-text) mb-8 leading-relaxed text-sm md:text-base">
              {project.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.images &&
                project.images.map((image, index) => (
                  <div
                    key={index}
                    className="h-72 rounded-md overflow-hidden w-fit"
                  >
                    <img
                      src={image}
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("projectsContent.keyPointsTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-(--color-text) marker:text-(--green)">
                {project.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: point,
                    }}
                  />
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("projectsContent.technologiesTitle")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-800">
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button title={t("projectsContent.visitSite")} />
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button title={t("projectsContent.sourceCode")} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
