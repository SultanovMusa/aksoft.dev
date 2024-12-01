import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { RiTelegramFill } from "react-icons/ri";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.logo}>
						<h1 className={styles.logo_text}>aksoft</h1>
						<div data-aos="fade-up" className={styles.contac}>
							<div className={styles.icon}>
								<BsWhatsapp />
								<a href="//wa.me/996999886644" target="_blank">+996 999 88 66 44</a>
							</div>
							<div className={styles.icon}>
								<FiInstagram />
								<a href="https://www.instagram.com/aksoftdev/" target="_blank" >aksoftdev</a>
							</div>
							<div className={styles.icon}>
								<RiTelegramFill />
								<a className={styles.contac_p}>@jakshybala</a>
							</div>
						</div>
					</div>
					<hr />
					<h2 className={styles.h2}>
						Создавать - это наша страсть, это то, что делает нас живыми.
					</h2>
					<h3 className={styles.h3}>© 2024 aksoft. Все права защищены</h3>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
