import styles from "./SubForm.module.css";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

export default function SubForm() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // if we've already initialized the Jobber embed once for this page, skip
    if (window.__jobberEmbedInitialized) return;
    window.__jobberEmbedInitialized = true;

    if (!document.getElementById("jobber-embed-script")) {
      const script = document.createElement("script");
      script.id = "jobber-embed-script";
      script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
      script.async = true;
      script.setAttribute("clienthub_id", "bc13bacd-391f-4c2d-b807-e5cf55ee3fe7");
      script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/bc13bacd-391f-4c2d-b807-e5cf55ee3fe7/public/work_request/embedded_work_request_form");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.full_form_component}>
      <div className={styles.text_above_form}>
        <h1> {t("estimate.formHeader")} </h1>
        <p>
          {t("estimate.subheaderStart")} <b>{t("estimate.subheaderMiddle")}</b> {t("estimate.subheaderEnd")} 
        </p>
      </div>

      <div id="bc13bacd-391f-4c2d-b807-e5cf55ee3fe7"></div>
      <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />

      </div>
  );
}
