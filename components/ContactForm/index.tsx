"use client";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import axios from 'axios'


interface ContactFormProps {
    closeContact: () => void;
  }

  export default function ContactForm({ closeContact }: ContactFormProps) {
    const [userName, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      if (error) {
        setSuccess('')
        setLoading(false)
      }
      if (success) {
        setError('')
      }
      if (loading) {
        setError('')
        setSuccess('')
      }
    }, [error, success, loading])

    const validateEmail = (email: string) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return re.test(email)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
          setError('Please enter a valid email address')
          return
        }

        if (!terms) {
          setError('Please agree to the terms and conditions')
          return
        }

        try {
          setLoading(true)
          const response = await axios.post('/api/saveUser', {
            email: email,
            userName: userName,
            surname: surname,
            message: message,
            terms: terms,
          })
  
          if (response && response.data.id ) {
            setError('')
            setSuccess('Thank you for your message. We will be in touch shortly')
          }

        } catch (errorResponse: any) {
          if (errorResponse.response.data === 'User already exists') {
            setError('You have already submitted a form. Please wait for us to get back to you')
          }else {
            setError('There was an error submitting your form. Please try again')
          }
        } finally {
          setLoading(false)
        }
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
              <label htmlFor="userName">Name</label>
              <input onChange={(e) => {
                  setName(e.target.value)
              }} type="userName" name="userName" id="userName" placeholder="Name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="surname">Surname</label>
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

          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
          {loading && (
              <div className={styles.loading}>
                <div className={styles.spinner}>
                  <svg viewBox="0 0 50 50">
                    <circle className={styles.circle1} cx="25" cy="25" r="20" />
                    <circle className={styles.circle2} cx="25" cy="25" r="15" />
                  </svg>
                </div>
              </div>
            )}
          <button className={styles.innerSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
