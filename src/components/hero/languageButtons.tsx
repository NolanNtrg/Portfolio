import { Button } from "../button";

export function LanguageButtons() {
  return (
    <div className="top-5 right-5 fixed flex gap-5 z-10">
      <Button title="FR" />
      <Button title="EN" />
    </div>
  );
}
