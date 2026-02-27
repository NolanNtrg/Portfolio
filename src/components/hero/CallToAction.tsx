import { useTranslation } from "react-i18next";

export function CallToAction() {
  const { t } = useTranslation();
  const scrollToTerminal = () => {
    const element = document.getElementById("terminal");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="mt-30 animate-bounce font-bold text-(--color-subtext) cursor-pointer"
      onClick={scrollToTerminal}
    >
      {t("callToAction")}
    </button>
  );
}
