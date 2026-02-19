import { useState, useEffect, useRef } from "react";
import { ProjectsContainer } from "./projectsContainer";

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
    title: "BracketBuddy",
    stack: ["Java", "JavaFX", "HTML", "CSS"],
    description:
      "Conception et développement d'une plateforme de création et de gestion de tournois de basket",
    image: "/BracketBuddy.png",
  },
  "2": {
    title: "Entour'Âge",
    stack: ["SQL", "Python", "Flask", "HTML", "CSS", "JavaScript"],
    description:
      "Messagerie chiffrée end-to-end. Appels vidéo HD et partage sécurisé.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
  },
  "3": {
    title: "Site web Econocom",
    stack: ["Docker", "Kubernetes"],
    description:
      "Conception et développement d'un site web fictif pour l'entreprise Econocom",
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
  const trackRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const [globalProgress, setGlobalProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Nouveau state pour calculer de combien de pixels on doit scroller les projets
  const [maxTranslate, setMaxTranslate] = useState(0);

  // 1. Calcul de la progression globale
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

  // 2. Calcul de la distance de défilement des projets
  // Il faut le recalculer si la taille de la fenêtre change
  useEffect(() => {
    const calculateTranslation = () => {
      if (projectsContainerRef.current && terminalBodyRef.current) {
        const projectsHeight = projectsContainerRef.current.offsetHeight;
        const terminalHeight = terminalBodyRef.current.offsetHeight;

        // On ne scrolle que si le contenu est plus grand que le terminal
        if (projectsHeight > terminalHeight) {
          // La distance exacte pour que le bas de la liste touche le bas du terminal
          setMaxTranslate(projectsHeight - terminalHeight);
        } else {
          setMaxTranslate(0);
        }
      }
    };

    calculateTranslation();
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, []); // Recalcul au montage

  useEffect(() => {
    const timer = setInterval(() => setMinutes((m) => m + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  // --- DÉCOUPAGE DE L'ANIMATION EN 3 PHASES ---

  const textPhaseEnd = 0.45; // À 20%, le texte a fini d'apparaître
  const projectsScrollStart = 0.5; // À 35%, les projets commencent à monter

  // Phase 1 : Le texte (0 à 20%)
  const textProgress = Math.min(globalProgress / textPhaseEnd, 1);
  const visibleLines = Math.floor(textProgress * (scenario.length + 1));

  // Phase 2 : L'apparition (20% à 35%)
  // Le texte disparaît et les projets apparaissent grâce à l'opacité CSS, mais le scrollProgress reste à 0
  const isTextFinished = globalProgress > textPhaseEnd;

  // Phase 3 : Le défilement des projets (35% à 100%)
  let projectsScrollProgress = 0;
  if (globalProgress > projectsScrollStart) {
    projectsScrollProgress =
      (globalProgress - projectsScrollStart) / (1 - projectsScrollStart);
  }
  // On s'assure que la valeur ne dépasse jamais 1 (100%)
  projectsScrollProgress = Math.min(1, projectsScrollProgress);

  return (
    <main className="text-white font-mono w-full">
      <section ref={trackRef} className="h-[250vh] relative w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center p-2 md:p-4 overflow-hidden">
          <div className="w-[95vw] h-[90dvh] md:w-[90vw] md:h-[90vh] border border-[#333] bg-[#0c0c0c] rounded-lg flex flex-col relative overflow-hidden pointer-events-none">
            <header className="h-10 border-b border-[#333] flex justify-between items-center px-4 shrink-0 z-30 text-xs text-gray-500 bg-[#0c0c0c]">
              <span>TTY1: /dev/pts/0</span>
              <span>UPTIME: {minutes} min</span>
            </header>

            {/* CORPS DU TERMINAL (On y ajoute une réf pour mesurer sa taille) */}
            <div
              ref={terminalBodyRef}
              className="flex-1 relative overflow-hidden pointer-events-auto"
            >
              {/* Le Texte */}
              <div
                className={`absolute inset-0 p-4 transition-opacity duration-500 z-10 ${isTextFinished ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              >
                <div className="text-sm md:text-base text-green-400">
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

              {/* Les Projets : top-0, apparaissent avec transition, et défilent en pixels (px) */}
              <div
                ref={projectsContainerRef}
                className={`absolute left-0 w-full px-4 md:px-8 pb-10 transition-opacity duration-500 ${isTextFinished ? "opacity-100" : "opacity-0"}`}
                style={{
                  top: "0",
                  // On translate en pixels en fonction du maximum calculé
                  transform: `translateY(-${projectsScrollProgress * maxTranslate}px)`,
                  willChange: "transform",
                }}
              >
                <div className="text-center mb-10 pt-6">
                  <h2 className="text-4xl md:text-3xl lg:text-4xl text-(rgb(237, 237, 237)) mb-2 font-bold">
                    MES PROJETS
                  </h2>
                  <p className="text-gray-400 font-mono text-xs md:text-sm">
                    Projets réalisés en milieu académique et personnel
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {Object.values(projectsData).map((project) => (
                    <ProjectsContainer
                      image={project.image}
                      title={project.title}
                      tech={project.stack}
                      description={project.description}
                    />
                  ))}
                </div>
              </div>
            </div>
            <footer className="h-8 border-t border-[#333] flex justify-between items-center px-4 shrink-0 z-30 text-xs text-gray-500 bg-[#111]">
              <span>
                STATUS: <span className="text-green-400">CONNECTED</span>
              </span>
              <span>BUFFER: {Math.round(globalProgress * 100)}%</span>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
