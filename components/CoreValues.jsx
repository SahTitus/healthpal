import React from "react";
import styles from "../styles/CoreValuesCard.module.css";
import Image from "next/image";

const CoreValuesCard = ({ title, description, image }) => {
  return (
    <div className={styles.core__values__card}>
      <Image
        width={40}
        height={40}
        src={image}
        alt="Core Values Image"
        className={styles.core__values__card__image}
      />
      <p className={styles.core__values__card__title}>{title}</p>
      <p className={styles.core__values__card__description}>{description}</p>
    </div>
  );
};

export default CoreValuesCard;
