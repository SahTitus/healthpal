import React from "react";
import { BookingForm, Services, Whyus } from "../components";
import HelloCard from "../components/HelloCard";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Your Healthcare Website</title>
        <meta
          name="description"
          content="Contact us to learn more about our healthcare services. Our team of experts is dedicated to providing personalized care and support to help you achieve optimal health. Call or email us today."
        />

        <meta
          name="keywords"
          content="healthcare, medical, services, team, contact us"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.yourhealthcarewebsite.com/about"
        />
      </Head>
      <div>
        <div className="contactDiv">
          {" "}
          <HelloCard />
        </div>
        <div className="contactDiv">
          {" "}
          <Whyus />
        </div>
        <div className="contactDiv">
          {" "}
          <BookingForm />
        </div>
        <div className="contactDiv">
          {" "}
          <Services />
        </div>
      </div>
    </>
  );
};

export default Contact;
