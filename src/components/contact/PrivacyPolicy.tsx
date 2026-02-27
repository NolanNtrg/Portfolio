import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

export function PrivacyPolicy({ closeModal }: { closeModal: () => void }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Arrière-plan flouté */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Conteneur principal fixe */}
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-4xl max-h-[80vh] bg-(--background-navbar) rounded-lg shadow-2xl border border-gray-700 text-white overflow-hidden flex flex-col">
        {/* Bouton de fermeture */}
        <div className="absolute top-4 right-4 z-20">
          <Button title="X" small={true} onClick={closeModal} full={true} />
        </div>

        {/* Zone de contenu scrollable */}
        <div className="overflow-y-auto custom-scrollbar p-6 md:p-10 max-h-[80vh]">
          <div className="mt-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-(--green) md:p-0 pr-10">
              {t("privacyPolicy.title")}
            </h2>

            {/* 1. Éditeur du site */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("privacyPolicy.publisher.title")}
              </h3>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base">
                {t("privacyPolicy.publisher.intro")}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-(--color-text) marker:text-(--green) text-sm md:text-base">
                <li>
                  <strong>{t("privacyPolicy.publisher.name")}</strong> Nolan
                  Notargiacomo
                </li>
                <li>
                  <strong>{t("privacyPolicy.publisher.status")}</strong>{" "}
                  Particulier (Étudiant)
                </li>
                <li>
                  <strong>{t("privacyPolicy.publisher.contactEmail")}</strong>{" "}
                  notargiacomo.nolan07@gmail.com
                </li>
                <li>
                  <strong>{t("privacyPolicy.publisher.address")}</strong> 38000
                  Grenoble, France
                </li>
              </ul>
            </div>

            {/* 2. Hébergement */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("privacyPolicy.hosting.title")}
              </h3>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base">
                {t("privacyPolicy.hosting.intro")}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-(--color-text) marker:text-(--green) text-sm md:text-base">
                <li>
                  <strong>{t("privacyPolicy.hosting.provider")}</strong> Vercel
                  Inc.
                </li>
                <li>
                  <strong>{t("privacyPolicy.hosting.address")}</strong> 440 N
                  Barranca Avenue #4133 Covina, CA 91723 United States
                </li>
                <li>
                  <strong>{t("privacyPolicy.hosting.website")}</strong>{" "}
                  https://vercel.com
                </li>
              </ul>
            </div>

            {/* 3. Propriété Intellectuelle */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("privacyPolicy.intellectualProperty.title")}
              </h3>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base">
                {t("privacyPolicy.intellectualProperty.content")}
              </p>
            </div>

            {/* 4. Données Personnelles et FormSubmit */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("privacyPolicy.dataManagement.title")}
              </h3>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base mb-3">
                {t("privacyPolicy.dataManagement.intro")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--color-text) marker:text-(--green) text-sm md:text-base">
                <li>
                  <strong>
                    {t("privacyPolicy.dataManagement.purpose.title")}
                  </strong>{" "}
                  {t("privacyPolicy.dataManagement.purpose.content")}
                </li>
                <li>
                  <strong>
                    {t("privacyPolicy.dataManagement.subcontractor.title")}
                  </strong>{" "}
                  {t("privacyPolicy.dataManagement.subcontractor.content1")}
                  <a
                    className="text-(--green) underline cursor-pointer"
                    href="https://formsubmit.co"
                  >
                    {t("privacyPolicy.dataManagement.subcontractor.name")}
                  </a>
                  {t("privacyPolicy.dataManagement.subcontractor.content2")}
                </li>
                <li>
                  <strong>
                    {t("privacyPolicy.dataManagement.retention.title")}
                  </strong>{" "}
                  {t("privacyPolicy.dataManagement.retention.content")}
                </li>
                <li>
                  <strong>
                    {t("privacyPolicy.dataManagement.yourRights.title")}
                  </strong>{" "}
                  {t("privacyPolicy.dataManagement.yourRights.content")}
                </li>
              </ul>
            </div>

            {/* 5. Services tiers (Font Awesome) & Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-(--color-name) border-b border-gray-700 pb-2">
                {t("privacyPolicy.thirdPartyServices.title")}
              </h3>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base mb-3">
                <strong>
                  {t("privacyPolicy.thirdPartyServices.fontAwesomeTitle")}
                </strong>
                {t("privacyPolicy.thirdPartyServices.fontAwesome1")}
                <a
                  className="text-(--green) underline cursor-pointer"
                  href="https://fontawesome.com"
                >
                  {t("privacyPolicy.thirdPartyServices.fontAwesomeTitle")}
                </a>
                {t("privacyPolicy.thirdPartyServices.fontAwesome2")}
              </p>
              <p className="text-(--color-text) leading-relaxed text-sm md:text-base">
                <strong>
                  {t("privacyPolicy.thirdPartyServices.cookiesTitle")}
                </strong>
                {t("privacyPolicy.thirdPartyServices.cookies")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
