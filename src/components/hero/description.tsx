import { useState, useEffect } from "react";

export function Description() {
  const fullText = "Étudiant en informatique à l'IUT2 de Grenoble";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 40);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, fullText]);

  return (
    <p
      id="description"
      className="mb-10 mx-auto max-w-200px min-h-[1.6em] text-[clamp(1rem,4vw,1.5rem)] text-[#d6d6d6]"
    >
      {displayedText}
    </p>
  );
}
