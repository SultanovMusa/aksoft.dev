/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Typer({ text }: any) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "0.8rem",
      }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ amount: 0.2, once: false }}
    >
      {words.map((word: any, index: number) => (
        <motion.h2 variants={child} style={{ marginRight: "5px" }} key={index}>
          {word}
        </motion.h2>
      ))}
    </motion.div>
  );
}
