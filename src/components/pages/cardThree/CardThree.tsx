/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { interpolate } from "@popmotion/popcorn";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./CardThree.module.scss";

interface CardThreeProps {
	height?: number;
	width?: number;
	name: string;
	title: string;
	image: string | { src: string };
}

export function CardThree({
	height = 400,
	width = 330,
	name,
	title,
	image,
}: CardThreeProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [hover, setHover] = useState(false);
	const [tapped, setTapped] = useState(false);

	const centerPoint = useMemo(() => [width / 2, height / 2], [width, height]);
	const xy = useMotionValue(centerPoint);
	const tx = 0.05;

	const transformX = interpolate([0, width], [width * tx, -width * tx]);
	const rotateY = useTransform(xy, ([x]) => transformX(x));
	const transformY = interpolate([0, height], [-height * tx, height * tx]);
	const rotateX = useTransform(xy, ([, y]) => transformY(y));

	const config = { stiffness: 150, damping: 20 };
	const springX = useSpring(rotateX, config);
	const springY = useSpring(rotateY, config);

	const gradientOpacity = useTransform(xy, ([, y]) =>
		interpolate([0, height], [0, 0.3])(y)
	);
	const gradientOpacitySpring = useSpring(gradientOpacity, config);

	const gradient = useTransform(gradientOpacitySpring, (opacity) => {
		let [x, y] = xy.get();
		if (y === centerPoint[1]) {
			y = centerPoint[1] + 1;
		}
		const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
		const degree =
			((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
		return `linear-gradient(${degree}deg, rgba(585,215,335,${opacity}), rgba(255,255,255,0) 80%)`;
	});

	const onMouseOver = (e: React.MouseEvent) => {
		if (tapped) return;
		const rect = ref.current?.getBoundingClientRect();
		if (rect) {
			xy.set([e.clientX - rect.left, e.clientY - rect.top]);
		}
	};

	const handleHoverStart = () => setHover(true);
	const handleHoverEnd = () => setHover(false);

	useEffect(() => {
		if (!hover) {
			xy.set(centerPoint);
		}
	}, [hover, xy, centerPoint]);

	return (
		// <div className="container">
		<div
			className={styles.containers}
			ref={ref}
			style={{ height: `${height}px`, width: `${width}px` }}>
			<motion.div
				className={styles.content}
				style={{ scale: 1, rotateX: springX, rotateY: springY }}
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
				onTapStart={() => setTapped(true)}
				onTapCancel={(e) => {
					setTapped(false);
					onMouseOver(e);
				}}
				onTap={() => setTapped(false)}
				onHoverStart={handleHoverStart}
				onHoverEnd={handleHoverEnd}
				onMouseMove={onMouseOver}>
				<div className={styles.shadow} />
				<div className={styles.relative_container}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(${
								typeof image === "string" ? image : image.src
							})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<div
				
						style={{
							position: " absolute",
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							flexDirection: "column",
							gap: "10px",
							padding: "20px 10px",
							backgroundColor: "rgba(0,0,0,0.6)",
							zIndex: 998,
						}}>
						<h2
							className={styles.h2}
							style={{
								color: "white",
								textAlign: "center",
								fontSize: "16px",
								zIndex: 999,
							}}>
							{name}
						</h2>
						<p
							className={styles.p}
							style={{
								fontSize: "14px",
								color: "white",
								fontWeight: "400",
								textAlign: "center",
								zIndex: 999,
							}}>
							{title}
						</p>
					</div>
				</div>
				<motion.div
					className={styles.gradient}
					style={{ background: gradient }}
				/>
			</motion.div>
		</div>
		// </div>
	);
}
