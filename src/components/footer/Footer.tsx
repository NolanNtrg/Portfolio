import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-6 text-center text-sm text-gray-50 bg-black">
      <p>
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </p>
      <p>
        {t("footer.update")} {new Date().getDay()}/{new Date().getMonth() + 1}/
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
