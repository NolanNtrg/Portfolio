import { useTranslation } from "react-i18next";
import { Button } from "../Button.tsx";

export function HeroButtons() {
  const { t } = useTranslation();
  const scrollToBottom = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Button
        icon="fa-file"
        title={t("heroButtons.cv")}
        href="/CV-Nolan-Notargiacomo.pdf"
        download="CV-Nolan-Notargiacomo.pdf"
      />

      <Button
        icon="fa-envelope"
        title={t("heroButtons.contact")}
        full={true}
        onClick={scrollToBottom}
      />
    </div>
  );
}
