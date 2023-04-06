import React from 'react'
import ServiceCard from './ServiceCard'
import styles from "../styles/Service.module.css"
import { HealthAndSafety } from '@mui/icons-material'

const Services = () => {
  return (
    <div className={styles.services__container}>
    <div className={styles.div__title}>
      <p>Services</p>
      <span>Excellent Medical Services</span>
    </div>
    <div className={styles.services}>
      {/* {services.map((service, i) => ( */}
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        <ServiceCard
        //   key={i}
        //   title={service.title}
        //   link={service.link}
        //   isLink
        //   icon={service.icon}
        //   desc={service.desc}


          title="Dental Surgery"
        //   link={service.link}
        //   isLink
        icon={<HealthAndSafety className={styles.serviceIcon}/>}
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eius vel dolorem mollitia voluptatem, dignissimo"
        />
        
      {/* ))} */}
    </div>
  </div>
  )
}

export default Services