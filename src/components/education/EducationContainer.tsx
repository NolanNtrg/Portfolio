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
  const isEven = index % 2 === 0;

  return (
    <div
      className={`ml-[5vw] mr-[5vw] mb-[10vw] md:mb-0 md:flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
      data-sal="slide-up"
      data-sal-duration="400"
      data-sal-once="true"
    >
      <div
        className={`
          group relative bg-[#0a0a0a] border rounded-xl overflow-hidden
          md:w-[40vw] lg:w-[40vw] transition-all duration-300
          hover:border-(--green)/30 hover:-translate-y-0.5
          hover:shadow-[0_4px_30px_rgba(74,222,128,0.06)] font-(family-name:--font-ibm)
          ${current
            ? "border-green-400/20 shadow-[0_0_24px_rgba(74,222,128,0.06)]"
            : "border-[#1e1e1e]"
          }
        `}
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/20 to-transparent group-hover:via-green-400/40 transition-all duration-500" />

        <div className="p-6 md:p-8 md:w-[40vw] p-2">
          {/* Index badge + Current badge row */}
          <div className="flex items-center justify-between mb-5">
            {current && (
              <div className="inline-flex items-center gap-2 text-[10px] tracking-widest text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />
                {t("education.current").toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] tracking-[.14em] text-green-400">
              {year}
            </span>
            <div className="flex-1 h-px bg-green-400/80" />
          </div>
          {/* Degree */}
          <h3 className="text-[20px] md:text-[22px] font-semibold text-[#ebebeb] tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
            {degree}
          </h3>
          {/* School badge */}
          <span className="inline-block text-[13px] px-3 py-1.5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-sm text-[#888] tracking-[.06em] mb-6 group-hover:border-[#2a2a2a] group-hover:text-[#aaa] transition-colors duration-300">
            {school}
          </span>
          {/* Description list */}
          <ul className="space-y-0">
            {description.map((desc, i) => (
              <li
                key={i}
                className="flex items-baseline gap-2.5 md:text-[15px] text-[13.5px] text-[#888] leading-[1.8] py-2 border-b border-[#111] last:border-b-0 group-hover:text-[#aaa] transition-colors duration-300"
              >
                <span className="text-green-400/45 text-[13px] shrink-0">
                  ›
                </span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}
