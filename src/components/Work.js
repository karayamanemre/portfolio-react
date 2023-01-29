import React from 'react'
import styles from './styles/Portfolio.module.css'
import { works } from '../data'

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
          <p>
            <span>
              <i className='fas fa_map'></i>
            </span>
            {liveLink}
          </p>
          <p>{sourceLink} days</p>
        </div>
      </div>
    </article>
  )
}
export default Work
