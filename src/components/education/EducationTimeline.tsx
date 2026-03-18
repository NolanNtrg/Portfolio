import { useTranslation } from "react-i18next";
import { EducationContainer } from "./EducationContainer";

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
      {/* Timeline line */}
      <div className="absolute left-2.5 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-(--green)/100 via-(--green)/75 to-(--green)/50"></div>

      {educationData.map((item, index) => (
        <div key={index} className="relative">
          {/* Timeline dot */}
          <div
            className={`
              absolute left-2.5 md:left-1/2 top-8
              w-3 h-3 -translate-x-[5.5px]
              rounded-full border-2
              ${item.status === "current"
                ? "bg-green-400 border-green-400 shadow-[0_0_12px_rgba(74,222,128,0.6)] animate-pulse"
                : "bg-(--background-navbar) border-green-400"
              }
            `}
          />

          <EducationContainer
            year={item.year}
            degree={item.degree}
            school={item.school}
            description={item.description}
            current={item.status === "current"}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
