"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";


export function HowWeWork() {

    const parent = React.useRef(null);

    const {scrollYProgress} = useScroll({
        target: parent
    });
    const translateX1 = useTransform(scrollYProgress, [0, 0.3], [-1000, 0]);
    const translateX2 = useTransform(scrollYProgress, [0.25, 0.5], [1000, 0]);
    const translateX3 = useTransform(scrollYProgress, [0.35, 0.7], [-1000, 0]);

    const steps = [
        {
            title: "Idea",
            description: "You have",
            animation: translateX1
        },
        {
            title: "Idea",
            description: "You have",
            animation: translateX2
        },
        {
            title: "Idea",
            description: "You have",
            animation: translateX3
        }
    ]

    return (
        <div className="flex flex-col justify-center text-center h-[140vh]" ref={parent}>
            <div>
                <h1 className="text-3xl text-neutral-600 dark:text-neutral-400">How we work</h1>
            </div>
            {
                steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center items-center h-[40vh]"
                        style={{x: step.animation}}
                    >
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">{step.title}</h2>
                            <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
}

export default HowWeWork