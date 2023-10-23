"use client";
import styles from "./index.module.scss";
import { useState } from "react";

interface ContactFormProps {
    closeContact: () => void;
  }

  export default function ContactForm({ closeContact }: ContactFormProps) {
    const [userName, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(userName, surname, email, message, terms);
    }

    const handleCheckboxChange = (event: any) => {
      setTerms(event.target.checked);
    };

  return (
    <div className={styles.container}>
        <div className={styles.close} onClick={() => {
            closeContact()
        }}>
            <img src="/x.png" alt="Close" />
        </div>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Leave your information for a quote</h2>
        <form onSubmit={handleSubmit} action="">
          <div className={styles.basicInfo}>
            <div className={styles.formGroup}>
              <label htmlFor="userName">Name*</label>
              <input onChange={(e) => {
                  setName(e.target.value)
              }} type="userName" name="userName" id="userName" placeholder="Name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="surname">Surname*</label>
              <input
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                type="surname"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email*</label>
              <input onChange={(e) => {
                  setEmail(e.target.value)
              }} type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>

          <div id="messageGroup" className={styles.messageGroup}>
            <label htmlFor="message">Your message</label>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              id="message"
              placeholder="Your message"
            />
          </div>

          <div className={styles.innerCheckbox}>
            <input onChange={handleCheckboxChange} type="checkbox" name="terms" id="terms" />
            <label   htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button className={styles.innerSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
