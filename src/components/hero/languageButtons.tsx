import ToggleTheme from "../../ToggleTheme";
import { Button } from "../button";

export function LanguageButtons() {
  return (
    <div className="top-3 right-3 fixed flex gap-3 z-10 h-[3vh]">
      <ToggleTheme />
      <Button small={true} title="FR" />
      <Button small={true} title="EN" />
    </div>
  );
}
