/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CardThree } from "@/components/pages/cardThree/CardThree";
import styles from "./style.module.scss";
import Head from "next/head";


const News = () => {
	const [data, setData] = useState<any>([]);
	const url = `https://aksoft.dev/max/api/news?populate=newsCard.image`;

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok " + response.statusText);
				}
				return response.json();
			})
			.then((response) => {
				const sortedData = response.data[0].attributes.newsCard.sort(
					(a: any, b: any) =>
						new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				);
				setData({ ...response.data[0].attributes, newsCard: sortedData });
			})
			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error);
			});
	}, []);

	console.log(data, "this is data mufa ");

	return (
		<>
			<Head>
				<title>Новости | Компания AKSOFT</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Новости и обновления от компании AKSOFT. Узнайте последние новости и проекты в области разработки сайтов и приложений."
				/>
				<meta name="robots" content="index,follow" />
				<meta name="author" content="AKSOFT" />
			</Head>
			
			<div className={styles.main}>
				<div className="container">
					<div className={styles.containers}>
						<h3 className={styles.title}>{data?.title}</h3>
						<p className={styles.params}>{data?.description}</p>
						<div className={styles.fit}>
							{data?.newsCard?.map((item: any, index: number) => (
								<Link
									key={index}
									href={{
										pathname: `/news/${item.id}`,
										query: { title_inner: item.title_inner },
									}}>
									<CardThree
										image={`https://aksoft.dev/max/${item.image.data.attributes.formats.small.url}`}
										name={item.title_inner}
										title={item.short_description}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
