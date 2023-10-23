import styles from "./index.module.scss";

interface ContactFormProps {
    closeContact: () => void;
  }

  export default function ContactForm({ closeContact }: ContactFormProps) {
  return (
    <div className={styles.container}>
        <div className={styles.close} onClick={() => {
            closeContact()
        }}>
            <img src="/x.png" alt="Close" />
        </div>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Leave your information for a quote</h2>
        <form action="">
          <div className={styles.basicInfo}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name*</label>
              <input type="name" name="name" id="name" placeholder="Name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="surname">Surname*</label>
              <input
                type="surname"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>

          <div id="messageGroup" className={styles.messageGroup}>
            <label htmlFor="message">Your message</label>
            <textarea
           
              name="message"
              id="message"
              placeholder="Your message"
            />
          </div>

          <div className={styles.innerCheckbox}>
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button className={styles.innerSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
