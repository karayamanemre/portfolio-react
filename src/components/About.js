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
          I participated in significant remote team programming while studying at Microverse Web Development Bootcamp to improve my software development skills. My previous work in hospitality management developed important abilities like problem-solving and good communication, which I now use in my role in software engineering. In addition to my technical abilities, I use my creative side to compose and produce music, giving my work a unique touch. Currently, as a Frontend Developer at <a href='https://assatekno.com/' target="_blank"
            rel="noreferrer"
          >Assa Technology</a>, I am now focusing on providing high-quality software solutions. I am constantly interested in new coding projects and partnerships, so please contact me if my abilities match your requirements.
          </p>
          <a
            href="https://emrekarayaman.me/EmreKarayamanResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Get My Resume</button>
          </a>
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
      <a
        href="https://github.com/karayamanemre"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.gh_chart}
          src="https://ghchart.rshah.org/288AAD/karayamanemre"
          alt="EmreKarayaman's Github chart"
        />
      </a>
    </section>
  );
};

export default About;
