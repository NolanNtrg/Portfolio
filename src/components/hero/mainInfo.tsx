import { CallToAction } from "./calltoaction";
import { Description } from "./description";
import { HeroButtons } from "./heroButtons";
import { Name } from "./name";
import { Tag } from "./tag";

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
