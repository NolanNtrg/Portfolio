import { LanguageButtons } from "./languageButtons";
import { MainInfo } from "./mainInfo";

export function Hero() {
  return (
    <div className="min-h-[85vh] flex justify-center items-center pt-30">
      <div className="opacity-30 fixed-bg fixed top-0 left-0 -z-1 h-screen w-full bg-(--background-color)"></div>
      <LanguageButtons />
      <MainInfo />
    </div>
  );
}
