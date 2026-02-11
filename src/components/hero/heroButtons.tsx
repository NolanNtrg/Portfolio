import { Button } from "../button";

export function HeroButtons() {
  return (
    <div className="flex justify-center gap-8">
      <Button title="Télécharger mon CV" />
      <Button title="Me contacter" full={true} />
    </div>
  );
}
