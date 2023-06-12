import React from 'react';
import Title from './Title';
import SocialLinks from './SocialLinks';
import styles from './styles/Contact.module.css';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <Title title='Contact' subTitle='Me' />
      <div className='section-center'>
        <p className={styles.contact_text}>
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding.<br></br>I’d love
          to help with it.
        </p>
        <form
          className={styles.contact_form}
          action='https://formspree.io/f/xzbwzdvd'
          method='post'
          id='form'
          target='_blank'
        >
          <label htmlFor='contact-name' hidden>
            Name
          </label>
          <input
            type='text'
            name='contact-name'
            placeholder='Your Name'
            className={styles.contact_element}
            id='contact-name'
            maxLength='30'
            required
          />
          <label htmlFor='contact-email' hidden>
            Email
          </label>
          <input
            type='email'
            name='contact-mail'
            placeholder='Your Email'
            className={styles.contact_element}
            id='contact-email'
            required
          />
          <label htmlFor='contact-message' hidden>
            Message
          </label>
          <textarea
            name='contact-message'
            id='contact-message'
            className={styles.contact_element}
            maxLength='500'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn'>
            Get In Touch
          </button>
        </form>
        <SocialLinks
          parentClass={styles.contact_social_links}
          itemClass={styles.contact_social_link}
        />
      </div>
    </section>
  );
};

export default Contact;
