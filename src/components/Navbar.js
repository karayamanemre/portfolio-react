import React from 'react'
import styles from './styles/Navbar.module.css'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <span>Emre Karayaman</span>
          <button type='button' className={styles.nav_toggle} id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks parentClass={styles.nav_links} itemClass={styles.nav_link}/>
        <SocialLinks parentClass={styles.nav_icons} itemClass={styles.nav_icon}/>
      </div>
    </nav>
  )
}

export default Navbar
