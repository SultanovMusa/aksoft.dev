"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Animated.module.scss";
import gsap, { Circ } from "gsap";

interface Point {
	x: number;
	originX: number;
	y: number;
	originY: number;
	closest: Point[];
	circle: Circle;
	active: number;
}

class Circle {
	pos: { x: number; y: number };
	radius: number; // Радиус
	color: string;
	active: number;

	constructor(pos: { x: number; y: number }, rad: number, color: string) {
		this.pos = pos;
		this.radius = rad; // Мында радиус белгиленет
		this.color = color;
		this.active = 0;
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (!this.active) return;
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 5 * Math.PI, false);
		ctx.fillStyle = `rgba(156,217,249,${this.active})`;
		ctx.fill();
	}
}

function getDistance(
	p1: { x: number; y: number },
	p2: { x: number; y: number }
): number {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function drawLines(ctx: CanvasRenderingContext2D, p: Point) {
	if (!p.active || !p.circle) return;
	for (const closest of p.closest) {
		ctx.beginPath();
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(closest.x, closest.y);
		ctx.strokeStyle = `rgba(238,224,224,${p.active})`;
		ctx.stroke();
	}
}

function shiftPoint(p: Point) {
	gsap.to(p, 1 + 1 * Math.random(), {
		x: p.originX - 25 + Math.random() * 30,
		y: p.originY - 25 + Math.random() * 30,
		ease: Circ.easeInOut,
		onComplete: () => shiftPoint(p),
	});
}

const ConnectThree: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const initHeader = () => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			let targetX = window.innerWidth / 5;
			let targetY = window.innerHeight / 5;

			console.log(window.innerHeight, "mufa");
			console.log(innerWidth, "widht");
			

			const points: Point[] = [];
			for (let x = 0; x < canvas.width; x += canvas.width / 30) {
				for (let y = 0; y < canvas.height; y += canvas.height / 10) {
					const px = x + (Math.random() * canvas.width) / 30;
					const py = y + (Math.random() * canvas.height) / 10;
					points.push({
						x: px,
						originX: px,
						y: py,
						originY: py,
						closest: [],
						circle: new Circle({ x: px, y: py }, 1.5, "rgb(234, 255, 255)"),
						active: 0,
					});
				}
			}

			for (const p1 of points) {
				const closest: Point[] = [];
				for (const p2 of points) {
					if (p1 !== p2) {
						closest.push(p2);
						if (closest.length > 5) {
							closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
							closest.pop();
						}
					}
				}
				p1.closest = closest;
			}

			let animateHeader = true;
			const animate = () => {
				if (animateHeader) {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					for (const p of points) {
						const distance = getDistance({ x: targetX, y: targetY }, p);
						if (distance < 180) {
							p.active = 0.3;
							p.circle.active = 0.6;
						} else if (distance < 180) {
							p.active = 0.1;
							p.circle.active = 0.3;
						} else if(distance<180){
							p.active = 0.1;
							p.circle.active = 0.2;
						}	else {
							p.active = 0;
							p.circle.active = 0;
						}

						drawLines(ctx, p);
						p.circle.draw(ctx);
					}
				}
				requestAnimationFrame(animate);
			};

			const mouseMove = (e: MouseEvent) => {
				const rect = canvas.getBoundingClientRect();
				targetX = e.clientX - rect.left;
				targetY = e.clientY - rect.top;
			};

			const scrollCheck = () => {
				animateHeader = window.scrollY <= canvas.height;
			};

			const resize = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				console.log("Canvas Width:", canvas.width, "Canvas Height:", canvas.height);
			};

			window.addEventListener("mousemove", mouseMove);
			window.addEventListener("scroll", scrollCheck);
			window.addEventListener("resize", resize);

			resize();
			animate();
			for (const p of points) {
				shiftPoint(p);
			}
		};

		initHeader();
	}, []);

	return (
		<div className={styles.largeHeader}>
			<canvas ref={canvasRef} className={styles.demoCanvas	 	}  />
		</div>
	);
};

export default ConnectThree;
