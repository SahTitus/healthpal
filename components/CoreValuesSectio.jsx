import inte from "../Images/inte.png";
import coll from "../Images/coll.png";
import passionate from "../Images/passionate.png";
import inno from "../Images/inno.png";
import rating from "../Images/rating.png";
import excellent from "../Images/excellent.png";
import CoreValuesCard from "./CoreValues";
import styles from '../styles/CoreValuesCard.module.css'
import { values } from "../constant";

const CoreValuesSection = () => {
  return (
    <div className={styles.coreSection__wrapper}>
        <p className={styles.title}>Our Core Values</p>
   <div className={styles.coreSection}>   <CoreValuesCard
        title="Integrity"
        description={values.integrity}
        image={inte}
      />
      <CoreValuesCard
        title="Passion"
        description={values.passion}
        image={passionate}
      />
      <CoreValuesCard
        title="Clients First"
        description={values.client}
        image={rating}
      />
      <CoreValuesCard
        title="Innovation"
        description={values.innovation}
        image={inno}
      />
      <CoreValuesCard
        title="Collaboration"
        description={values.collabo}
        image={coll}
      />
      <CoreValuesCard
        title="Excellence"
        description={values.excel}
        image={excellent}
      /></div>
    </div>
  );
}

export default CoreValuesSection;
