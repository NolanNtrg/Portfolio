import { useTranslation } from "react-i18next";
import { Mail } from "./Mail";
import { SocialMedia } from "./SocialMedia";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-[#080808] border-t border-[#141414] text-white pt-15 pb-15 relative overflow-hidden">
      <div className="w-full md:max-w-none mx-auto px-4 md:px-0 relative">
        <div className="mb-4 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl text-[#ededed] mb-3 font-semibold tracking-tight">
            {t("contact.title")}
          </h2>
          <div className="w-40 md:w-60 h-px bg-green-400/50 mx-auto mb-4" />
          <p className="text-(--gray) font-(family-name:--font-ibm) text-sm tracking-wider">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="flex flex-col-reverse gap-10 md:flex-row md:justify-center items-start md:gap-[10vw]">
          <SocialMedia />
          <Mail />
        </div>
      </div>
    </section>
  );
}
