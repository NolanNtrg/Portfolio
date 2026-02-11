import { Description } from "./description";
import { HeroButtons } from "./heroButtons";
import { Name } from "./name";
import { Tag } from "./tag";

export function MainInfo() {
  return (
    <>
      <Tag />
      <Name />
      <Description />
      <HeroButtons />
    </>
  );
}
