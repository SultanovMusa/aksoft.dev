"use client";

import { FC, useRef } from "react";
import { CardThree } from "@/components/pages/cardThree/CardThree";
import DentApp from "@/components/asset/photo_2023-08-04_10-55-31.jpg";
import Breath from "@/components/asset/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "@/components/asset/iphone-640x480.jpeg";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const Works: FC = () => {
	// const dentappRef = useRef<HTMLDivElement>(null);
	// const breathRef = useRef<HTMLDivElement>(null);
	// const cheberRef = useRef<HTMLDivElement>(null);
	const onTopRef = useRef<HTMLDivElement>(null);

	const data = [
		{
			id: 1,
			name: "DentApp",
			img: DentApp,
			title: "Приложение для автоматизации стоматологии.",
			descriptions: `	Добро пожаловать в будущее стоматологической заботы с нашим
								инновационным приложением! Мы с гордостью представляем вам
								революционное решение для стоматологических клиник, которое
								упростит и усовершенствует ваши операции, обеспечивая
								беспрецедентный уровень комфорта для вас и ваших пациентов. Наше
								приложение - это интеллектуальная центральная система для
								управления вашей стоматологической клиникой. С момента, как
								пациент пересекает ваш порог, и до момента, как уходит с
								улыбкой, наше приложение предоставляет безупречный сервис и
								оптимизированные процессы. Система учета клиентов позволяет вам
								легко и удобно хранить всю важную информацию о ваших пациентах:
								контакты, историю зубов, процедуры и даже предпочтения. Никогда
								больше не теряйте данные или забывайте детали. Предварительная
								запись клиентов теперь максимально удобна. Ваши пациенты могут
								выбрать удобное для них время и день, и система автоматически
								учитывает доступные слоты. Никакой головной боли с организацией
								расписания! Наши уведомления через WhatsApp и SMS держат ваших
								пациентов в курсе. Они получат напоминания о предстоящей записи,
								а также важные сообщения от клиники. Коммуникация становится
								легкой и эффективной. Аналитика и отчеты - это инструмент,
								который помогает вам принимать информированные решения. Вы
								сможете анализировать данные по посещениям, процедурам, доходам
								и многому другому. Это помогает вам улучшить качество
								обслуживания и оптимизировать бизнес-процессы. Мы готовы помочь
								вашей стоматологической клинике взлететь на новый уровень. Ваша
								эффективность, удовлетворенность пациентов и рост бизнеса - вот
								наши главные приоритеты. Откройте двери в будущее стоматологии с
								нашим приложением. Свяжитесь с нами сегодня, чтобы узнать, как
								мы можем адаптировать наше решение под ваши потребности	`,
		},
		{
			id: 2,
			name: "Breate of prodiction",
			img: Breath,
			title: "Приложение  для автоматизации швейных цехов.",
			descriptions: `		Добро пожаловать в мир инновационной текстильной автоматизации!
								Представляем вам наше уникальное приложение, разработанное
								специально для оптимизации и улучшения производства в вашем
								швейном цехе. Связь в режиме реального времени: Наше приложение
								позволяет вам подключиться к вашему производству в любой точке
								мира. Теперь вы можете мониторить статус производства,
								отслеживать ход выполнения заказов и получать уведомления о
								важных событиях – все это в режиме онлайн. Отчетность и
								аналитика: Применяя передовые аналитические инструменты,
								приложение генерирует подробные отчеты о производственной
								деятельности. Вы сможете оценить эффективность каждого
								сотрудника, контролировать расход материалов, а также
								оптимизировать рабочие процессы для достижения максимальной
								производительности. Учет рабочего времени: Отслеживайте рабочее
								время сотрудников в режиме реального времени. Вы точно узнаете,
								сколько времени каждый работник провел за задачами, повышая
								точность учета и обеспечивая справедливую оплату труда.
								Глобальное сотрудничество: Приложение создает возможность для
								эффективного сотрудничества с партнерами и клиентами по всему
								миру. Вы сможете легко обмениваться информацией, делиться
								обновлениями и координировать производство даже на больших
								расстояниях.`,
		},
		{
			id: 3,
			name: "Cheber",
			img: Cheber,
			title: "Приложение  для автоматизации бронирования.",
			descriptions: `		Добро пожаловать в мир уникальной автоматизации для вашего
								бизнеса! Представляем вам наше инновационное приложение,
								специально разработанное для всех типов компаний,
								предоставляющих услуги, будь то барбершоп, салон красоты, студия
								массажа или что-либо еще. Позвольте вашему бизнесу войти в новую
								эру эффективности и удобства. Никаких сложных телефонных звонков
								или личных визитов больше не нужно. Наше приложение позволяет
								вашим клиентам предварительно записаться на услуги прямо из дома
								или в любом другом удобном месте. Просто пара касаний – и вы в
								списке ожидания. С легкостью поддерживайте активную связь с
								вашими клиентами через SMS и WhatsApp уведомления. Напоминания о
								предстоящих записях, акциях или специальных предложениях будут
								доставляться напрямую в их карманы. Наша мощная аналитика
								поможет вам лучше понять ваш бизнес. Получайте детальные отчеты
								по активности клиентов, анализируйте популярные услуги,
								оценивайте эффективность сотрудников и принимайте обоснованные
								решения для дальнейшего роста. Организуйте свой рабочий день по
								минутам! С нашим приложением вы можете легко управлять
								расписанием сотрудников, благодаря функции предварительной
								организации рабочего дня. Никаких недоразумений или перекрестных
								записей – только четкость и планирование ваших ресурсов. Не
								упустите шанс сделать ваш бизнес более доступным и удобным для
								ваших клиентов. Переходите на новый уровень с нашим уникальным
								приложением для автоматизации услуг. Создайте более эффективное
								рабочее окружение, где клиенты могут наслаждаться беззаботным
								процессом заказа и получения услуг. `,
		},
	];

	console.log(data);

	const { push } = useRouter();
	const handleCheberClick = (name: string, descriptions: string) => {
		localStorage.setItem("worksDescriptions", descriptions);
		localStorage.setItem("serviceName", name);
		push(`/works/${name}`);
	};

	return (
		<section className={styles.section}>
			<div ref={onTopRef} className={styles.content}>
				<h1>Наши работы</h1>
				<div className={styles.box}>
					{data.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								handleCheberClick(item.name, item.descriptions);
							}}>
							<CardThree image={item.img} name={item.name} title={item.title} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;
