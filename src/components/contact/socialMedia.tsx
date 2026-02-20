import { useTranslation } from "react-i18next";

export function SocialMedia() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-10 pb-[7vh] justify-center w-full md:w-[30vw] px-4">
      <h3 className="text-3xl text-(--term-text) font-bold text-lef mb-5">
        {t("social.title")}
      </h3>
      <div className="flex gap-20 justify-center">
        <a
          className="text-8xl cursor-pointer"
          href="https://www.linkedin.com/in/nolan-notargiacomo-49a03831a/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="text-8xl cursor-pointer"
          href="https://github.com/NolanNtrg"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}
