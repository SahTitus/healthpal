import React from "react";
import styles from "../styles/Hellocard.module.css";
import {
  Call,
  Facebook,
  LocationCityRounded,
  Mail,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Instagram } from "react-bootstrap-icons";

const HelloCard = () => {
  return (
    <div className={styles.hello}>
      <p className={styles.card__title}>Say hello to us!</p>
      <div className={styles.topText}>
        {" "}
        <span>Do you have any challenges?</span>
        <span>We would love to hear from you!</span>
      </div>
      <div className={styles.middle}>
        <div>
          <Mail />
          <a
            href="mailto:sahtitus58@gmail.com"
            aria-label="Email"
            className={styles.contact__option}
          >
            <p>sahtitus58@gmail.com</p>
          </a>
        </div>
        <div>
          <WhatsApp />
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=233595631886"
            className={styles.contact__option}
            aria-label="Whatsapp"
          >
            <p>Whatsapp</p>
          </a>
        </div>
        <div>
          <Call />
          <a
            aria-label="Telephone"
            href="tel:+233595631886"
            className={styles.contact__option}
          >
            <p>+233 595 631 886</p>
          </a>
        </div>
        <div>
          <LocationCityRounded />
          <a
            aria-label="location"
            target="blank"
            href="https://goo.gl/maps/5YtdZYvJo7zXmkkq7"
            className={styles.contact__option}
          >
            <p>Sunyani, Bono Region, Ghana </p>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.btm__caption}>Stay connected! 👉</div>
        <div className={styles.btm__followUsOption}>
          <Facebook className={styles.btm__followUsIcon} />
          <Instagram className={styles.btm__followUsIcon} />
          <YouTube className={styles.btm__followUsIcon} />
        </div>
      </div>
    </div>
  );
};

export default HelloCard;
