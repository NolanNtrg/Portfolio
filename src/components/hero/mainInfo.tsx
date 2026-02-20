import { CallToAction } from "./CallToAction";
import { Description } from "./Description";
import { HeroButtons } from "./HeroButtons";
import { Name } from "./Name";
import { Tag } from "./Tag";

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
