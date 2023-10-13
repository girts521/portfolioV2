import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={styles.container}>
        <h1>Services</h1>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <h2>Custom full web application</h2>
          <div className={styles.description}>
            <p>
              I will develop a fully functional web application which will
              include all the functionality needed for your use case
            </p>
            <ul>
              <li>Blog</li>
              <li>User login</li>
              <li>Payment integration</li>
              <li>E-commerce</li>
              <li>And more</li>
            </ul>
          </div>
        </div>

        <div className={styles.service}>
          <h2>Brochure 1-3 page website</h2>
          <div className={styles.description}>
            <p>
              I will design and develop a custom website for your business that
              will help attract customers
            </p>
            <ul>
              <li>Informational website about your services</li>
              <li>User forms for contact, lead collection</li>
              <li>And more</li>
            </ul>
          </div>
        </div>

        <div className={styles.service}>
          <h2>Existing website update</h2>
          <div className={styles.description}>
            <p>
              If your website needs a new modern look, I will help to design and
              update it. Also, I can test and fix any functionality or add some
              new functionality which is currently missing.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <h2>Magento e-commerce</h2>
          <div className={styles.description}>
            <p>
              I have experience working with various Magento 2 e-commerce
              websites. I can develop new or fix an existing magento 2 website
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <h2>Facebook ads management</h2>
          <div className={styles.description}>
            <p>
              Confused with ads manager, business manager, pixel, audiences...
              and just want to launch ads?
              <br /> <br />
               I have seen banhammers and successful
              accounts. I am familiar with all the ad rules and best practices.
              I am here to help!
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <h2>Facebook pixel management</h2>
          <div className={styles.description}>
            <p>
              I can also help setting up pixel on the website and manage all the
              events. Or troubleshoot a current setup. I know all the best
              practices and can identify potential issues.
            </p>
          </div>
        </div>
      </div>

      <p className={styles.text}>
        Every website will be custom made using best practices. This allows to
        achieve a modern looking website with performance and loading speeds
        comparable to the worlds best websites. 
        <br /> <br />
        If you are interested in any of
        the services please contact me via email or on LinkedIn. Every project
        will be discussed, assessed and then the price will be established. But
        in general I charge 25 euro per hour.
      </p>
    </div>
  );
}
