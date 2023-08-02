import Image from 'next/image';
import styles from '../styles/LandingBanner.module.css';
import doc from "../Images/d11.jpg"
const LandingBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImage}>
        <Image width="100%" height="100%" src={doc} alt="Banner Image" />
      </div>
      <div className={styles.bannerContent}>
        <h1>Stay Healthy, Stay Happy!</h1>
        <p>Get the advanced health services and expert advice</p>
        <p className={styles.button}>Learn More</p>
      </div>
    </div>
  );
};

export default LandingBanner;
