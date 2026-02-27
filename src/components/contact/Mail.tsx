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
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        action="https://formsubmit.co/7a9a6e68336a10f2a94150711362eab2"
        method="POST"
        className="grid gap-5 text-left md:w-[60vw] md:pr-[5vw] w-[90vw]"
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
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-300">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder={t("contact.form.namePlaceholder")}
            className="p-3 bg-white/5 border border-[#333] rounded-md text-white font-sans transition-all duration-300 focus:outline-none focus:border-(--term-text) focus:bg-[rgba(0,255,65,0.05)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-300"
          >
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder={t("contact.form.emailPlaceholder")}
            className="p-3 bg-white/5 border border-[#333] rounded-md text-white font-sans transition-all duration-300 focus:outline-none focus:border-(--term-text) focus:bg-[rgba(0,255,65,0.05)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-300"
          >
            {t("contact.form.message")}
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder={t("contact.form.messagePlaceholder")}
            className="p-3 min-h-30 resize-y bg-white/5 border border-[#333] rounded-md text-white font-sans transition-all duration-300 focus:outline-none focus:border-(--term-text) focus:bg-[rgba(0,255,65,0.05)]"
          ></textarea>
        </div>
        <div className="flex gap-5 items-center font-mono text-sm">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="scale-150"
          />
          {t("contact.form.consent1")}
        </div>
        <div className="flex gap-5 items-center font-mono text-sm">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="scale-150"
          />
          <p>
            {t("contact.form.consent2")}
            <a
              onClick={() => setShowModal(true)}
              className="text-green-400 underline cursor-pointer"
            >
              {t("contact.form.privacyPolicyLink")}
            </a>
            .
          </p>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className={`
        font-ibm font-semibold no-underline border-2 rounded-sm duration-300 ease-in-out flex items-center gap-2 cursor-pointer
      bg-[rgb(237,237,237)] text-[#1a1a1a] hover:bg-(--green) border-none
        transition-all hover:-translate-y-0.75 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]} px-6 py-3 text-[0.9rem] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "..." : t("contact.form.submit")}
        </button>
      </form>
      {showModal &&
        createPortal(
          <PrivacyPolicy closeModal={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
}
