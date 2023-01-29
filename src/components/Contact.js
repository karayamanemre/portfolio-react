import React from 'react'
import Title from './Title'
import styles from './styles/Contact.module.css'

const Contact = () => {
  return (
    <section className="section" id="contact">
      <Title title='Contact' subTitle='Me'/>
      <div className='section-center'>
        <p className={styles.contact_text}>
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding.<br></br>I’d love to help with it. 
        </p>
        <form className={styles.contact_form} action="https://formspree.io/f/xzbwzdvd" method="post" id="form">
          <label htmlFor="contact-name" hidden>Name</label>
          <input type="text" name="contact-name" placeholder="Your Name" className={styles.contact_element} id="contact-name"
            maxLength="30" required />
          <label htmlFor="contact-email" hidden>Email</label>
          <input type="email" name="contact-mail" placeholder="Your Email" className={styles.contact_element} id="contact-email"
            required />
          <label htmlFor="contact-message" hidden>Message</label>
          <textarea name="contact-message" id="contact-message" className={styles.contact_element} maxLength="500"
            placeholder="Your message" required></textarea>
          <button type="submit" className="btn">Get In Touch</button>
        </form>
      </div>  
    </section>
  )
}

export default Contact
