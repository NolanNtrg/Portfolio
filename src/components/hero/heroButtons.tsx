import { Button } from "../button";

export function HeroButtons() {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Button icon="icon-doc" title="Voir mon CV" />
      <Button icon="icon-envelope" title="Me contacter" full={true} />
    </div>
  );
}
