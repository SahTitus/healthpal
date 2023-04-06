import Link from "next/link";
import React from "react";
import styles from "../styles/Service.module.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const ServiceCard = ({ icon, title, desc, link, isLink }) => {
  return (
    <Reveal className="onStep" keyframes={fadeInUp} delay={300} duration={600}>
      <Link href={`${isLink ? link : ""}`}>
        <div className={styles.service__card}>
          <div className={styles.icon}>{icon}</div>
          <p>{title}</p>
          <span>{desc}</span>
        </div>
      </Link>
    </Reveal>
  );
};

export default ServiceCard;
