import { useTranslation } from "react-i18next";
import { Icon } from "../Icon";

export function SocialMedia() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nolan-notargiacomo-49a03831a/",
      icon: "/linkedin.svg",
      label: "Mon compte LinkedIn.",
      username: "@Nolan Notargiacomo"
    },
    {
      name: "GitHub",
      url: "https://github.com/NolanNtrg",
      icon: "/github.svg",
      label: "Mon repository GitHub où je publie mes projets personnels.",
      username: "@NolanNtrg"
    }
  ];

  return (
    <div className="flex flex-col w-full md:w-[30vw] order-2 md:order-1 mt-8 md:mt-0">
      <h3 className="text-lg text-[#ededed] font-semibold mb-6 flex justify-center gap-3">
        {t("social.title")}
      </h3>

      <div className="flex flex-col gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90vw] md:w-full group relative flex items-center gap-10 p-10 bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-400/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,222,128,0.08)]"
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/10 to-transparent group-hover:via-green-400/40 transition-all duration-500" />

            <div className="w-12 h-12 flex items-center justify-center bg-[#151515] rounded-lg group-hover:border-green-400/30 transition-colors duration-300">
              <div className="scale-75 group-hover:scale-90 transition-transform duration-300 opacity-80 group-hover:opacity-100 group-hover:text-green-400">
                <Icon src={social.icon} big={true} aria-hidden="true" />
              </div>
            </div>

            <div>
              <p className="text-[16px] font-semibold text-[#e5e5e5] group-hover:text-white transition-colors duration-300">
                {social.name}
              </p>
              <p className="text-[11px] text-[#666] font-(family-name:--font-ibm) mt-1 group-hover:text-[#888] transition-colors duration-300">
                {social.username}
              </p>
            </div>

            <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-400/60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
