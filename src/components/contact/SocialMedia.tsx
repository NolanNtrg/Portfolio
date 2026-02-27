import { useTranslation } from "react-i18next";

export function SocialMedia() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-10 md:pb-[7vh] pb-[3vh] justify-center w-full md:w-[35vw] px-4">
      <h3 className="text-3xl md:h-fit md:opacity-100 opacity-0 h-0 text-(--term-text) font-bold text-lef md:mb-5">
        {t("social.title")}
      </h3>
      <div className="flex gap-20 justify-center">
        <a
          className="text-8xl cursor-pointer hover:-translate-y-0.75 transition-all duration-300 ease-in-out hover:text-(--green)"
          href="https://www.linkedin.com/in/nolan-notargiacomo-49a03831a/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="text-8xl cursor-pointer hover:-translate-y-0.75 transition-all duration-300 ease-in-out hover:text-(--green)"
          href="https://github.com/NolanNtrg"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}
