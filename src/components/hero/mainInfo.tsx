import { CallToAction } from "./CallToAction.tsx";
import { Description } from "./Description.tsx";
import { HeroButtons } from "./HeroButtons.tsx";
import { Name } from "./Name.tsx";
import { Tag } from "./Tag.tsx";

export function MainInfo() {
  return (
    <div className="flex flex-col items-center pl-2 pr-2">
      <Tag />
      <Name />
      <Description />
      <HeroButtons />
      <CallToAction />
    </div>
  );
}
