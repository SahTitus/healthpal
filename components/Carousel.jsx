import React from "react";
import styles from "../styles/Carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorCard from "./DoctorCard";
import blog2 from "../Images/blog2.jpg";
import blog1 from "../Images/blog1.jpg";

const classes = {
  root: {
    position: "relative",
  },
};


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.carousel}>
      <div style={classes.root}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            {/* <DoctorCard  width={500} height={400} /> */}
            <DoctorCard
              //   key={i}
              //   title={service.title}
              //   link={service.link}
              //   isLink
              //   icon={service.icon}
              //   desc={service.desc}
              img={blog2}
              name="John Doe"
              title="Dental Surgery"
              //   link={service.link}
              //   isLink
              // icon={<HealthAndSafety className={styles.serviceIcon}/>}
              width={500}
              height={400}
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
            />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            {/* <DoctorCard  width={500} height={400} /> */}
            <DoctorCard
              //   key={i}
              //   title={service.title}
              //   link={service.link}
              //   isLink
              //   icon={service.icon}
              //   desc={service.desc}
              img={blog1}
              name="Doc. Sah Titus"
              width={500}
              height={400}
              title="Medical Doctor"
              //   link={service.link}
              //   isLink
              // icon={<HealthAndSafety className={styles.serviceIcon}/>}
              desc="dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
