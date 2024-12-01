"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; 
import Head from "next/head";
import styles from "../Welcom.module.scss";


const ServiceAbout = () => {
	const router = useRouter();
	const { text } = useParams();

	const [title, setTitle] = useState<string>("");
	const [name, setName] = useState<string>("");

	useEffect(() => {
		const storedTitle = localStorage.getItem("serviceTitle");
		const storedName = localStorage.getItem("serviceName");

		if (storedTitle) {
			setTitle(storedTitle);
		}
		if (storedName) {
			setName(storedName);
		}
	}, []);

	useEffect(() => {
		document.title = `Aksoft | ${text || "Загрузка..."}`;
	}, [text]);

	const formattedTitle = title.split(".").map((sentence, index) => (
		<span key={index}>
			{sentence.trim() && `${sentence.trim()}.`}
			<br />
		</span>
	));

	return (
		<div className={styles.mox}>
			<Head>
				<title>Aksoft | {text ? text : "Загрузка..."}</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<div className={styles.hiddens}>
				<h2>{name}</h2>
				<div className={styles.box}>
					<span className={styles.spans} onClick={() => router.push("/services")}>Услуги</span>  <span>/ </span><span>{name}</span>
				</div>
				<p className={styles.p_text}>{formattedTitle}</p>
			</div>
		</div>
	);
};

export default ServiceAbout;
