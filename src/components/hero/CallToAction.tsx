import { useTranslation } from "react-i18next";

export function CallToAction() {
  const { t } = useTranslation();
  return (
    <p className="mt-30 animate-bounce font-bold text-(--color-subtext)">
      {t("callToAction")}
    </p>
  );
}
