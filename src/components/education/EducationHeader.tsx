import { useTranslation } from "react-i18next";

export function EducationHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 text-center shrink-0 pl-3 pr-3 pt-8">
      <h2 className="text-3xl md:text-4xl text-(--color-text) mb-3 font-semibold tracking-tight">
        {t("education.header.title")}
      </h2>
      <div className="w-60 h-px bg-green-400/50 mx-auto mb-3" />
      <p className="text-(--color-subtext) font-(family-name:--font-ibm) text-xs md:text-sm tracking-wider">
        {t("education.header.subtitle")}
      </p>
    </div>
  );
}
