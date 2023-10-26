import styles from "./index.module.scss";
import React from "react";

const Terms = () => {
  return (
    <>   
     <div className={styles.outerContainer}>
      {" "}
    
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <h2>Introduction</h2>
        <p>
          Your privacy is crucial to us. This privacy policy explains the
          personal data we collect from you, how we use it, store it, and your
          rights regarding that data.
        </p>
        <h2>Contact Information</h2>
        <p>
          For any questions regarding this policy or your data protection
          rights, please contact us at:
        </p>
        
        <br />
        <p>
            Email: girts@gkarcevskis.com
            <br />
            Phone: +49 176 56726448
            <br />
           Address: Suhler Str. 108, Berlin, Germany
           <br />
           </p>
        
        <h2>Data Collection and Use</h2>
        <p>
          We collect personal information such as your name, surname, phone
          number, and email address. This data is collected only after you
          provide explicit consent by accepting our terms and conditions. We use
          this data to contact you and offer our services.
        </p>
        <h2>Legal Basis for Processing</h2>
        <p>
          The legal basis for processing your personal data is your explicit
          consent.
        </p>
        <h2>Data Storage</h2>
        <p>
          Your data is securely stored on servers located within Europe and is
          encrypted to ensure its safety. The data is accessible only by the
          website owner.
        </p>
        <h2>Data Retention Period</h2>
        <p>
          Your personal data will be retained until you request its deletion or
          indicate that you are no longer interested in our services.
        </p>
        <h2>International Data Transfers</h2>
        <p>
          There will be no international transfers of your personal data outside
          of the European Economic Area.
        </p>
        <h2>Automated Decision-Making and Profiling</h2>
        <p>
          Currently, there is no automated decision-making or profiling
          conducted using your personal data. The use of Facebook Pixel is for
          advertisement customization and doesn't fall into automated
          decision-making or profiling as per GDPR definitions.
        </p>
        <h1>Cookie Policy</h1>
        <h2>Use of Cookies</h2>
        <p>
          We use cookies to improve your experience on our website. The only
          cookies employed are related to Facebook Pixel, which will be used to
          create Facebook ads in the future.
        </p>
        <h2>Consent</h2>
        <p>
          By using our website, you consent to the use of cookies as described
          in this policy. You have the right to withdraw your consent at any
          time.
        </p>
        <h2>Managing Cookies</h2>
        <p>You can manage or opt-out of cookies using your browser settings.</p>
        <h2>Third-Party Links</h2>
        <p>
          While there are currently no third-party links on our website, this
          may change in the future. It's advisable to review the privacy
          policies of any third-party websites linked from our website.
        </p>
        <h2>Changes to the Privacy Policy</h2>
        <p>
          Any major changes to this privacy policy will be communicated to
          customers whose information is saved in our database via email.
        </p>
        <h2>Lawful, Fair, and Transparent Processing</h2>
        <p>
          We are committed to processing your personal data lawfully, fairly,
          and in a transparent manner. Your data will be processed in accordance
          with GDPR and other applicable data protection laws.
        </p>
      </div>
        </div>
      </>

  );
};

export default Terms;
