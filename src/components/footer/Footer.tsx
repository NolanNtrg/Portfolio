import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative py-8 text-center bg-[#050505] border-t border-[#141414]">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#222] to-transparent" />
      
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[11px] text-[#666] font-(family-name:--font-ibm) tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
        <div className="flex items-center gap-2 text-[#555] font-(family-name:--font-ibm) text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
          <p>
            {t("footer.update")}{" "}
            <span className="text-[#888]">
              {String(new Date().getDate()).padStart(2, "0")}/
              {String(new Date().getMonth() + 1).padStart(2, "0")}/
              {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
