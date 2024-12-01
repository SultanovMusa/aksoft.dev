"use client"

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";


const About: FC = () => {
	const [animationCompleted, setAnimationCompleted] = useState(false);

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	useEffect(() => {
		setAnimationCompleted(true);
	}, []);

	return (
		<section className={styles.sections}>
	
			<motion.div
				className={styles.about}
				initial={animationCompleted ? "visible" : "hidden"}
				animate={animationCompleted ? "visible" : "hidden"}
				variants={container}>
				<h1>О компании Aksoft</h1>

				<div>
					<h3>Наша миссия - воплощать самые смелые идеи в цифровой жизнь!</h3>
					<br />
					<p>
						Мы - команда профессионалов, специализирующихся на разработке
						сайтов, веб-сервисов и приложений. Мы знаем как сделать ваше
						присутствие в интернете эффективным.
					</p>

					<p>
						Вдохновленные технологиями, мы создаем красивые и функциональные
						продукты, которые приносят результаты нашим клиентам.{" "}
					</p>
				</div>

				<div>
					<br />
					<h3>Наши преимущества:</h3>
					<br />
					<ul>
						<li>🎯 Фокус на автоматизацию бизнес-процессов</li>
						<li>💡 Инновационный подход и современные технологии</li>
						<li>⚡️Команда профессиональных разработчиков</li>
						<li>💵 Ориентация на результат клиента</li>
					</ul>
				</div>

				<p>
					Мы готовы стать вашим технологическим партнером и воплотить любые идеи
					в жизнь - от сайтов до веб и мобильных приложений.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
