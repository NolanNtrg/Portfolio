import { Button } from "../button";

export function HeroButtons() {
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
        title="Voir mon CV"
        href="/CV-Nolan-Notargiacomo.pdf"
        download="CV-Nolan-Notargiacomo.pdf"
      />

      <Button
        icon="fa-envelope"
        title="Me contacter"
        full={true}
        onClick={scrollToBottom}
      />
    </div>
  );
}
