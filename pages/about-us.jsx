import Head from "next/head";
import styles from "../styles/About.module.css";
import CoreValuesSection from "../components/CoreValuesSectio";
import { BookingForm, Services, Whyus } from "../components";
import HelloCard from "../components/HelloCard";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Your Healthcare Website</title>
        <meta
          name="description"
          content="Learn more about our healthcare services and team at Your Healthcare Website."
        />
        <meta
          name="keywords"
          content="healthcare, medical, services, team, about us"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.yourhealthcarewebsite.com/about"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>About Us</h1>
          <p>
            We are a team of experienced healthcare professionals dedicated to
            providing high-quality medical services to our patients. Our mission
            is to improve the health and well-being of our community by
            delivering compassionate and patient-centered care.
          </p>
        </div>
        <CoreValuesSection />
        <HelloCard />
    <Services />
    <br />
    <br />
    <Whyus />
    <br />
    <br />
    <br />
    <BookingForm />
      
      </div>
    </>
  );
};

export default About;
