import cryptoMarket from './images/crypto-market.png';
import todo from './images/todo.png';
import kanban from './images/kanban.png';
import bookmark from './images/bookmark.png';

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#portfolio', text: 'portfolio'},
  {id: 3, href: '#about', text: 'about me'},
  {id: 4, href: '#contact', text: 'contact'},
];

export const socialLinks = [
  {id: 1, href: 'https://github.com/karayamanemre', icon: 'fa-brands fa-github'},
  {id: 2, href: 'https://www.linkedin.com/in/emre-karayaman/', icon: 'fa-brands fa-linkedin'},
  {id: 3, href: 'https://twitter.com/KarayamanEmre', icon: 'fa-brands fa-twitter'},
  {id: 4, href: 'https://emrekarayaman.medium.com/', icon: 'fa-brands fa-medium'},
  {id: 5, href: 'https://angel.co/u/emre-karayaman', icon: 'fa-brands fa-angellist'},
  {id: 6, href: 'https://soundcloud.com/emrekarayaman', icon: 'fa-brands fa-soundcloud'},
  {id: 7, href: 'mailto:karayaman.emre@outlook.com', icon: 'fa-solid fa-envelope'},
]

export const techStack = [
  {id: 1, img: 'https://karayamanemre.github.io/assets/icons/javascript.png', text: 'JavaScript'},
  {id: 2, img: 'https://karayamanemre.github.io/assets/icons/react.png', text: 'React'},
  {id: 3, img: 'https://karayamanemre.github.io/assets/icons/redux.png', text: 'Redux'},
  {id: 4, img: 'https://karayamanemre.github.io/assets/icons/ruby.png', text: 'Ruby'},
  {id: 5, img: 'https://karayamanemre.github.io/assets/icons/rails.png', text: 'Ruby on Rails'},
  {id: 6, img: 'https://karayamanemre.github.io/assets/icons/postgresql.png', text: 'PostgreSQL'},
  {id: 6, img: 'https://karayamanemre.github.io/assets/icons/bootstrap.png', text: 'Bootstrap'},
  {id: 7, img: 'https://karayamanemre.github.io/assets/icons/css3.png', text: 'CSS'},
  {id: 8, img: 'https://karayamanemre.github.io/assets/icons/wordpress.png', text: 'WordPress'},
  {id: 9, img: 'https://karayamanemre.github.io/assets/icons/html5.png', text: 'HTML'},
  {id: 10, img: 'https://karayamanemre.github.io/assets/icons/gitflow.png', text: 'Gitflow'},
  {id: 11, img: 'https://karayamanemre.github.io/assets/icons/webpack.png', text: 'Webpack'},
  {id: 12, img: 'https://karayamanemre.github.io/assets/icons/rspec.png', text: 'RSpec'},
  {id: 13, img: 'https://karayamanemre.github.io/assets/icons/jest.png', text: 'Jest'},
]

export const works = [
  {
    id: 1,
    image: cryptoMarket,
    date: '2022',
    title: 'Crypto Market App',
    info: 'Crypto Market is a SPA that allow users to check live prices of cryptocurrencies. Built with React and CoinGecko API.',
    liveLink: 'https://cryptomarketapp-karayamanemre.netlify.app/',
    sourceLink: 'https://github.com/karayamanemre/crypto-market-app'
  },
  {
    id: 2,
    image: todo,
    date: '2022',
    title: 'To-Do List',
    info: 'A minimal "To-do list" app that helps to organize your day. It simply creates a list of the tasks you have to complete along with the option to check them off. Built with JavaScript.',
    liveLink: 'https://karayamanemre.github.io/to-do-list/dist/',
    sourceLink: 'https://github.com/karayamanemre/to-do-list'
  },
  {
    id: 3,
    image: kanban,
    date: '2022',
    title: 'Kanban Board',
    info: 'Simple Kanban Board built with Vanilla JavaScript.',
    liveLink: 'https://karayamanemre.github.io/kanban-board/',
    sourceLink: 'https://github.com/karayamanemre/kanban-board'
  },
  {
    id: 4,
    image: bookmark,
    date: '2022',
    title: 'Bookmark Page',
    info: 'A web page for saving and storing bookmarks using local storage in browser. Built with JavaScript.',
    liveLink: 'https://karayamanemre.github.io/bookmark-page/',
    sourceLink: 'https://github.com/karayamanemre/bookmark-page'
  },
]