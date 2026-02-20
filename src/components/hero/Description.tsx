import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Description() {
  const { t } = useTranslation();
  const fullText = t("description");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
  }, [fullText]);

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
      className="mb-10 mx-auto max-w-2xl min-h-[1.6em] text-[clamp(1rem,4vw,1.5rem)] text-(--color-subtext) text-center font-semibold"
    >
      {displayedText}
    </p>
  );
}
