import { useTranslation } from "react-i18next";
import { Button } from "./Button";

export function LanguageSwitcher({ fromNav = false }: { fromNav?: boolean }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex gap-2 ${fromNav ? 'navbar-switcher' : ''}`}>
      <Button
        onClick={() => changeLanguage("fr")}
        title="FR"
        small={true}
        full={i18n.language === "fr"}
        forceWhite={fromNav}
      />
      <Button
        onClick={() => changeLanguage("en")}
        title="EN"
        small={true}
        full={i18n.language === "en"}
        forceWhite={fromNav}
      />
    </div>
  );
}
