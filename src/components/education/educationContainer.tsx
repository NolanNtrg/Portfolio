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
      className={`m-12 md:flex md:m-5 items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="bg-(--background-containers) border rounded-lg overflow-hidden border-green-400 hover:shadow-xl hover:shadow-green-500/10 md:w-[45vw]">
        <div className="p-3 md:p-4">
          {current && (
            <div className="inline-block mb-3 px-3 py-1 bg-green-400/10 border border-green-400 rounded-full">
              <span className="text-green-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {t("education.current")}
              </span>
            </div>
          )}
          <h3 className="text-white text-base md:text-lg mb-1.5 font-semibold"></h3>
          {/* Year */}
          <div className="text-green-400 font-mono text-sm mb-2">{year}</div>
          {/* Degree */}
          <h3 className="text-xl font-bold mb-2 text-white">{degree}</h3>
          {/* School */}
          <p className="text-gray-400 font-mono text-sm mb-4">{school}</p>
          {/* Description */}
          <ul className="space-y-2">
            {description.map((desc) => (
              <li className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-400 mt-1">▸</span>
                <span className="font-mono">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
