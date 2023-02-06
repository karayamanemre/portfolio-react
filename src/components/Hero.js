import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.hero_banner}>
        <h1>I'm Emre<br></br>Glad to see you!</h1>
        <p>
          I design and develop software! I can help you with developing a product, website, or feature for it. Examine some of my work and what I've done! If you like what you see and require coding for a project, feel free to contact me.
        </p>
        <a href='#portfolio' className={[styles.hero_btn, 'btn'].join(' ')}>
          portfolio
        </a>
      </div>
    </section>
  )
}

export default Hero
