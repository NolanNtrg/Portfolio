import { LanguageButtons } from "./languageButtons";
import { MainInfo } from "./mainInfo";

export function Hero() {
  return (
    <>
      <div className="fixed-bg fixed top-0 left-0 w-full h-full opacity-30 -z-1"></div>
      <LanguageButtons />
      <MainInfo />
    </>
  );
}
