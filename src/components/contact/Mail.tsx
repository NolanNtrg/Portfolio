import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { toast } from "sonner";

export function Mail() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/7a9a6e68336a10f2a94150711362eab2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        formRef.current?.reset();
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-[90vw] md:w-[50vw] order-1 md:order-2 bg-[#0a0a0a] border border-[#1e1e1e] rounded-2xl p-6 md:p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          action="https://formsubmit.co/7a9a6e68336a10f2a94150711362eab2"
          method="POST"
          className="grid gap-6 text-left"
        >
          <input
            type="hidden"
            name="_next"
            value="https://nolan-notargiacomo.vercel.app/"
          />
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message du Portfolio !"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-(family-name:--font-ibm) tracking-wider text-[#a1a1aa] uppercase">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                aria-labelledby="name"
                required
                placeholder={t("contact.form.namePlaceholder")}
                className="p-3.5 bg-[#111] border border-[#252525] rounded-lg text-white font-sans transition-all duration-300 focus:outline-none focus:border-green-400/50 focus:bg-green-400/5 focus:shadow-[0_0_15px_rgba(74,222,128,0.06)] placeholder-[#444]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-(family-name:--font-ibm) tracking-wider text-[#a1a1aa] uppercase">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                id="email"
                aria-labelledby="email"
                required
                placeholder={t("contact.form.emailPlaceholder")}
                className="p-3.5 bg-[#111] border border-[#252525] rounded-lg text-white font-sans transition-all duration-300 focus:outline-none focus:border-green-400/50 focus:bg-green-400/5 focus:shadow-[0_0_15px_rgba(74,222,128,0.06)] placeholder-[#444]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-(family-name:--font-ibm) tracking-wider text-[#a1a1aa] uppercase">
              {t("contact.form.message")}
            </label>
            <textarea
              name="message"
              id="message"
              aria-labelledby="message"
              required
              placeholder={t("contact.form.messagePlaceholder")}
              className="p-3.5 min-h-[140px] resize-y bg-[#111] border border-[#252525] rounded-lg text-white font-sans transition-all duration-300 focus:outline-none focus:border-green-400/50 focus:bg-green-400/5 focus:shadow-[0_0_15px_rgba(74,222,128,0.06)] placeholder-[#444]"
            ></textarea>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex gap-4 items-start font-(family-name:--font-ibm) text-[11px] text-[#888]">
              <input
                type="checkbox"
                id="consent1"
                aria-label="Première case de consentement"
                required
                className="mt-1 w-4 h-4 rounded-sm border-[#333] bg-[#111] text-green-400 focus:ring-green-400/50 focus:ring-offset-0 transition-colors cursor-pointer"
                aria-labelledby="consent-first"
              />
              <label htmlFor="consent1" className="cursor-pointer leading-relaxed">{t("contact.form.consent1")}</label>
            </div>
            <div className="flex gap-4 items-start font-(family-name:--font-ibm) text-[11px] text-[#888]">
              <input
                type="checkbox"
                id="consent2"
                aria-label="Deuxième case de consentement"
                required
                className="mt-1 w-4 h-4 rounded-sm border-[#333] bg-[#111] text-green-400 focus:ring-green-400/50 focus:ring-offset-0 transition-colors cursor-pointer"
                aria-labelledby="consent-second"
              />
              <label htmlFor="consent2" className="cursor-pointer leading-relaxed">
                {t("contact.form.consent2")}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-green-400/80 hover:text-green-400 ml-1 underline decoration-green-400/30 hover:decoration-green-400 transition-colors"
                >
                  {t("contact.form.privacyPolicyLink")}
                </button>
              </label>
            </div>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={`
              mt-4 flex items-center justify-center gap-2 group
              font-(family-name:--font-ibm) font-semibold text-[13px] tracking-wider uppercase
              px-6 py-4 rounded-lg
              bg-white text-black hover:bg-green-400
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {isSubmitting ? (
              <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                {t("contact.form.submit")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      {showModal &&
        createPortal(
          <PrivacyPolicy closeModal={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
}
