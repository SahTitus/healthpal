import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "../styles/Service.module.css";
import { HealthAndSafety } from "@mui/icons-material";

const Services = () => {
  return (
    <div className={styles.services__container}>
      <br />
      <div className={styles.div__title}>
        <p>Services</p>
        <span>Excellent Medical Services</span>
      </div>
      <br />
  
      <div className={styles.services}>
        {/* {services.map((service, i) => ( */}
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="X-Ray"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="CT Scan"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="Ultrasound"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="Mammography"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="Endoscopy"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="ECG"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="DNA Test"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="Medical Lab & Pathology"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
          //   key={i}
          //   title={service.title}
          //   link={service.link}
          //   isLink
          //   icon={service.icon}
          //   desc={service.desc}

          title="Routine Medical Checkup"
          //   link={service.link}
          //   isLink
          icon={<HealthAndSafety className={styles.serviceIcon} />}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />

        {/* ))} */}
      </div>
    </div>
  );
};

export default Services;
