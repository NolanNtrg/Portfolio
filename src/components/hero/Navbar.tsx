import { LanguageSwitcher } from "../LanguageSwitcher";
import ToggleTheme from "./ToggleTheme";

export function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full flex flex-row-reverse h-[5vh] gap-3 p-2 z-10 bg-(--background-navbar)">
      <ToggleTheme />
      <LanguageSwitcher />
    </div>
  );
}
