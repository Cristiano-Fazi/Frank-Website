import { useState } from "react";
import styles from "./SubForm.module.css";
import { useTranslation } from 'react-i18next';

export default function SubForm() {
  const { t, i18n } = useTranslation();
  const initialForm = {
    firstName: "",
    lastName: "",
    cellPhone: "",
    homePhone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    explanation: ""
  }

  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  };

  //Get access token
  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientId = import.meta.env.VITE_JOBBER_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_JOBBER_CLIENT_SECRET; 

    const tokenRes = await fetch(
      "https://api.getjobber.com/oauth/clients/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grant_type:    "client_credentials",
          client_id:     clientId,
          client_secret: clientSecret,
        }),
      }
    );

    if(!tokenRes.ok) {
      console.error("Token error", await tokenRes.text());
      return;
    }

    const { access_token } = await tokenRes.json();

    const quoteRes = await fetch("https://api.getjobber.com/v1/quotes",
    {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        client: {
          firstName:  formData.firstName,
          lastName:   formData.lastName,
          email:      formData.email,
          phone:      formData.cellPhone,
          address:    formData.address,
          city:       formData.city,
          postalCode: formData.postalCode,
        },
        details: {
          description: formData.explanation,
          requestedAt: new Date().toISOString(),
        },
      })
    });
    if(!quoteRes.ok) {
      console.error("Error sending quote request");
      return;
    }
    
    setFormData(initialForm);
    console.log("Submitting job request:", formData);//Delete this later
    setShowConfirm(true);
  }

  return (
    <div className={styles.full_form_component}>
      <div className={styles.text_above_form}>
        <h1> {t("estimate.formHeader")} </h1>
        <p>
          {t("estimate.subheaderStart")} <b>{t("estimate.subheaderMiddle")}</b> {t("estimate.subheaderEnd")} 
        </p>
      </div>

      <div className={styles.sub_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label htmlFor="firstName">{t('estimate.firstName')}*</label>
            <input
              name = "firstName"
              id="firstName"
              type="text"
              className={styles.info}
              placeholder={t('estimate.firstNameInput')}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="lastName">{t('estimate.lastName')}*</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              className={styles.info}
              placeholder={t('estimate.lastNameInput')}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="cellPhone">{t('estimate.cellPhone')}*</label>
            <input
              name="cellPhone"
              id="cellPhone"
              type="text"
              className={styles.info}
              placeholder="XXX-XXX-XXX"
              value={formData.cellPhone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="homePhone">{t('estimate.homePhone')}</label>
            <input
              name="homePhone"
              id="homePhone"
              type="text"
              className={styles.info}
              placeholder="XXX-XXX-XXX"
              value={formData.homePhone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="email">{t('estimate.email')}*</label>
            <input
              name="email"
              id="email"
              type="text"
              className={styles.info}
              placeholder={t('estimate.emailInput')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="address">{t('estimate.address')}*</label>
            <input
              name="address"
              id="address"
              type="text"
              className={styles.info}
              placeholder={t('estimate.addressInput')}
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="city">{t('estimate.city')}*</label>
            <input
              name="city"
              id="city"
              type="text"
              className={styles.info}
              placeholder={t('estimate.cityInput')}
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="postalCode">{t('estimate.postalCode')}*</label>
            <input
              name="postalCode"
              id="postalCode"
              type="text"
              className={styles.info}
              placeholder="XXX XXX"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.full_width}>
            <label htmlFor="explanation">
              {t("estimate.explanationStart")}
              <b><i>{t("estimate.explanationMiddle")}</i></b>
              {t("estimate.explanationEnd")}
            </label>
            <textarea
              name="explanation"
              id="explanation"
              className={styles.details_box}
              placeholder={t("estimate.explanationInput")}
              rows="6"
              value={formData.explanation}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            className={styles.submit_button}
            value={t("estimate.submit")}
          />
        </form>

        {showConfirm && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <p>{t("estimate.confirmation")}</p>
              <button onClick={() => setShowConfirm(false)}>{t("estimate.closeConfirmation")}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
