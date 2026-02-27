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
      className={`ml-[5vw] mr-[5vw] mb-[10vw] md:mb-0 md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="bg-(--background-containers) rounded-xl overflow-hidden border border-(--green) md:w-[40vw] p-2">
        <div className="p-3 md:p-4">
          {current && (
            <div className="inline-block mb-3 px-3 py-1 bg-green-400/10 border border-(--green) rounded-full">
              <span className="text-green-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="progress w-2 h-2 bg-green-400 rounded-full animate-bounce"></span>
                {t("education.current")}
              </span>
            </div>
          )}
          <div className="text-green-400 font-mono text-sm mb-3">{year}</div>
          <h3 className="text-xl font-ibm font-semibold mb-2 text-white">
            {degree}
          </h3>
          <p className="text-sm px-2 py-1 bg-gray-800 rounded text-gray-300 border border-gray-700 font-mono w-fit mb-7">
            {school}
          </p>
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
