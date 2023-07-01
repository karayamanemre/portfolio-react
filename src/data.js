import cryptoMarket from "./images/crypto-market.png";
import kitap from "./images/kitaplardan.jpeg";
import weather from "./images/weather.png";
import earthquake from "./images/earthquake.png";
import moto from "./images/moto.png";
import techshop from "./images/techshop.png";
import homegrid from "./images/homegrid.png";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#portfolio", text: "portfolio" },
	{ id: 3, href: "#about", text: "about me" },
	{ id: 4, href: "#contact", text: "contact" },
];

export const socialLinks = [
	{
		id: 1,
		href: "https://github.com/karayamanemre",
		icon: "fa-brands fa-github",
	},
	{
		id: 2,
		href: "https://www.linkedin.com/in/emre-karayaman/",
		icon: "fa-brands fa-linkedin",
	},
	{
		id: 3,
		href: "https://twitter.com/KarayamanEmre",
		icon: "fa-brands fa-twitter",
	},
	{
		id: 4,
		href: "https://emrekarayaman.medium.com/",
		icon: "fa-brands fa-medium",
	},
	{
		id: 5,
		href: "https://angel.co/u/emre-karayaman",
		icon: "fa-brands fa-angellist",
	},
	{
		id: 6,
		href: "https://soundcloud.com/emrekarayaman",
		icon: "fa-brands fa-soundcloud",
	},
	{
		id: 7,
		href: "mailto:karayaman.emre@outlook.com",
		icon: "fa-solid fa-envelope",
	},
	{
		id: 8,
		href: "https://mastodon.social/@puerro",
		icon: "fa-brands fa-mastodon",
		rel: "me",
	},
];

export const techStack = [
	{
		id: 1,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/javascript.png",
		text: "JavaScript",
	},
	{
		id: 2,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/react.png",
		text: "React",
	},
	{
		id: 3,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/node.jpeg",
		text: "Node.js",
	},
	{
		id: 4,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/redux.png",
		text: "Redux",
	},
	{
		id: 5,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/ruby.png",
		text: "Ruby",
	},
	{
		id: 6,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/rails.png",
		text: "Ruby on Rails",
	},
	{
		id: 7,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/mongo.png",
		text: "MongoDB",
	},
	{
		id: 8,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/postgresql.png",
		text: "PostgreSQL",
	},
	{
		id: 9,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/bootstrap.png",
		text: "Bootstrap",
	},
	{
		id: 10,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/css3.png",
		text: "CSS",
	},
	{
		id: 11,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/wordpress.png",
		text: "WordPress",
	},
	{
		id: 12,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/html5.png",
		text: "HTML",
	},
	{
		id: 13,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/gitflow.png",
		text: "Gitflow",
	},
	{
		id: 14,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/webpack.png",
		text: "Webpack",
	},
	{
		id: 15,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/rspec.png",
		text: "RSpec",
	},
	{
		id: 16,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/jest.png",
		text: "Jest",
	},
	{
		id: 17,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/vite.png",
		text: "Vite",
	},
	{
		id: 18,
		img: "https://raw.githubusercontent.com/karayamanemre/emre-portfolio/main/assets/icons/tailwindcss.png",
		text: "Tailwind",
	},
];

export const works = [
	{
		id: 1,
		image: techshop,
		date: "2023",
		title: "TechShop",
		info: "TechShop is an eCommerce project that specializes in tech products. Users can browse through a wide range of products and add them to their cart.",
		tags: ["reactJs", "nodeJs", "mongoDB", "expressJs"],
		liveLink: "https://techshop-ktlq.onrender.com/",
		sourceLink: "https://github.com/karayamanemre/tech-shop",
	},
	{
		id: 2,
		image: homegrid,
		date: "2023",
		title: "Home Grid",
		info: "HomeGrid, is a real estate listing application designed for mobile. You can view houses for rent or sale, create listings, and log in using your email or Google account. You can also view the geolocation of a listing on a map.",
		tags: ["reactJs", "tailwindCSS", "leafletJs", "firestore"],
		liveLink: "https://homegrid-chi.vercel.app/",
		sourceLink: "https://github.com/karayamanemre/homegrid",
	},
	{
		id: 3,
		image: moto,
		date: "2023",
		title: "MotoMate",
		info: "MotoMate is a booking app that allows users to easily book and reserve motorcycles online. With MotoMate, users can log in and access a wide range of motorcycles to choose from.",
		tags: ["ruby on rails", "reactJs", "postgreSQL"],
		liveLink: "https://motomate-1002c.web.app/",
		sourceLink: "https://github.com/karayamanemre/moto-front-end",
	},
	{
		id: 4,
		image: earthquake,
		date: "2023",
		title: "Earthquakes",
		info: "A simple web application that displays a list and a map view of recent earthquakes, with the ability to filter by continent.",
		tags: ["javascript", "tailwindCSS", "leafletJs"],
		liveLink: "https://karayamanemre.github.io/earthquakes/",
		sourceLink: "https://github.com/karayamanemre/earthquakes",
	},
	{
		id: 5,
		image: cryptoMarket,
		date: "2022",
		title: "Crypto Market App",
		info: "Crypto Market is a SPA that allow users to check live prices of cryptocurrencies.",
		tags: ["reactJS", "redux", "tailwindCSS"],
		liveLink: "https://crypto-market-48bcb.web.app/",
		sourceLink: "https://github.com/karayamanemre/crypto-market-app",
	},
	{
		id: 6,
		image: weather,
		date: "2022",
		title: "Weather App",
		info: "This weather app provides real-time weather information for various cities. It features a handy option to switch between Celsius and Fahrenheit, making it adaptable to user preferences.",
		tags: ["reactJS", "vite", "tailwindCSS"],
		liveLink: "https://weather-react-karayamanemre.netlify.app/",
		sourceLink: "https://github.com/karayamanemre/weather-app-react",
	},
	{
		id: 7,
		image: kitap,
		date: "2019",
		title: "KitaplardanAnlamayanAdam",
		info: "A book review blog updated daily with new content. Designed in WordPress.",
		tags: ["wordpress", "css"],
		liveLink: "https://kitaplardananlamayanadam.com/",
	},
];
