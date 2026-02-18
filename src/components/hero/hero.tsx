import { LanguageButtons } from "./languageButtons";
import { MainInfo } from "./mainInfo";

export function Hero() {
  return (
    <div className="min-h-[85vh] flex justify-center items-center pt-30">
      <LanguageButtons />
      <MainInfo />
    </div>
  );
}
