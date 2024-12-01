/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import styles from "../style.module.scss";

export default function AboutNews() {
	const [data, setData] = useState<any>({});

	const router = useRouter();

	const searchParams = useSearchParams(); 

	const { id } = useParams();

	const title_inner = searchParams.get("title_inner"); 

	const url = `https://aksoft.dev/max/api/news?populate=*`;

	useEffect(() => {
		
		if (id) {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok " + response.statusText);
					}
					return response.json();
				})
				.then((response) => {
					const state = response.data[0].attributes.newsCard.find(
						(item: any) => item.id === Number(id)
					);
					setData(state);
				})
				.catch((error) => {
					console.error("There was a problem with the fetch operation:", error);
				});
		}
	}, [id]);

	const BlogContent = ({ htmlString }: any) => {
		return (
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: htmlString }}
			/>
		);
	};

	const handleGoForward = () => {
		router.push("/news");
	};

	return (
		<>

		<div className={styles.mains}>
			<div className="container">
				<div className={styles.containers}>
					<h3 className={styles.title}>{title_inner || data?.title_inner}</h3>
					<span onClick={handleGoForward} className={styles.h2}>Новости </span> <span className={styles.span}>/</span> <span className={styles.span}> {title_inner}</span>
					<p className={styles.text_p}>{data?.short_description}</p>
					<div className={styles.content}>
						<BlogContent htmlString={data?.news_inner} />
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
