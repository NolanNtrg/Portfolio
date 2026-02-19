import { EducationContainer } from "./educationContainer";

export function EducationTimeline() {
  interface EducationItem {
    year: string;
    degree: string;
    school: string;
    description: string[];
    status: "completed" | "current";
  }

  const educationData: EducationItem[] = [
    {
      year: "2025 - 2026",
      degree: "BUT Informatique - 2ème année",
      school: "IUT2, Grenoble",
      description: [
        "Parcours : Développement d'applications Communicantes et Sécurisées",
        "Déploiement et sécurisation d'infrastructures réseaux (Proxmox, nftables)",
        "Projets full-stack et DevOps (Docker, Git)",
        "Dévelopement web (PHP/Symfony, JavaScript)",
      ],
      status: "current",
    },
    {
      year: "2023 - 2024",
      degree: "BUT Informatique - 1ère année",
      school: "IUT2 de Grenoble",
      description: [
        "Fondamentaux de la programmation orientée objets (Java)",
        "Bases de données (SQL, PostgreSQL)",
        "Systèmes et administration (Debian)",
        "Développement web (HTML, CSS, JavaScript)",
      ],
      status: "completed",
    },
    {
      year: "2021 - 2024",
      degree: "Baccalauréat Général",
      school: "Lycée Jean Moulin, Albertville",
      description: [
        "Mention : Très Bien",
        "Spécialités : Mathématiques, Physique-Chimie",
      ],
      status: "completed",
    },
  ];

  return (
    <div className="relative mb-16">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500/40 via-green-600/50 to-green-500/40"></div>
      ;
      {educationData.map((item, index) => (
        <EducationContainer
          year={item.year}
          degree={item.degree}
          school={item.school}
          description={item.description}
          current={item.status === "current"}
          index={index}
        />
      ))}
    </div>
  );
}
