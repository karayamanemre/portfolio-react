import cryptoMarket from './images/crypto-market.png';
import kitap from './images/kitaplardan.jpeg';
import weather from './images/weather.png';
import budget from './images/budget.png';
import earthquake from './images/earthquake.png';
import moto from './images/moto.png';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#portfolio', text: 'portfolio' },
  { id: 3, href: '#about', text: 'about me' },
  { id: 4, href: '#contact', text: 'contact' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/karayamanemre',
    icon: 'fa-brands fa-github',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/emre-karayaman/',
    icon: 'fa-brands fa-linkedin',
  },
  {
    id: 3,
    href: 'https://twitter.com/KarayamanEmre',
    icon: 'fa-brands fa-twitter',
  },
  {
    id: 4,
    href: 'https://emrekarayaman.medium.com/',
    icon: 'fa-brands fa-medium',
  },
  {
    id: 5,
    href: 'https://angel.co/u/emre-karayaman',
    icon: 'fa-brands fa-angellist',
  },
  {
    id: 6,
    href: 'https://soundcloud.com/emrekarayaman',
    icon: 'fa-brands fa-soundcloud',
  },
  {
    id: 7,
    href: 'mailto:karayaman.emre@outlook.com',
    icon: 'fa-solid fa-envelope',
  },
];

export const techStack = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/javascript.png',
    text: 'JavaScript',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/react.png',
    text: 'React',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/redux.png',
    text: 'Redux',
  },
  {
    id: 4,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/ruby.png',
    text: 'Ruby',
  },
  {
    id: 5,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/rails.png',
    text: 'Ruby on Rails',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/postgresql.png',
    text: 'PostgreSQL',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/bootstrap.png',
    text: 'Bootstrap',
  },
  {
    id: 7,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/css3.png',
    text: 'CSS',
  },
  {
    id: 8,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/wordpress.png',
    text: 'WordPress',
  },
  {
    id: 9,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/html5.png',
    text: 'HTML',
  },
  {
    id: 10,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/gitflow.png',
    text: 'Gitflow',
  },
  {
    id: 11,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/webpack.png',
    text: 'Webpack',
  },
  {
    id: 12,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/rspec.png',
    text: 'RSpec',
  },
  {
    id: 13,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/jest.png',
    text: 'Jest',
  },
  {
    id: 14,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/vite.png',
    text: 'Vite',
  },
  {
    id: 15,
    img: 'https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/tailwindcss.png',
    text: 'Tailwind',
  },
];

export const works = [
  {
    id: 1,
    image: moto,
    date: '2023',
    title: 'MotoMate',
    info: 'MotoMate is a web application for managing motorcycles. The application is built using React for the front-end, Rails for the back-end, and PostgreSQL as the database.',
    tags: ['ruby on rails', 'reactJs', 'postgreSQL'],
    liveLink: 'https://motomate-1002c.web.app/',
    sourceLink: 'https://github.com/karayamanemre/moto-front-end',
  },
  {
    id: 2,
    image: budget,
    date: '2023',
    title: 'Budget Tracker',
    info: 'Budget Tracker app is a user-friendly mobile application for budgeting that anyone may use to keep tabs on their spending.',
    tags: ['ruby on rails', 'postgresql'],
    liveLink: 'https://budget-tracker-xvkz.onrender.com/',
    sourceLink: 'https://github.com/karayamanemre/budget-tracker',
  },
  {
    id: 3,
    image: earthquake,
    date: '2023',
    title: 'Earthquakes',
    info: 'This is a simple web application built with JavaScript, Tailwind CSS, and LeafletJS that fetches earthquake data from the USGS API and displays it in a user-friendly way.',
    tags: ['javascript', 'tailwindCSS', 'leafletJS'],
    liveLink: 'https://karayamanemre.github.io/earthquakes/',
    sourceLink: 'https://github.com/karayamanemre/earthquakes',
  },
  {
    id: 4,
    image: cryptoMarket,
    date: '2022',
    title: 'Crypto Market App',
    info: 'Crypto Market is a SPA that allow users to check live prices of cryptocurrencies. Built with React and CoinGecko API.',
    tags: ['reactJS', 'redux', 'tailwindCSS'],
    liveLink: 'https://crypto-market-48bcb.web.app/',
    sourceLink: 'https://github.com/karayamanemre/crypto-market-app',
  },
  {
    id: 5,
    image: weather,
    date: '2022',
    title: 'Weather App',
    info: 'This weather app React project is built using Vite, a fast and optimized frontend development build tool, and OpenWeather API to retrieve weather information for various cities.',
    tags: ['reactJS', 'vite', 'tailwindCSS'],
    liveLink: 'https://weather-react-karayamanemre.netlify.app/',
    sourceLink: 'https://github.com/karayamanemre/weather-app-react',
  },
  {
    id: 6,
    image: kitap,
    date: '2019',
    title: 'KitaplardanAnlamayanAdam',
    info: 'A book review blog updated daily with new content. Designed in WordPress.',
    tags: ['wordpress', 'css'],
    liveLink: 'https://kitaplardananlamayanadam.com/',
  },
];
