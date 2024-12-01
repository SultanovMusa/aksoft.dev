"use client";

import { FC, useEffect, useState } from "react";
import PreLoaderDevX from "../ui/preloader/PreLoaderDevX";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./Layout.module.scss";



interface LayouPagestProps {
	children: React.ReactNode;
}

const LayouPagest: FC<LayouPagestProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const time = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(time);
	}, []);

	return (
		<div className={scss.layout}>
			{loading ? (
				<PreLoaderDevX />
			) : (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</div>
	);
};

export default LayouPagest;
