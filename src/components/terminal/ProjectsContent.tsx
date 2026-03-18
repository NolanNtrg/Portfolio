import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "./Screen.tsx";

export function ProjectsContent({
  closeModal,
  project,
  index,
}: {
  closeModal: () => void;
  project: Project;
  index?: number;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("modalState", { detail: true }));

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.dispatchEvent(new CustomEvent("modalState", { detail: false }));
      window.removeEventListener("keydown", onKey);
    };
  }, [closeModal]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    window.dispatchEvent(
      new CustomEvent("modalScroll", { detail: target.scrollTop })
    );
  };

  const indexLabel = String(index != null ? index + 1 : 1).padStart(2, "0");

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/82 backdrop-blur-sm"
      />

      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-5xl max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(74,222,128,0.05),0_40px_80px_rgba(0,0,0,0.85)] font-(family-name:--font-ibm)">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/30 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center justify-between px-4 h-10 border-b border-[#161616] bg-[#0d0d0d] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_4px_rgba(255,95,86,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_4px_rgba(255,189,46,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_4px_rgba(39,201,63,0.5)]" />
            </div>
            <span className="text-[10px] text-(--gray) tracking-[.12em]">
              portfolio/projects/{indexLabel}
            </span>
          </div>
          <button
            onClick={closeModal}
            className="w-6 h-6 border border-(--gray) rounded text-(--gray) text-[20px] flex items-center justify-center hover:border-[#3a3a3a] hover:text-[#666] transition-colors duration-200"
          >
            X
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-8 py-7" onScroll={handleScroll}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[.14em] text-green-400">
              PROJECT {indexLabel}
            </span>
            <div className="flex-1 h-px bg-green-400" />
          </div>

          <h2 className="text-[24px] font-semibold text-[#ebebeb] tracking-tight mb-3">
            {project.title}
          </h2>

          <p className="md:text-[16px] text-[14px] text-(--gray) leading-[1.8] mb-7 font-semibold">
            {project.longDescription}
          </p>

          {project.images && project.images.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-7">
              {project.images.map((image: string, i: number) => (
                <div
                  key={i}
                  className="rounded-md overflow-hidden border border-[#181818] shrink-0"
                  style={{ maxHeight: "260px", maxWidth: "100%" }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-full w-auto max-h-65 max-w-full object-contain hover:scale-120 transition-all duration-300 block"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[.14em] text-green-400">
              {t("projectsContent.keyPointsTitle").toUpperCase()}
            </span>
            <div className="flex-1 h-px bg-green-400" />
          </div>

          <ul className="mb-6 space-y-0">
            {project.keyPoints.map((point: string, i: number) => (
              <li
                key={i}
                className="flex items-baseline gap-2.5 md:text-[16px] text-[14px] text-(--gray) leading-[1.75] py-2 border-b border-[#111] last:border-b-0"
              >
                <span className="text-green-400/45 text-[13px] shrink-0">
                  ›
                </span>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[.14em] text-green-400">
              {t("projectsContent.technologiesTitle").toUpperCase()}
            </span>
            <div className="flex-1 h-px bg-green-400" />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="md:text-[16px] text-[14px] px-2 py-0.5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-sm text-(--gray) tracking-[.06em]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 pt-5 border-t border-[#141414]">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[14px] tracking-widest px-4 py-2 rounded bg-green-400/8 border border-green-400/20 text-green-400/70 hover:bg-green-400/13 hover:border-green-400/35 transition-all duration-200"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 9L9 1M9 1H5M9 1V5" />
                </svg>
                {t("projectsContent.visitSite").toUpperCase()}
              </a>
            )}
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[14px] tracking-widest px-4 py-2 rounded bg-transparent border border-[#202020] text-(--gray) hover:border-[#2e2e2e] transition-all duration-200"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 1H1v8h8V7M6 1h3v3M4 6l5-5" />
                </svg>
                {t("projectsContent.sourceCode").toUpperCase()}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
