import React from 'react'
import { pageLinks } from '../data'
import styles from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={[styles.footer, "section"].join(' ')}>
      
      <ul className={styles.footer_links}>
        {pageLinks.map((link) =>{
            return (
              <li key={link.id}>
                <a href={link.href} className={styles.footer_link}>
                  {link.text}
                </a>
              </li>
            )
          })}
      </ul>
      <p className={styles.copyright}>
        Emre Karayaman
        <span id='date'>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default Footer
