import React from 'react';
import { techStack } from '../data';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="About" subTitle="Me" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:px-60 px-10">
        <article className="mb-8 md:mb-0">
          <p className="mb-4">
            I attended Microverse Coding School and participated in daily remote
            team programming sessions.
          </p>
          <p className="mb-4">
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
          <a
            href="https://emrekarayaman.me/EmreKarayamanResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block mt-8"
          >
            <button className="btn">Get My Resume</button>
          </a>
        </article>
        <div className="flex flex-col items-center">
          <ul className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => {
              return (
                <li className="flex flex-col items-center" key={tech.id}>
                  <img src={tech.img} alt="logo" className="w-12 h-12" />
                  <p className="text-sm">{tech.text}</p>
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
        className="block mx-auto mt-8 w-90 md:w-850"
      >
        <img
          className="mx-auto sm:w-1/2 w-3/4"
          src="https://ghchart.rshah.org/288AAD/karayamanemre"
          alt="EmreKarayaman's Github chart"
        />
      </a>
    </section>
  );
};

export default About;
