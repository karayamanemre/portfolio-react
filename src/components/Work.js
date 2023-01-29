import React from 'react'
import styles from './styles/Portfolio.module.css'

const Work = ({ image, date, title, info, liveLink, sourceLink }) => {
  return (
    <article className={styles.work_card}>
      <div className={styles.work_img_container}>
        <img src={image} className={styles.work_img} alt={title} />
        <p className={styles.work_date}>{date}</p>
      </div>
      <div className={styles.work_info}>
        <div className={styles.work_title}>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className={styles.work_footer}>
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>
            See Live
          </a>
          <a href={sourceLink} target='_blank' rel='noopener noreferrer'>
            See Source
          </a>
        </div>
      </div>
    </article>
  )
}

export default Work
