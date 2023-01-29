import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import styles from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={[styles.footer, "section"].join(' ')}>
      <PageLinks parentClass={styles.footer_links} itemClass={styles.footer_link}/>
      <SocialLinks parentClass={styles.footer_icons} itemClass={styles.footer_icon}/>
      <p className={styles.copyright}>
        Emre Karayaman
        <span id='date'>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default Footer
