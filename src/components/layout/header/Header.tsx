"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
	const router = useRouter();  

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 845) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const links = [
		{ title: "Главная", href: "/" },
		{ title: "Новости", href: "/news" },
		{ title: "Наши работы", href: "/works" },
		{ title: "Услуги", href: "/services" },
		{ title: "О нас", href: "/about" },
		{ title: "Контакты", href: "/contacts" },
	];

	const handleLinkClick = (href: string) => {
		setIsOpen(false);
		router.push(href);
	};

	return (
		<header className={styles.header}>
			{/* <div className="container"> */}
				<div className={styles.topSection}>
					<div className={`${styles.logo} ${isOpen ? styles.active : ""}`}>
						<h1 onClick={() => handleLinkClick("/")}>aksoft</h1>
					</div>
					<nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
						<ul>
							{links.map((item, index) => (
								<li key={index}>
									<Link
										href={item.href}
										onClick={() => handleLinkClick(item.href)}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={`${styles.contact} ${isOpen ? styles.active : ""}`}>
						<a href="tel:+996999886644">+996 999 88 66 44</a>
					</div>
					<div
						className={`${styles.burger} ${isOpen ? styles.active : ""}`}
						onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
