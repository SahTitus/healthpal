import React from "react";
import { BookingForm, Doctors, Services } from "../components";
import Whyus from "../components/Whyus";
import Head from "next/head";

const services = () => {
  return (
    <>
      <Head>
        <title>Services | Your Healthcare Website</title>
        <meta
          name="description"
          content="Find top-quality healthcare services in the Ghana with our experienced team of medical professionals. From routine check-ups to complex treatments, we offer personalized care to help you live your healthiest life. Contact us today to schedule an appointment."
        />

        <meta
          name="keywords"
          content="healthcare, medical, services, team, services"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.yourhealthcarewebsite.com/about"
        />
      </Head>
      <div className="services">
        {/* <div className="services__title">
        <p>Experience the difference in patient-centered care</p>
      </div> */}
        <Services />
        <br />
        <br />
        <br />
        <Whyus />
        <br />
        <br />
        <br />
        <br />
        <Doctors />
        <BookingForm />
      </div>
    </>
  );
};

export default services;
