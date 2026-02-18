import { useState, useEffect, useRef } from "react";

// --- CONFIG & DATA ---
const style = {
  comment: (txt: string) => `<span class="italic text-gray-500">${txt}</span>`,
  ok: (txt: string) => `[ <span class="text-green-400">OK</span> ] ${txt}`,
  high: (txt: string) =>
    `<span class="bg-green-400/15 px-1 text-white rounded-sm">${txt}</span>`,
};

const scenario = [
  style.comment("# Booting system..."),
  style.ok("Connecté."),
  "<br>",
  `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">whoami</span>`,
  "> Nolan Notargiacomo",
  "> Étudiant en BUT Informatique à l'IUT2 de Grenoble",
  "> Parcours Développement d'applications Communicantes et Sécurisées",
  "<br>",
  `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">cat skills.txt</span>`,
  "Frontend: React, Vue.js, Flutter",
  "Backend: Node.js, Python, Java",
  "DevOps: Docker, Git",
  "<br>",
  `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">./start_ui.sh</span>`,
  style.high("Chargement de l'interface..."),
  "████████████████ 100%",
  "<br>",
  `<span class="text-white mr-2">user@portfolio:~$</span> <span class="text-yellow-300 font-bold">ls -la projects/</span>`,
];

const projectsData = {
  "1": {
    title: "DataFlow Analytics",
    stack: ["React", "Node.js"],
    description:
      "Plateforme d'analyse de données temps réel. Dashboard interactif et reporting automatisé.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  "2": {
    title: "SecureChat Pro",
    stack: ["Flutter", "Firebase"],
    description:
      "Messagerie chiffrée end-to-end. Appels vidéo HD et partage sécurisé.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
  },
  "3": {
    title: "CloudDeploy Manager",
    stack: ["Docker", "Kubernetes"],
    description:
      "Outil de déploiement automatisé. CI/CD pipeline et monitoring intégré.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
  },
  "4": {
    title: "AI TaskBot",
    stack: ["Python", "TensorFlow"],
    description:
      "Assistant intelligent pour la gestion de tâches. Machine learning et NLP.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  "5": {
    title: "E-Commerce Platform",
    stack: ["Vue.js", "PostgreSQL"],
    description:
      "Plateforme complète de vente en ligne. Paiement sécurisé et gestion stock.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
};

export function Screen() {
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Zones de progression réajustées :
  // 0-35% : lignes du terminal (plus lent pour avoir le temps de lire)
  // 35-100% : scroll rapide des projets (plus réactif à la molette)

  const terminalProgress = Math.min(progress / 0.45, 1);
  const projectsProgress = Math.max(0, (progress - 0.5) / 0.5);

  const visibleLines = Math.floor(terminalProgress * (scenario.length + 1));
  const showProjects = progress > 0.45;

  // Distance de scroll réduite : juste ce qu'il faut pour voir le dernier projet
  // La grille fait ~120vh de haut, on voit ~60vh, donc scroll de ~62vh suffit
  const maxScrollDistance = 50; // en vh
  const scrollOffset = projectsProgress * maxScrollDistance;

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = rect.height - viewportHeight;
      const scrolled = -rect.top;

      const newProgress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setMinutes((m) => m + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main ref={trackRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-dvh w-full flex items-center justify-center overflow-hidden">
        <div className="w-[95vw] h-[90dvh] bg-[#1a1a1a] shadow-2xs flex flex-col border border-[#333] rounded-lg p-2 transition-all duration-300 md:w-[90vw] md:h-[90vh] md:p-3 relative">
          <div className="grow rounded-sm relative font-mono text-green-400 pt-2 leading-relaxed shadow-inner flex flex-col bg-[#0c0c0c] overflow-hidden">
            {/* Header */}
            <header className="border-b border-gray-700 pb-2.5 mb-4 text-gray-500 text-xs shrink-0 flex justify-between z-20 relative bg-[#0c0c0c]">
              <span className="ml-3">TTY1: /dev/pts/0</span>
              <span className="mr-3">UPTIME: {minutes} min</span>
            </header>

            {/* Content Container - NO OVERFLOW, just absolute positioned content */}
            <div className="grow relative px-2 md:px-4">
              {/* Terminal Lines */}
              <div
                className={`transition-opacity duration-700 ${
                  showProjects ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="text-sm md:text-base text-left">
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

              {/* Projects Section - Smooth Scrolling Display */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 px-2 flex flex-col ${
                  showProjects ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Projects Header - Fixed at top */}
                <div className="mb-3 text-center shrink-0">
                  <h2 className="text-4xl md:text-3xl lg:text-4xl text-white mb-2 font-bold">
                    MES PROJETS
                  </h2>
                  <p className="text-gray-400 font-mono text-xs md:text-sm">
                    Projets réalisés en milieu académique et personnel
                  </p>
                </div>

                {/* Projects Grid Container with simulated scroll */}
                <div className="flex-1 relative overflow-hidden pt-1">
                  <div
                    className="will-change-transform"
                    style={{
                      transform: `translateY(-${scrollOffset}vh)`,
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto pb-10">
                      {Object.values(projectsData).map((project, idx) => (
                        <div
                          key={idx}
                          className="group bg-gray-900/70 border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10"
                        >
                          <div className="h-32 md:h-40 overflow-hidden relative">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-3 md:p-4">
                            <h3 className="text-white text-base md:text-lg mb-1.5 font-semibold">
                              {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-block text-xs px-2 py-0.5 bg-gray-700/50 rounded-md text-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs md:text-sm text-gray-400 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* End indicator */}
                      <div className="col-span-full text-center mt-4">
                        <p
                          className={`font-mono text-xs md:text-sm transition-colors duration-500 ${
                            projectsProgress > 0.9
                              ? "text-green-400"
                              : "text-gray-500"
                          }`}
                        >
                          {projectsProgress > 0.9
                            ? "✓ Fin des projets - Continuez à scroller"
                            : "↓ Scrollez pour voir tous les projets ↓"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#111] text-gray-500 px-4 py-2 text-xs flex justify-between border-t border-gray-700 z-30 mt-auto font-mono shrink-0">
              <span>
                STATUS: <span className="text-green-400">CONNECTED</span>
              </span>
              <span>BUFFER: {Math.round(progress * 100)}%</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
