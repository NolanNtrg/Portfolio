import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ProjectsContainer } from "./ProjectsContainer";

export type Project = {
  title: string;
  stack: string[];
  description: string;
  image: string;
  longDescription: string;
  keyPoints: string[];
  siteUrl?: string;
  sourceCodeUrl?: string;
  images?: string[];
};

export function Screen() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const [globalProgress, setGlobalProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const style = {
    comment: (txt: string) =>
      `<span class="italic text-gray-500">${txt}</span>`,
    ok: (txt: string) => `[ <span class="text-green-400">OK</span> ] ${txt}`,
    high: (txt: string) =>
      `<span class="bg-green-400/15 px-1 text-white rounded-sm">${txt}</span>`,
  };

  const rawScenario = t("terminal.scenario", {
    returnObjects: true,
  }) as string[];

  const scenario = [
    style.comment(rawScenario[0]),
    style.ok(rawScenario[1]),
    rawScenario[2],
    `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">${rawScenario[3]}</span>`,
    rawScenario[4],
    rawScenario[5],
    rawScenario[6],
    rawScenario[7],
    `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">${rawScenario[8]}</span>`,
    rawScenario[9],
    rawScenario[10],
    rawScenario[11],
    rawScenario[12],
    `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">${rawScenario[13]}</span>`,
    style.high(rawScenario[14]),
    rawScenario[15],
  ];

  const projectsData = t("terminal.projectsData", {
    returnObjects: true,
  }) as Record<string, Project>;

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setGlobalProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateTranslation = () => {
      if (projectsContainerRef.current && terminalBodyRef.current) {
        const projectsHeight = projectsContainerRef.current.offsetHeight;
        const terminalHeight = terminalBodyRef.current.offsetHeight;

        if (projectsHeight > terminalHeight) {
          setMaxTranslate(projectsHeight - terminalHeight);
        } else {
          setMaxTranslate(0);
        }
      }
    };

    calculateTranslation();

    const resizeObserver = new ResizeObserver(() => {
      calculateTranslation();
    });

    if (projectsContainerRef.current) {
      resizeObserver.observe(projectsContainerRef.current);
    }
    if (terminalBodyRef.current) {
      resizeObserver.observe(terminalBodyRef.current);
    }

    window.addEventListener("resize", calculateTranslation);
    return () => {
      window.removeEventListener("resize", calculateTranslation);
      resizeObserver.disconnect();
    };
  }, [projectsData]);

  useEffect(() => {
    const timer = setInterval(() => setMinutes((m) => m + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  const textPhaseEnd = 0.47;
  const projectsScrollStart = 0.5;

  const textProgress = Math.min(globalProgress / textPhaseEnd, 1);
  const visibleLines = Math.floor(textProgress * (scenario.length + 1));

  const isTextFinished = globalProgress > textPhaseEnd;

  let projectsScrollProgress = 0;
  if (globalProgress > projectsScrollStart - 0.03) {
    projectsScrollProgress =
      (globalProgress - projectsScrollStart) / (1 - projectsScrollStart);
  }
  projectsScrollProgress = Math.min(1, projectsScrollProgress);

  return (
    <main className="text-white font-mono w-full">
      <section
        ref={trackRef}
        className="h-[600vh] md:h-[400vh] relative w-full"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center p-2 md:p-4 overflow-hidden">
          <div
            id="terminal"
            className="w-[95vw] h-[90dvh] md:w-[90vw] md:h-[90vh] rounded-xl flex flex-col relative overflow-hidden bg-[#080808] border border-[#1f1f1f]"
          >
            <header className="h-10 border-b border-[#191919] flex items-center justify-between px-4 shrink-0 z-30 bg-[#0d0d0d] relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--green)/60 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_4px_rgba(255,95,86,0.5)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_4px_rgba(255,189,46,0.4)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_4px_rgba(39,201,63,0.5)]" />
                </div>
                <span className="text-[10px] text-(--gray) tracking-widest select-none">
                  user@portfolio — zsh
                </span>
              </div>

              {/* Méta droite */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-(--gray) tracking-widest">
                  UPTIME: {minutes} min
                </span>
              </div>
            </header>

            {/* ── Body ── */}
            <div
              ref={terminalBodyRef}
              className="flex-1 relative overflow-hidden pointer-events-auto"
            >
              {/* Phase texte */}
              <div
                className={`absolute inset-0 p-5 md:p-6 transition-opacity duration-500 z-10 ${
                  isTextFinished
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <div className="text-xs md:text-sm text-green-400 leading-relaxed">
                  {scenario.map((line, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-300 mb-1.5 ${
                        i < visibleLines
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>
              </div>

              {/* Phase projets */}
              <div
                ref={projectsContainerRef}
                className={`absolute left-0 w-full px-4 pb-10 transition-opacity duration-500 ${
                  isTextFinished ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "0",
                  transform: `translateY(-${projectsScrollProgress * maxTranslate}px)`,
                  willChange: "transform",
                }}
              >
                <div className="text-center mb-10 pt-8">
                  <div className="relative inline-block">
                    <h2 className="relative text-3xl md:text-4xl text-[#ededed] mb-2 font-semibold tracking-tight">
                      {t("terminal.projectsHeader.title")}
                    </h2>
                  </div>
                  <div className="w-80 h-px bg-green-400/60 mx-auto mt-3 mb-3" />
                  <p className="text-(--gray) font-mono text-xs md:text-sm tracking-wider">
                    {t("terminal.projectsHeader.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                  {Object.values(projectsData).map((project, index) => (
                    <ProjectsContainer
                      key={index}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Footer ── */}
            <footer className="h-8 border-t border-[#141414] flex items-center justify-between px-4 shrink-0 z-30 bg-[#0a0a0a]">
              {/* Statut gauche */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {/* point pulsant */}
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.7)] animate-pulse" />
                  <span className="text-[10px] text-(--gray) tracking-[0.12em]">
                    CONNECTED
                  </span>
                </div>
              </div>

              {/* Statut droite */}
              <div className="flex items-center gap-4">
                {/* Barre de progression */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-(--gray) tracking-widest">
                    BUFFER
                  </span>
                  <div className="w-14 h-px bg-(--gray) relative">
                    <div
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-green-400 to-green-300 transition-all duration-300"
                      style={{ width: `${Math.round(globalProgress * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-(--gray) tracking-widest w-7 text-right">
                    {Math.round(globalProgress * 100)}%
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
