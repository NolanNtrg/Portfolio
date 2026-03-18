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
    <div className="flex items-center gap-2 text-[#e5e5e5]">
      <div className="opacity-70 scale-90">
        <Icon src="/sun.svg" />
      </div>
      <Switch
        checked={isDarkTheme}
        onChange={() => setDarkTheme(!isDarkTheme)}
        className={`
          group relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer
          ${isDarkTheme ? 'bg-green-400/80' : 'bg-[#333]'}
        `}
        aria-label="Bouton de changement de thème du site : clair ou sombre."
      >
        <span 
          className={`
            size-3.5 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-sm
            ${isDarkTheme ? 'translate-x-4.5' : 'translate-x-0.5'}
          `}
        />
      </Switch>
      <div className="opacity-70 scale-90">
        <Icon src="/moon.svg" />
      </div>
    </div>
  );
};

export default ThemeToggle;
