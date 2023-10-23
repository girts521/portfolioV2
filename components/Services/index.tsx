import styles from "./Services.module.scss";
import Service from "../Service";

export default function Services() {
  return (
    <div className={styles.container}>
      <h1>Services</h1>
      <div className={styles.servicesContainer}>
        <Service
          title="Custom full web application"
          description="I will develop a fully functional web application which will include all the functionality needed for your use case"
          list={[
            "Blog",
            "User login",
            "Payment integration",
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
          description="If your website needs a new modern look, I will help to design and update it. Also, I can test and fix any functionality or add some new functionality which is currently missing."
          image="/update.png"
        />

        <Service
          title="Magento e-commerce"
          description="I have experience working with various Magento 2 e-commerce websites. I can develop new or fix an existing magento 2 website"
          image="ecommerce.png"
        />

        <Service
          title="Facebook ads management"
          description="Confused with ads manager, business manager, pixel, audiences... and just want to launch ads? I have seen banhammers and successful accounts. I am familiar with all the ad rules and best practices. I am here to help!"
          image="/f_ads.png"
        />

        <Service
          title="Facebook pixel management"
          description="I can also help setting up pixel on the website and manage all the events. Or troubleshoot a current setup. I know all the best practices and can identify potential issues."
          image="/pixel.png"
        />
      </div>

      <p className={styles.text}>
        Each website is tailor-made using industry best practices, ensuring a
        modern design with top-tier performance and speed. <br /> <br />
        Interested in a service?
        <br />
        Reach out!
        <br />
        <br />
        All projects are individually assessed before pricing.
      </p>
    </div>
  );
}
