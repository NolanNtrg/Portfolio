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
    title: "SecureChat Pro",
    stack: ["Flutter", "Firebase"],
    description:
      "Messagerie chiffrée end-to-end. Appels vidéo HD et partage sécurisé.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
  },
  "4": {
    title: "SecureChat Pro",
    stack: ["Flutter", "Firebase"],
    description:
      "Messagerie chiffrée end-to-end. Appels vidéo HD et partage sécurisé.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
  },
  "5": {
    title: "SecureChat Pro",
    stack: ["Flutter", "Firebase"],
    description:
      "Messagerie chiffrée end-to-end. Appels vidéo HD et partage sécurisé.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
  },
};

export function Screen() {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [minutes, setMinutes] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;

      // On utilise trackRef pour la hauteur totale, mais window.innerHeight pour le calcul
      const rect = trackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = rect.height - viewportHeight;
      const scrolled = -rect.top;

      const newProgress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setProgress(newProgress);
      setProjectsVisible(newProgress > 0.85);

      const stepSize = 1 / (scenario.length + 2);
      setVisibleLines(Math.floor(newProgress / stepSize));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // scenario.length n'est pas nécessaire ici car constant

  useEffect(() => {
    const timer = setInterval(() => setMinutes((m) => m + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main ref={trackRef} className="relative h-[450vh]">
      {/* CORRECTION MOBILE : 
         1. 'h-[100dvh]' au lieu de 'h-screen' pour s'adapter à la barre d'adresse mobile
         2. 'sticky top-0' assure que ça reste collé en haut
      */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        {/* CORRECTION TAILLE DU TERMINAL :
           Utilisation de 'h-[90dvh]' pour que la boîte intérieure s'adapte aussi dynamiquement
        */}
        <div className="w-[95vw] h-[90dvh] bg-[#1a1a1a] shadow-2xl flex flex-col border border-[#333] rounded-lg p-2 transition-all duration-300 md:w-[90vw] md:h-[90vh] md:p-3 relative">
          <div className="grow rounded-sm relative font-mono text-green-400 pt-2 leading-relaxed shadow-inner flex flex-col bg-[#0c0c0c] overflow-hidden">
            {/* Overlay Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] z-10 pointer-events-none"></div>

            {/* Header */}
            <header className="border-b border-gray-700 pb-2.5 mb-4 text-gray-500 text-xs shrink-0 flex justify-between">
              <span className="ml-3">TTY1: /dev/pts/0</span>
              <span className="mr-3">UPTIME: {minutes} min</span>
            </header>

            {/* Terminal Content */}
            <div
              className={`grow overflow-hidden relative text-sm md:text-base transition-opacity duration-500 text-left pl-4 ${projectsVisible ? "opacity-0" : "opacity-100"}`}
            >
              {scenario.map((line, i) => (
                <div
                  key={i}
                  className={`transition-all duration-200 mb-2 ${i < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>

            {/* Projects Content */}
            <section
              className={`absolute inset-0 overflow-y-auto z-20 transition-opacity duration-700 p-2 sm:p-5 bg-black/95 ${projectsVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              <header className="text-center my-4 md:my-10">
                <h2
                  className="text-2xl md:text-5xl text-white mb-2.5"
                  style={{ textShadow: "0 0 15px rgba(0, 255, 65, 0.4)" }}
                >
                  📁 MES PROJETS
                </h2>
                <p className="text-gray-400 font-mono text-xs md:text-base">
                  Projets réalisés en milieu académique et personnel
                </p>
              </header>

              {/* Correction de la grille pour mobile (1 colonne) */}
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 px-2.5 pb-20 max-w-6xl mx-auto">
                {Object.values(projectsData).map((project, idx) => (
                  <div
                    key={idx}
                    className="group bg-gray-900/70 border border-gray-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10"
                  >
                    <div className="h-40 md:h-52 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-white text-lg md:text-xl mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block text-xs px-2 py-1 bg-gray-700/50 rounded-md text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
