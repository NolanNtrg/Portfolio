import { useTranslation } from "react-i18next";
import { Button } from "../button";

export function Mail() {
  const { t } = useTranslation();
  return (
    <form
      action="https://formsubmit.co/notargiacomo.nolan07@gmail.com"
      method="POST"
      className="grid gap-5 text-left md:w-[60vw] w-[90vw]"
    >
      {/* Champs cachés pour FormSubmit */}
      <input
        type="hidden"
        name="_next"
        value="https://nolan-notargiacomo.netlify.app/"
      />
      <input
        type="hidden"
        name="_subject"
        value="Nouveau message du Portfolio !"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* Input Nom */}
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

      {/* Input Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-300">
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

      {/* Textarea Message */}
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

      {/* Bouton Submit (Style ajouté pour correspondre au thème) */}
      <button
        type="submit"
        className="
    font-ibm font-semibold no-underline border-2 rounded-sm duration-300 ease-in-out flex items-center gap-2 cursor-pointer
    bg-[rgb(237,237,237)] text-[#1a1a1a] hover:bg-(--green) border-none
    transition-all hover:-translate-y-0.75 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]} px-6 py-3 text-[0.9rem]   
  "
      >
        {t("contact.form.submit")}
      </button>
    </form>
  );
}
