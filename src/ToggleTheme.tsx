import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  // Premier useEffect : Charger le thème au démarrage
  useEffect(() => {
    let theme = localStorage.getItem("Theme");
    if (theme === "Dark") {
      setDarkTheme(true);
    }
  }, []);

  // Deuxième useEffect : Appliquer les changements et sauvegarder
  useEffect(() => {
    localStorage.setItem("Theme", isDarkTheme ? "Dark" : "Light");
    document.body.classList.toggle("dark-theme", isDarkTheme);

    // -- True, it will apply class
    // // false, it remove class
  }, [isDarkTheme]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Mode Clair</span>

      {/* Le Switch */}
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
          after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
        ></div>
      </label>
      <span className="text-sm font-medium">Mode Sombre</span>
    </div>
  );
};

export default ThemeToggle;
