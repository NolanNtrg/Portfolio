import { useTranslation } from "react-i18next";

export function Tag() {
  const { t } = useTranslation();
  return (
    <div className="font-semibold font-(family-name:--font-ibm) bg-(--background-color-items) text-(--color-text-contrasted) pt-2 pb-2 pl-4 pr-4 -rotate-2 inline-block">
      {t("tag")}
    </div>
  );
}
