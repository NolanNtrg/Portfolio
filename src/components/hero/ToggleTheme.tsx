import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Icon } from "../Icon";

const ThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkTheme(getCurrentTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", isDarkTheme ? "Dark" : "Light");
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center gap-2 text-(--color-text)">
      <Icon src="/sun.svg" />
      <Switch
        checked={isDarkTheme}
        onChange={() => setDarkTheme(!isDarkTheme)}
        className="cursor-pointer group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-(--green)"
        aria-label="Bouton de changement de thème du site : clair ou sombre."
        aria-labelledby="theme-toggle"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
      </Switch>
      <Icon src="/moon.svg" />
    </div>
  );
};

export default ThemeToggle;
