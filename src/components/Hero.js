import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.hero_banner}>
        <h1>I'm Emre<br></br>Glad to see you!</h1>
        <p>
          I work on developing software! I can help you make a product, a website, or a feature for it. Check out some of my work and what I've done! If you like what you see and need coding for a project, don't be afraid to get in touch.
        </p>
        <a href='#portfolio' className={[styles.hero_btn, 'btn'].join(' ')}>
          portfolio
        </a>
      </div>
    </section>
  )
}

export default Hero
