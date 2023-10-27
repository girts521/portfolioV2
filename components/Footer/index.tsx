import styles from "./index.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactDetails}>
          <h1 className={styles.brand}>Girts Karcevskis</h1>

          <div>
            <h2 className={styles.heading}>Contact details:</h2>
            <p className={styles.contact}>
              Name: Girts Karcevskis
              <br />
              Phone: +49 176 56726448
              <br />
              Email: girts@gkarcevskis.com
              <br />
              Address: Suhler str. 108, 12629 Berlin
            </p>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2023. All rights reserved by Girts Karcevskis
        </p>
      </div>
    </>
  );
};

export default Footer;
