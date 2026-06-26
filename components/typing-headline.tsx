"use client"

import { useEffect, useState } from "react";

type TypingHeadlineProps = {
    lines: string[];
    speed?: number;
    className?: string;
};

export const TypingHeadline = ({ lines, speed = 45, className }: TypingHeadlineProps) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [texts, setTexts] = useState(() => lines.map(() => ""));

    useEffect(() => {
        setLineIndex(0);
        setCharIndex(0);
        setTexts(lines.map(() => ""));
    }, [lines]);

    useEffect(() => {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];

        if (charIndex >= currentLine.length) {
            if (lineIndex < lines.length - 1) {
                const pause = setTimeout(() => {
                    setLineIndex((i) => i + 1);
                    setCharIndex(0);
                }, 350);
                return () => clearTimeout(pause);
            }
            return;
        }

        const timer = setTimeout(() => {
            setTexts((prev) => {
                const next = [...prev];
                next[lineIndex] = currentLine.slice(0, charIndex + 1);
                return next;
            });
            setCharIndex((c) => c + 1);
        }, speed);

        return () => clearTimeout(timer);
    }, [lineIndex, charIndex, lines, speed]);

    const isComplete =
        lineIndex === lines.length - 1 && charIndex >= lines[lines.length - 1].length;

    return (
        <span className={`block w-full min-w-0 ${className ?? ""}`} aria-label={lines.join(" ")}>
            {texts.map((line, i) => (
                <span
                    key={i}
                    className="block min-h-[1.12em] break-words [overflow-wrap:anywhere]"
                >
                    {line}
                    {i === lineIndex && !isComplete && (
                        <span className="ml-0.5 inline-block animate-pulse text-secondary">|</span>
                    )}
                </span>
            ))}
        </span>
    );
};

export default TypingHeadline;
