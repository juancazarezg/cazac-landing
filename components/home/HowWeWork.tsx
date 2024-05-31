"use client";
import { motion } from "framer-motion";
import React from "react";


export function HowWeWork() {

    const parent = React.useRef(null);

    const steps = [
        {
            title: "Meetings to discuss your idea",
            description: "We don't just listen, we understand",
        },
        {
            title: "Planeation and development",
            description: "We don't just develop, we plan",
        },
        {
            title: "Day to day improvements",
            description: "We don't just deliver, we improve everyday",
        }
    ]

    return (
        <div className="flex flex-col justify-center text-center h-screen" ref={parent}>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}>
                <h1 className="text-3xl text-neutral-600 dark:text-neutral-400">How we work</h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
                {
                    steps.map((step, index) => (
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            key={index}
                            className="flex justify-center items-center h-[25vh]"
                        >
                            <div className=" w-full relative max-w-lg">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full w-full overflow-hidden rounded-2xl flex flex-col justify-center">
                                    <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
                                        {step.title}
                                    </h1>
                                    <p className="font-normal text-slate-500 mb-4 relative z-50 text-center">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

        </div>
    );
}

export default HowWeWork