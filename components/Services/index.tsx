"use client"

import styles from "./Services.module.scss";
import Service from "../Service";
import { useState } from "react";
import ReactDOM from 'react-dom';

import ContactForm from "../ContactForm";

export default function Services() {
const [showContact, setShowContact] = useState(false)

const closeContact = () => {
  setShowContact(false)
  document.body.style.overflow = "auto"
  document.body.style.height = "auto"
}
  

  return (
    <div className={styles.container}>
      <h1 id="servicesSection">Services</h1>
      <div className={styles.servicesContainer}>
        <Service
          title="Custom full web application"
          description="I'll build a fully-functional web app, customized to meet all your specific needs."
          list={[
            "Blog",
            "User login",
            "E-commerce",
            "And more",
          ]}
          image="/custom.png"
        />

        <Service
          title="Brochure 1-3 page website"
          description="I will design and develop a custom website for your business that will help attract customers"
          list={[
            "Informational website about your services",
            "User forms for contact, lead collection",
            "And more",
          ]}
          image="/brochure.png"
        />

        <Service
          title="Existing website update"
          description="Need a modern refresh for your website?  I'll redesign, update, and even fix or add functionalities you're missing."
          image="/update.png"
        />

        <Service
          title="Magento e-commerce"
          description="Experienced with Magento 2 e-commerce platforms, I can either develop a new site or troubleshoot and fix your existing one."
          image="ecommerce.png"
        />

        <Service
          title="Facebook ads management"
          description="Confused by Ads Manager, Business Manager, pixels, and audiences, but just want to get your ads live? 
          From banhammers to success stories, I know the ad rules and best practices inside out. I'm here to help!"
          image="/f_ads.png"
        />

        <Service
          title="Facebook pixel management"
          description="Need help with pixel setup and event management on your website? Whether you're starting from scratch or troubleshooting an existing setup, I've got you covered. I'm well-versed in best practices and can spot potential issues."
          image="/pixel.png"
        />
      </div>

      <p className={styles.text}>
        Each website is tailor-made using industry best practices, ensuring a
        modern design with top-tier performance and speed. <br /> <br />
        Interested in a service?
        <br />
        <button onClick={() => {
          if(showContact) {
            setShowContact(false)
            document.body.style.overflow = "auto"
            document.body.style.height = "auto"
          } else {
            setShowContact(true)
            document.body.style.overflow = "hidden"
            document.body.style.height = "100vh"
          }
        }} className={styles.contactBtn}>Reach out!</button>
        <br />
        <br />
        All projects are individually assessed before pricing.
      </p>
      {showContact &&  ReactDOM.createPortal(<ContactForm closeContact={closeContact}  />, document.body)}
    </div>
  );
}
