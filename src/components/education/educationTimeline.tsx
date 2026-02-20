import { useTranslation } from "react-i18next";
import { EducationContainer } from "./educationContainer";

export function EducationTimeline() {
  const { t } = useTranslation();
  interface EducationItem {
    year: string;
    degree: string;
    school: string;
    description: string[];
    status: "completed" | "current";
  }

  const educationData = t("education.timeline", {
    returnObjects: true,
  }) as unknown as EducationItem[];

  return (
    <div className="relative mb-16">
      <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500/40 via-green-600/50 to-green-500/40"></div>
      {educationData.map((item, index) => (
        <EducationContainer
          key={index}
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
