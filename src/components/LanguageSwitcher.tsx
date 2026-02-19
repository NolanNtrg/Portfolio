import { useTranslation } from "react-i18next";
import { Button } from "./button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => changeLanguage("fr")} title="FR" small={true} full={i18n.language === "fr"} />
      <Button onClick={() => changeLanguage("en")} title="EN" small={true} full={i18n.language === "en"} />
    </div>
  );
}
