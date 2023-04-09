import React from 'react'
import styles from "../styles/About.module.css";

const Whyus = () => {
  return (
    <div className={styles.whyUs}>
          <p className={styles.whyUsCaption}>Why Choose Us</p>
          <div className={styles.why__usOptions}>
            <div className={styles.why__usOption}>
              <p>Free</p>
              <span>Ambulance</span>
            </div>
            <div className={styles.why__usOption}>
              <p>Accurate</p>
              <span>Testing</span>
            </div>
            <div className={styles.why__usOption}>
              <p>Emergency</p>
              <span>Services</span>
            </div>
            <div className={styles.why__usOption}>
              <p>Qualified</p>
              <span>Doctors</span>
            </div>
          </div>
        </div>
  )
}

export default Whyus