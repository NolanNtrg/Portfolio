import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function PrivacyPolicy({ closeModal }: { closeModal: () => void }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("modalState", { detail: true }));

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.dispatchEvent(new CustomEvent("modalState", { detail: false }));
      window.removeEventListener("keydown", onKey);
    };
  }, [closeModal]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    window.dispatchEvent(
      new CustomEvent("modalScroll", { detail: target.scrollTop })
    );
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/82 backdrop-blur-sm z-20"
      />

      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[70] w-[95vw] max-w-5xl max-h-[88vh] flex flex-col bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(74,222,128,0.05),0_40px_80px_rgba(0,0,0,0.85)] font-(family-name:--font-ibm)">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/30 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center justify-between px-5 h-11 border-b border-[#161616] bg-[#0d0d0d] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_4px_rgba(255,95,86,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_4px_rgba(255,189,46,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_4px_rgba(39,201,63,0.5)]" />
            </div>
            <span className="text-[10px] text-(--gray) tracking-[.12em]">
              portfolio/policy
            </span>
          </div>
          <button
            onClick={closeModal}
            className="w-6 h-6 border border-(--gray) rounded text-(--gray) text-[20px] flex items-center justify-center hover:border-[#3a3a3a] hover:text-[#666] transition-colors duration-200"
          >
            X
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-8 py-7 custom-scrollbar" onScroll={handleScroll}>

          <h2 className="text-[24px] font-semibold text-[#ebebeb] tracking-tight mb-8">
            {t("privacyPolicy.title")}
          </h2>

          <div className="space-y-10">
            {/* 1. Éditeur du site */}
            <section>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[.14em] text-green-400">
                  {t("privacyPolicy.publisher.title").toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-green-400" />
              </div>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8] mb-4">
                {t("privacyPolicy.publisher.intro")}
              </p>
              <ul className="space-y-2">
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.publisher.name")}</strong> Nolan Notargiacomo</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.publisher.status")}</strong> Particulier (Étudiant)</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.publisher.contactEmail")}</strong> notargiacomo.nolan07@gmail.com</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.publisher.address")}</strong> 38000 Grenoble, France</span>
                </li>
              </ul>
            </section>

            {/* 2. Hébergement */}
            <section>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[.14em] text-green-400">
                  {t("privacyPolicy.hosting.title").toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-green-400" />
              </div>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8] mb-4">
                {t("privacyPolicy.hosting.intro")}
              </p>
              <ul className="space-y-2">
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.hosting.provider")}</strong> Vercel Inc.</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.hosting.address")}</strong> 440 N Barranca Avenue #4133 Covina, CA 91723 United States</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb]">{t("privacyPolicy.hosting.website")}</strong> <a href="https://vercel.com" className="text-green-400 hover:text-green-300 underline underline-offset-4 decoration-green-400/30">https://vercel.com</a></span>
                </li>
              </ul>
            </section>

            {/* 3. Propriété Intellectuelle */}
            <section>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[.14em] text-green-400">
                  {t("privacyPolicy.intellectualProperty.title").toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-green-400" />
              </div>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8]">
                {t("privacyPolicy.intellectualProperty.content")}
              </p>
            </section>

            {/* 4. Données Personnelles et FormSubmit */}
            <section>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[.14em] text-green-400">
                  {t("privacyPolicy.dataManagement.title").toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-green-400" />
              </div>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8] mb-4">
                {t("privacyPolicy.dataManagement.intro")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb] block mb-1">{t("privacyPolicy.dataManagement.purpose.title")}</strong> {t("privacyPolicy.dataManagement.purpose.content")}</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span>
                    <strong className="text-[#bbb] block mb-1">{t("privacyPolicy.dataManagement.subcontractor.title")}</strong>
                    {t("privacyPolicy.dataManagement.subcontractor.content1")}
                    <a className="text-green-400 hover:text-green-300 underline underline-offset-4 decoration-green-400/30 mx-1" href="https://formsubmit.co">
                      {t("privacyPolicy.dataManagement.subcontractor.name")}
                    </a>
                    {t("privacyPolicy.dataManagement.subcontractor.content2")}
                  </span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb] block mb-1">{t("privacyPolicy.dataManagement.retention.title")}</strong> {t("privacyPolicy.dataManagement.retention.content")}</span>
                </li>
                <li className="flex items-baseline gap-2.5 md:text-[14px] text-[13px] text-[#888] leading-[1.75]">
                  <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                  <span><strong className="text-[#bbb] block mb-1">{t("privacyPolicy.dataManagement.yourRights.title")}</strong> {t("privacyPolicy.dataManagement.yourRights.content")}</span>
                </li>
              </ul>
            </section>

            {/* 5. Services tiers (Font Awesome) & Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[.14em] text-green-400">
                  {t("privacyPolicy.thirdPartyServices.title").toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-green-400" />
              </div>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8] mb-4 flex items-baseline gap-2.5">
                <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                <span>
                  <strong className="text-[#bbb]">{t("privacyPolicy.thirdPartyServices.svgrepoTitle")}</strong>{" "}
                  {t("privacyPolicy.thirdPartyServices.svgrepo")}
                  <a className="text-green-400 hover:text-green-300 underline underline-offset-4 decoration-green-400/30 ml-1" href="https://svgrepo.com">
                    {t("privacyPolicy.thirdPartyServices.svgrepoTitle")}
                  </a>.
                </span>
              </p>
              <p className="md:text-[15px] text-[13px] text-(--gray) leading-[1.8] flex items-baseline gap-2.5">
                <span className="text-green-400/45 text-[13px] shrink-0">›</span>
                <span>
                  <strong className="text-[#bbb]">{t("privacyPolicy.thirdPartyServices.cookiesTitle")}</strong>{" "}
                  {t("privacyPolicy.thirdPartyServices.cookies")}
                </span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
