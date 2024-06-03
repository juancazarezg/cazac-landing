'use client'
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Contact() {
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
            <div>
                <h1 className="text-3xl text-neutral-600 dark:text-neutral-400">Contact</h1>
            </div>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Cazac Group
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        Software development company
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Located in  Mexico
                        </CardItem>
                        <Link href='https://linkedin.com' target="_blank">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Contact us
                            </CardItem>
                        </Link>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
}
