"use client";

import { useEffect, useState } from "react";

import styles from "../styles.module.scss";
import { useRouter } from "next/navigation";

const WorksAbout = () => {
	const router = useRouter();
	const [title, setTitle] = useState<string>("");
	const [name, setName] = useState<string>("");

	useEffect(() => {
		const storedDescriptions = localStorage.getItem("worksDescriptions");
		const storedName = localStorage.getItem("serviceName");
		if (storedDescriptions) {
			setTitle(storedDescriptions);
		}
		if (storedName) {
			setName(storedName);
		}
		console.log(storedDescriptions);
	}, []);

	const formattedTitle = title.split(".").map((sentence, index) => (
		<span key={index}>
			{sentence.trim() && `${sentence.trim()}.`}
			<br />
		</span>
	));

	return (
		<div className={styles.lox}>
			<div className="container">
				<div className={styles.hiddens}>
					<h2>{name}</h2>
					<div className={styles.box}>
						<span
							className={styles.spans}
							onClick={() => router.push("/works")}>
							Наши работы
						</span>
						<span> / </span>
						<span>{name}</span>
					</div>
					<p className={styles.p_text}>{formattedTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default WorksAbout;
