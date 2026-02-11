import { Button } from "../button";

export function HeroButtons() {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Button title="Télécharger mon CV" />
      <Button title="Me contacter" full={true} />
    </div>
  );
}
