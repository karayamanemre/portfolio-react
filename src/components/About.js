import React from 'react';
import styles from './styles/About.module.css';
import { techStack } from '../data';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="About" subTitle="Me" />
      <div className={[styles.about_center, 'section-center'].join(' ')}>
        <article className={styles.about_info}>
          <p>
            I attended Microverse Coding School and participated in daily remote
            team programming sessions.
          </p>
          <p>
            Before software development, I managed pubs and restaurants.
            Although not development-related, I learned problem-solving,
            effective communication, multitasking, and more. I've been rewarded
            for my quality and customer service, and I bring the same passion to
            my software engineering. I'm also a musician and composer. I produce
            my own music from scratch. I want to use my creativity to design
            software.
          </p>
          <p>
            I've done a lot of remote work with coworkers in other time zones
            and cultures. Feel free to get in touch if you're interested and
            could use some help with a coding project.
          </p>
          <form
            method="get"
            action="https://karayamanemre.github.io/emre-portfolio/assets/EmreKarayamanResume.pdf"
            target="_blank"
          >
            <button type="submit" className="btn" target="_blank">
              Get my resume
            </button>
          </form>
        </article>
        <div className={styles.about_skills}>
          <ul className={styles.tech_stack}>
            {techStack.map((tech) => {
              return (
                <li className={styles.skill_item} key={tech.id}>
                  <img src={tech.img} alt="logo" />
                  <p>{tech.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <a href="https://github.com/karayamanemre" target='_blank' rel="noopener noreferrer">
        <img className={styles.gh_chart} src="https://ghchart.rshah.org/288AAD/karayamanemre" alt="EmreKarayaman's Github chart" />
      </a> */}
    </section>
  );
};

export default About;
