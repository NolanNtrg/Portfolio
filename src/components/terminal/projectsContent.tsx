import { useEffect } from "react";
import { Button } from "../button";

export function ProjectsContent({ closeModal }: { closeModal: () => void }) {
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
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-4xl max-h-[85vh] bg-[var(--background-navbar)] rounded-lg shadow-2xl border border-gray-700 text-white overflow-hidden">
        <div className="absolute top-4 right-4 z-20">
          <Button title="X" small={true} onClick={closeModal} full={true} />
        </div>
        <div className="overflow-y-auto custom-scrollbar p-6 md:p-10 max-h-[85vh]">
          <div className="mt-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400 md:p-0 pr-10">
              Nom du Super Projet
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
              Voici une description détaillée du projet. J'explique ici le
              contexte initial, la problématique rencontrée par le client ou les
              utilisateurs, et l'approche technique que j'ai adoptée pour mener
              à bien cette réalisation de A à Z.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="h-48 md:h-56 bg-gray-800 rounded-md overflow-hidden border border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Aperçu de l'interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-48 md:h-56 bg-gray-800 rounded-md overflow-hidden border border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Détail du code ou dashboard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
                Points Clés & Fonctionnalités
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-green-400">
                <li>
                  <strong>Architecture :</strong> Mise en place d'une
                  architecture propre et scalable.
                </li>
                <li>
                  <strong>Performance :</strong> Optimisation du temps de
                  chargement et requêtes API.
                </li>
                <li>
                  <strong>Sécurité :</strong> Implémentation d'un système
                  d'authentification robuste.
                </li>
                <li>
                  <strong>Responsive :</strong> Design 100% adaptable sur
                  mobile, tablette et desktop.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
                Technologies Utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-800">
              <Button title="Visiter le site ↗" />
              <Button title="Code Source (GitHub)" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
