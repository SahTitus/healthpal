import React from "react";
import styles from "../styles/Footer.module.css";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>
        {" "}
        <p>Healthpal</p>
      </div>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <p>About</p>
          <p>News</p>
          <p>Projects</p>
          <p>Privacy policy</p>
        </div>
        <div className={styles.footer__workHours}>
          <p className={styles.hrs__title}> WORKING HOURS</p>

          <div className={styles.schedule}>
            <p> Mon - Fri: 9:00AM - 9:00PM </p>
            <p> Sat: 9:00AM - 19:00PM </p>
            <p> Sun: Closed</p>
          </div>
          <div className={styles.footer__followUs}>
            <p>Stay connected!</p>
            <div className={styles.footer__followUsOption}>
              <Facebook className={styles.footer__followUsIcon} />
              <Instagram className={styles.footer__followUsIcon} />
              <YouTube className={styles.footer__followUsIcon} />
            </div>
          </div>
        </div>

        <div className={styles.footer__contactUs}>
          <p>Contact us</p>
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=233595631886"
            className={styles.contact__option}
            aria-label="Whatsapp"
          >
            <p>Whatsapp</p>
          </a>
          <a
            aria-label="Telephone"
            href="tel:+233595631886"
            className={styles.contact__option}
          >
            <p>+233 595 631 886</p>
          </a>

          <a
            href="mailto:sahtitus58@gmail.com"
            aria-label="Email"
            className={styles.contact__option}
          >
            <p>sahtitus58@gmail.com</p>
          </a>
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

      <div className={styles.footer__copyright}>
        <p>©️ 2023 Healthpal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
