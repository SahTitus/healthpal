import { Facebook, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Doctors.module.css";
import blog2 from "../Images/blog2.jpg";
import blog1 from "../Images/blog1.jpg";

const DoctorCard = ({ title, name, img }) => {
  return (
    <div className={styles.doctor__card}>
      <div className={styles.image__container}>
        <Image
          className={styles.doc__image}
          src={blog1}
          alt="Doc1"
          // width={200}
          // height={300}
        />
      </div>
      <div className={styles.doc__info}>
        <div className={styles.doc__details}>
          <p>{name}</p>
        <span>{title}</span>
          <span className={styles.doc__desc}>
            Lorem, ipsum dolor sit amet di beatae! i officiis ullam autem
            repellat sapiente.
          </span>
        </div>
        <div className={styles.social__handles}>
          <a   aria-label="Facebook" href="#" target="_blank" className={styles.media__options}>
            {" "}
            <Facebook className={styles.media__icon} />
          </a>
          <a   aria-label="Twitter" href="#" target="_blank" className={styles.media__options}>
            {" "}
            <Twitter className={styles.media__icon} />
          </a>
          <a   aria-label="LinkedIn" href="#" target="_blank" className={styles.media__options}>
            {" "}
            <LinkedIn className={styles.media__icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
