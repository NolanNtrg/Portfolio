import { EducationContainer } from "./educationContainer";

export function EducationTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500/40 via-green-600/50 to-green-500/40"></div>
      <EducationContainer
        current={true}
        year="2025 - 2026"
        school="IUT2, Grenoble"
        degree="BUT Informatique - 2ème année"
        description="placeholder"
      />
      <EducationContainer
        year="2024 - 2025"
        school="IUT2, Grenoble"
        degree="BUT Informatique - 1ère année"
        description="placeholder"
      />
      <EducationContainer
        year="2023 - 2024"
        school="Lycée Jean Moulin, Albertville"
        degree="Baccalauréat - Mention Très Bien"
        description="placeholder"
      />
    </div>
  );
}
