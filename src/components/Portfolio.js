import React from 'react'
import Title from './Title'
import styles from './styles/Portfolio.module.css'
import { works } from '../data'

const Portfolio = () => {
  return (
    <section className='section' id='portfolio'>
      <Title title='Portfolio' subTitle=''/>
      <div className={[styles.featured_center, "section-center"].join(' ')}>
        {works.map((work) => {
          const { id, image, date, title, info, liveLink, sourceLink } = work;
          return (
            <article className={styles.work_card} key={id}>
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
                  <a href={liveLink} target='_blank' rel="noopener noreferrer">
                    See Live
                  </a>
                  <a href={sourceLink} target='_blank' rel="noopener noreferrer">
                    See Source
                  </a>
                </div>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio
