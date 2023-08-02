import React from "react";
import DoctorCard from "./DoctorCard";
import styles from "../styles/Doctors.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import blog2 from "../Images/blog2.jpg";
import blog1 from "../Images/blog1.jpg";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: blog2,
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialty: "Oncology",
    image: blog2,
  },
  // Add more doctors as needed
];

const Doctors = () => {
  return (
    <div className={styles.doctors__container}>
      <div className={styles.div__title}>
        <p>Our Doctors</p>
        <span>Excellent Medical Doctors</span>
      </div>
      <div className={styles.doctors}>
        <div className={styles.carousel}>
          <Slider {...settings}>
            <DoctorCard name="Doc. Sah Titus" title="Medical Doctor" />
            <DoctorCard name="Hon Kong" title="Surgical Doctor" />
            <DoctorCard name="Isaa Gin" title="Medical Doctor" />
            <DoctorCard name="Doc. Sah Titus" title="Medical Doctor" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
