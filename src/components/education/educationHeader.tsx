import { useTranslation } from "react-i18next";

export function EducationHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 text-center shrink-0 pl-3 pr-3">
      <h2 className="text-4xl md:text-3xl lg:text-4xl text-(--color-text) mb-2 font-bold">
        {t("education.header.title")}
      </h2>
      <p className="text-(--color-subtext) font-mono text-base">
        {t("education.header.subtitle")}
      </p>
    </div>
  );
}
