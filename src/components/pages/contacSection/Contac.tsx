
import  { FC } from "react";
import styles from "./Contac.module.scss";


const Contac: FC = () => {
	return (
		
		<section className={styles.sectoins}>

			<div className={styles.contact}>
				<div className={styles.contact_wrapper}>
					<div className={styles.contact_info}>
						<h1 className={styles.contact_desc}>Контакты</h1>
						<ul className={styles.contact_list}>
							<li className={styles.contact_item}>
								<h4>E-Mail</h4>
								<h5>aksoftkg@gmail.com</h5>
							</li>
							<li className={styles.contact_item}>
								<h4>Телефон</h4>
								<h5
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}>
									<a href="tel:+996999886644">+996 999 88 66 44</a>
									<a href="tel:+996505088099">+996 505 088 099</a>
								</h5>
							</li>
							<li className={styles.contact_item}>
								<h4>Адрес</h4>
								<h5>г. Бишкек, ул. Игембердиева 1А, БЦ Аврора</h5>
							</li>
							<li className={styles.contact_item}>
								<h4>Соц. сети</h4>
								<h5>
									<a href="https://www.instagram.com/aksoftdev/" target="blank">
									Instagram
										
									</a>
								</h5>
							</li>
						</ul>
					</div>
					<div className={styles.location}>
						<div className="mapouter">
							<div className="gmap_canvas">
								<iframe
									src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1b8e6820158e06920c9462510cdf8245f0259237a54e040c6093047fbc22a95&amp;source=constructor"
									width="500"
									height="400"
									frameBorder="0"></iframe>
								<style>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 100%;
          width: 100%;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          height: 100%;
          width: 100%;
        }
      `}</style>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contac;
