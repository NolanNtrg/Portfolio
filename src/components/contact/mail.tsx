import { useTranslation } from "react-i18next";
import { Button } from "../button";

export function Mail() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-black text-white p-10">
      {/* Container : j'ai mis max-w-2xl pour que ce soit responsive (mieux que 50vw sur mobile) */}
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10 contact">
          <h2 className="text-4xl mb-3 text-(--term-text) font-bold">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 font-mono text-base">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Formulaire */}
        <form
          action="https://formsubmit.co/notargiacomo.nolan07@gmail.com"
          method="POST"
          className="grid gap-5 text-left"
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
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-300"
            >
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
          <Button
            title={t("contact.form.submit")}
            full={true}
            submit={true}
            color="white"
          />
        </form>
      </div>
    </section>
  );
}
