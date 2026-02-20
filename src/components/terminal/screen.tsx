import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ProjectsContainer } from "./projectsContainer";

export type Project = {
  title: string;
  stack: string[];
  description: string;
  image: string;
  longDescription: string;
  keyPoints: string[];
  siteUrl: string;
  sourceCodeUrl: string;
  images: string[];
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
    rawScenario[16],
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
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, [projectsData]);

  useEffect(() => {
    const timer = setInterval(() => setMinutes((m) => m + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  const textPhaseEnd = 0.25;
  const projectsScrollStart = 0.3;

  const textProgress = Math.min(globalProgress / textPhaseEnd, 1);
  const visibleLines = Math.floor(textProgress * (scenario.length + 1));

  const isTextFinished = globalProgress > textPhaseEnd;

  let projectsScrollProgress = 0;
  if (globalProgress > projectsScrollStart) {
    projectsScrollProgress =
      (globalProgress - projectsScrollStart) / (1 - projectsScrollStart);
  }
  projectsScrollProgress = Math.min(1, projectsScrollProgress);

  return (
    <main className="text-white font-mono w-full">
      <section ref={trackRef} className="h-[250vh] relative w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center p-2 md:p-4 overflow-hidden">
          <div className="w-[95vw] h-[90dvh] md:w-[90vw] md:h-[90vh] border border-[#333] bg-[#0c0c0c] rounded-lg flex flex-col relative overflow-hidden pointer-events-none">
            <header className="h-10 border-b border-[#333] flex justify-between items-center px-4 shrink-0 z-30 text-xs text-gray-500 bg-[#0c0c0c]">
              <span>{t("terminal.header.tty")}</span>
              <span>{t("terminal.header.uptime", { minutes })}</span>
            </header>

            <div
              ref={terminalBodyRef}
              className="flex-1 relative overflow-hidden pointer-events-auto"
            >
              <div
                className={`absolute inset-0 p-4 transition-opacity duration-500 z-10 ${
                  isTextFinished
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <div className="text-xs md:text-base text-green-400">
                  {scenario.map((line, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-200 mb-2 ${
                        i < visibleLines
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>
              </div>

              <div
                ref={projectsContainerRef}
                className={`absolute left-0 w-full px-4 md:px-8 pb-10 transition-opacity duration-500 ${
                  isTextFinished ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "0",
                  transform: `translateY(-${
                    projectsScrollProgress * maxTranslate
                  }px)`,
                  willChange: "transform",
                }}
              >
                <div className="text-center mb-10 pt-6">
                  <h2 className="text-4xl md:text-3xl lg:text-4xl text-(rgb(237, 237, 237)) mb-2 font-bold">
                    {t("terminal.projectsHeader.title")}
                  </h2>
                  <p className="text-gray-400 font-mono text-xs md:text-sm">
                    {t("terminal.projectsHeader.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {Object.values(projectsData).map((project, index) => (
                    <ProjectsContainer key={index} project={project} />
                  ))}
                </div>
              </div>
            </div>
            <footer className="h-8 border-t border-[#333] flex justify-between items-center px-4 shrink-0 z-30 text-xs text-gray-500 bg-[#111]">
              <span>
                {t("terminal.footer.status")}
                <span className="text-green-400">
                  {t("terminal.footer.connected")}
                </span>
              </span>
              <span>
                {t("terminal.footer.buffer", {
                  progress: Math.round(globalProgress * 100),
                })}
              </span>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
