"use client"

import { motion } from "framer-motion";

type AnimatedTextProps = {
    text: string;
    className?: string;
    delay?: number;
};

const container = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: delay },
    },
});

const child = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 120 },
    },
};

export const AnimatedText = ({ text, className, delay = 0.2 }: AnimatedTextProps) => {
    const letters = Array.from(text);

    return (
        <motion.span
            aria-label={text}
            role="heading"
            variants={container(delay)}
            initial="hidden"
            animate="visible"
            className={`inline-block ${className ?? ""}`}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {letter === " " ? " " : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
