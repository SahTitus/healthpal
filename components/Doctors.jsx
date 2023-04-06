import React from "react";
import DoctorCard from "./DoctorCard";
import styles from "../styles/Doctors.module.css";
import { HealthAndSafety } from "@mui/icons-material";
import Carousel from "./Carousel";
import { Reveal } from "react-awesome-reveal";
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

const Doctors = () => {
  return (
    <div className={styles.doctors__container}>
      <div className={styles.div__title}>
        <p>Our Doctors</p>
        <span>Excellent Medical Doctors</span>
      </div>
      <div className={styles.doctors}>
        {/* {services.map((service, i) => ( */}

        <div className={styles.carousel}>
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce
          >
        
            <Carousel />
          </Reveal>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Doctors;
