"use client"

import { motion } from "framer-motion";

type AnimatedTextProps = {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
};

const quote = (delay: number, stagger: number) => ({
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: {
            delay,
            staggerChildren: stagger,
        },
    },
});

const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    },
};

export const AnimatedText = ({
    text,
    className,
    delay = 0.35,
    stagger = 0.08,
}: AnimatedTextProps) => {
    const words = text.split(" ");

    return (
        <motion.span
            aria-label={text}
            variants={quote(delay, stagger)}
            initial="initial"
            animate="animate"
            className={`inline-block w-full overflow-hidden ${className ?? ""}`}
        >
            {words.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    variants={singleWord}
                    className="inline-block"
                >
                    {Array.from(word).map((char, charIndex) => (
                        <span key={`${char}-${charIndex}`} className="inline-block">
                            {char}
                        </span>
                    ))}
                    {index < words.length - 1 ? "\u00A0" : null}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
