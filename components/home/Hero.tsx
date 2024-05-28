'use client'
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";

export function HeroCazac() {
    const words = ["better", "faster", "reliable", "scalable", "secure"];

    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
        >
            <div className="h-[40rem] flex justify-center items-center px-4">
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
                    We make
                    <FlipWords words={words} /> <br />
                    apps that bring value to society.
                </div>
            </div>
        </motion.div>
    );
}
