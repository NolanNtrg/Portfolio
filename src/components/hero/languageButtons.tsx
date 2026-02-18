import { Button } from "../button";
import ToggleTheme from "./ToggleTheme";

export function LanguageButtons() {
  return (
    <div className="top-3 right-3 fixed flex gap-3 z-10 h-[3vh]">
      <ToggleTheme />
      <Button small={true} full={true} title="FR" />
      <Button small={true} full={true} title="EN" />
    </div>
  );
}
