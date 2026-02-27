import { useEffect, useState } from "react";

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
    <div className="flex items-center gap-2">
      <i className="fa-solid fa-sun text-xl text-(--color-text)"></i>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkTheme}
          onChange={() => setDarkTheme(!isDarkTheme)}
        />
        <div
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
          dark:bg-gray-700 peer-checked:after:translate-x-full 
          after:content-[''] after:absolute after:top-0.5 after:left-0.5 
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"
        ></div>
      </label>
      <i className="fa-solid fa-moon text-xl text-(--color-text)"></i>
    </div>
  );
};

export default ThemeToggle;
