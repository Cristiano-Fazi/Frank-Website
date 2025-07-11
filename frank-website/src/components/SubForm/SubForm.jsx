import styles from "./SubForm.module.css";

export default function SubForm() {
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
        <form>
          <div className={styles.input_group}>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              className={styles.info}
              placeholder="First Name..."
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              className={styles.info}
              placeholder="Last Name..."
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="cellPhone">Cell Phone*</label>
            <input
              type="text"
              className={styles.info}
              placeholder="XXX-XXX-XXX"
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="homePhone">Home Phone</label>
            <input
              type="text"
              className={styles.info}
              placeholder="XXX-XXX-XXX"
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              className={styles.info}
              placeholder="example@example.com"
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="address">Address*</label>
            <input
              type="text"
              className={styles.info}
              placeholder="XXX Example Street"
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="city">City*</label>
            <input type="text" className={styles.info} placeholder="City" required />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="postalCode">Postal Code*</label>
            <input type="text" className={styles.info} placeholder="XXX XXX" required/>
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
              className={styles.details_box}
              placeholder="Enter details here..."
              rows="6"
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
