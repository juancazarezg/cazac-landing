"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";


export function HowWeWork() {

    const {scrollYProgress} = useScroll();
    const translateX1 = useTransform(scrollYProgress, [0.2, 0.3], [-1000, 0]);
    const translateX2 = useTransform(scrollYProgress, [0.3, 0.4], [1000, 0]);
    const translateX3 = useTransform(scrollYProgress, [0.4, 0.5], [-1000, 0]);

    return (
        <div className="flex flex-col justify-center text-center h-[120vh]">
            <div>
                <h1 className="text-3xl text-neutral-600 dark:text-neutral-400">How we work</h1>
            </div>
            <motion.div
            style={{translateX: translateX1}} 
            className="flex flex-col w-full h-[40vh]" >
                <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">1. Idea</h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400">You have an idea. We make it happen. Software development from scratch to production.</p>
            </motion.div>
            <motion.div
            style={{translateX: translateX2}} 
            className="flex flex-col w-full h-[40vh]" >
                <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">1. Idea</h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400">You have an idea. We make it happen. Software development from scratch to production.</p>
            </motion.div>
            <motion.div
            style={{translateX: translateX3}} 
            className="flex flex-col w-full h-[40vh]" >
                <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">1. Idea</h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400">You have an idea. We make it happen. Software development from scratch to production.</p>
            </motion.div>
        </div>
    );
}

export default HowWeWork