import { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { CallToAction } from "./CallToAction.tsx";
import { Description } from "./Description.tsx";
import { HeroButtons } from "./HeroButtons.tsx";
import { Name } from "./Name.tsx";
import { Tag } from "./Tag.tsx";

export function MainInfo() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="flex flex-col items-center pl-2 pr-2">
      <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200">
        <Tag />
      </div>
      <div data-sal="slide-down" data-sal-duration="500">
        <Name />
      </div>
      <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200">
        <Description />
      </div>
      <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200">
        <HeroButtons />
      </div>
      <div data-sal="slide-down" data-sal-duration="500" data-sal-delay="200">
        <CallToAction />
      </div>
    </div>
  );
}
