import { useState } from "react";
import styles from "./SubForm.module.css";

export default function SubForm() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Delete this console.log later
    console.log("Submitting job request:", formData);

    // TODO: integrate with Jobber API here
    // Example:
    // try {
    //   const response = await fetch('/api/jobber', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const result = await response.json();
    //   console.log('Jobber response:', result);
    // } catch (error) {
    //   console.error('Jobber API error:', error);
    // }

    setFormData(initialForm);
    setShowConfirm(true);
  }

  return (
    <div className={styles.full_form_component}>
      <div className={styles.text_above_form}>
        <h1>
          Fill out the form below and we'll get back to you within 48 hours to
          book a visit.
        </h1>
        <p>
          Note that <b>no price can be given over the phone.</b> We must visit
          in person to asses all factors.
        </p>
      </div>

      <div className={styles.sub_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label htmlFor="firstName">First Name*</label>
            <input
              name = "firstName"
              id="firstName"
              type="text"
              className={styles.info}
              placeholder="First Name..."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="lastName">Last Name*</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              className={styles.info}
              placeholder="Last Name..."
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="cellPhone">Cell Phone*</label>
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
            <label htmlFor="homePhone">Home Phone</label>
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
            <label htmlFor="email">Email*</label>
            <input
              name="email"
              id="email"
              type="text"
              className={styles.info}
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="address">Address*</label>
            <input
              name="address"
              id="address"
              type="text"
              className={styles.info}
              placeholder="XXX Example Street"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="city">City*</label>
            <input
              name="city"
              id="city"
              type="text"
              className={styles.info}
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="postalCode">Postal Code*</label>
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
              Please describe the work that needs to be done in the{" "}
              <b>
                <i>greatest detail possible</i>
              </b>
              . This will allow us to more easily provide a quote. (Include
              number and location of trees, nature of work, ect){" "}
            </label>
            <textarea
              name="explanation"
              id="explanation"
              className={styles.details_box}
              placeholder="Enter details here..."
              rows="6"
              value={formData.explanation}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            className={styles.submit_button}
            value="Submit Request"
          />
        </form>
      </div>
    </div>
  );
}
