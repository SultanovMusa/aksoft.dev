"use client";

import Typer from "@/components/ui/typer/Typer";
import styles from "./Baner.module.scss";

export const Baner = () => {
	return (
		<>
			<div className="container">
				<div className={styles.ser_bn}>
					<div className={styles.serbn_wrapper}>
						<div className={styles.serbn_info}>
							<h2 className={styles.top_text}>
								Разработка мобильного приложения и
							</h2>
							<h1 className={styles.mid_text}>современных веб сервисов</h1>
							<div className={styles.under_text}>
								<Typer text="Автоматизации бизнес-процессов с помощью современных технологии." />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
