import { useTranslation } from "react-i18next";
import { Mail } from "./Mail";
import { SocialMedia } from "./SocialMedia";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-black text-white p-10">
      <div className="w-full mx-auto text-center">
        <div className="mb-10 contact">
          <h2 className="text-4xl mb-3 text-(--term-text) font-bold">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 font-mono text-base">
            {t("contact.subtitle")}
          </p>
        </div>
        <div className="flex flex-row flex-wrap">
          <SocialMedia />
          <Mail />
        </div>
      </div>
    </section>
  );
}
