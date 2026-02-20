import { useTranslation } from "react-i18next";

export function EducationContainer({
  current = false,
  year,
  degree,
  school,
  description,
  index,
}: {
  current?: boolean;
  year: string;
  degree: string;
  school: string;
  description: string[];
  index: number;
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`m-5 md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="bg-(--background-containers) border rounded-xl overflow-hidden border-green-400 hover:shadow-xl hover:shadow-green-500/10 md:w-[45vw] p-2">
        <div className="p-3 md:p-4">
          {current && (
            <div className="inline-block mb-3 px-3 py-1 bg-green-400/10 border border-green-400 rounded-full">
              <span className="text-green-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {t("education.current")}
              </span>
            </div>
          )}
          <div className="text-green-400 font-mono text-sm mb-3">{year}</div>
          <h3 className="text-xl font-ibm font-semibold mb-2 text-white">
            {degree}
          </h3>
          <p className="text-gray-400 font-mono text-sm mb-7">{school}</p>
          <ul className="space-y-2 list-disc marker:text-(--green) pl-3">
            {description.map((desc, index) => (
              <li key={index} className="text-gray-300 text-sm">
                <span className="font-mono">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
