import React from "react";
import PageLinks from "./PageLinks";
import styles from "./styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={[styles.footer, "section"].join(" ")}>
			<PageLinks
				parentClass={styles.footer_links}
				itemClass={styles.footer_link}
			/>

			<p className={styles.copyright}>
				Emre Karayaman
				<span id='date'>{new Date().getFullYear()}</span>
			</p>
		</footer>
	);
};

export default Footer;
