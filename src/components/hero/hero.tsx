import { CallToAction } from "./calltoaction";
import { LanguageButtons } from "./languageButtons";
import { MainInfo } from "./mainInfo";

export function Hero() {
  return (
    <>
      <div className="fixed-bg fixed top-0 left-0 opacity-30 -z-1 h-screen w-screen"></div>
      <LanguageButtons />
      <MainInfo />
      <CallToAction />
    </>
  );
}
