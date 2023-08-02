import React from "react";
import styles from "../styles/Navbar.module.css";
import { CaretRightFill, List, X } from "react-bootstrap-icons";
import { Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import logo from "../Images/logo.png";
import Image from "next/image";
// import { useRouter } from "next/router";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const closeSidebar = () => {
    setShowServices(!showServices);
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`${styles.navbar} `}>
      <Link aria-label="Home" href="/">
        <div className={styles.logo}>
          {/* <Image
            className={styles.logo__img}
            alt="gyaso logo"
            src={logo}
          /> */}
      <p>SYO</p>
        </div>
      </Link>
      <div className={styles.nav__right}>
        <ul className={`${styles.menu} ${showSidebar && styles.showSidebar}`}>
          <Link aria-label="Home" href="/" className={styles.menu__listItem}>
            <div className={styles.menu__listItem} onClick={closeSidebar}>
              Home
            </div>
          </Link>
          <Link
            aria-label="services"
            href="/services"
            className={styles.menu__listItem}
          >
            <div className={styles.menu__listItem} onClick={closeSidebar}>
              Services
            </div>
          </Link>

          <Link
            aria-label="about us"
            href="/about-us"
            className={styles.menu__listItem}
          >
            <div className={styles.menu__listItem} onClick={closeSidebar}>
              About us
            </div>
          </Link>

          <Link
            aria-label="contact us"
            href="/contact-us"
            className={styles.menu__listItem}
          >
            <div className={styles.menu__listItem} onClick={closeSidebar}>
              {" "}
              Contact Us
            </div>
          </Link>
        </ul>

        <div className={styles.nav__righBtns}>
          <Link href="/contact " aria-label="Book now">
            <Button className={styles.book_now} type="button">
              Book now
            </Button>
          </Link>
          {showSidebar ? (
            <X onClick={closeSidebar} className={styles.icon} />
          ) : (
            <List onClick={closeSidebar} className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
