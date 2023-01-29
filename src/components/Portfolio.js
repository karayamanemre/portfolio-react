import React from 'react'
import Title from './Title'
import styles from './styles/Portfolio.module.css'
import { works } from '../data'
import Work from './Work'

const Portfolio = () => {
  return (
    <section className='section' id='portfolio'>
      <Title title='Portfolio' subTitle=''/>
      <div className={[styles.featured_center, 'section-center'].join(' ')}>
        {works.map((work) => {
          return (
            <Work key={work.id} {...work}/>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
