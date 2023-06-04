import React, { useState, useEffect } from 'react';
import styles from './styles/Navbar.module.css';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import logo from '../images/logo-portfolio.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (openMenu && !event.target.closest(`.${styles.nav_header}`)) {
        toggleMenu();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [openMenu]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <img src={logo} alt='logo' className={styles.logo} />

          <button
            type='button'
            className={styles.nav_toggle}
            onClick={toggleMenu}
          >
            <i
              className={openMenu ? 'fas fa-xmark' : 'fas fa-bars'}
              onClick={toggleMenu}
            ></i>
          </button>
          {openMenu ? (
            <div className={styles.toggle_menu}>
              <PageLinks
                parentClass={styles.links_mobile}
                itemClass={styles.nav_link}
                onClick={toggleMenu}
              />
              <SocialLinks
                parentClass={styles.social_mobile}
                itemClass={styles.nav_icon}
              />
            </div>
          ) : null}
        </div>
        <PageLinks parentClass={styles.nav_links} itemClass={styles.nav_link} />
      </div>
    </nav>
  );
};

export default Navbar;
