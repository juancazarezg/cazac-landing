"use client";
import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Experience() {

    const words = [
        {
            text: "Cloud",
            className: "text-black",
        },
        {
            text: "development",
        },
        {
            text: "experts.",
            className: "text-4xl md:text-5xl",
        },
    ];
    return (
        <>
            <div className="flex items-center justify-center  w-full">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden  mx-auto w-[30-rem] mb-10">
                        <div className="bg-gray-200 flex items-center justify-between p-2 w-full">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-10 w-full flex flex-col justify-center items-center">
                            {/* Content goes here */}
                            <TypewriterEffect words={words} />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center justify-center h-[20rem]  w-full">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden  mx-auto w-[30-rem]">
                        <div className="bg-gray-200 flex items-center justify-between p-2 ">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-10 flex flex-col justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 p-2">
                                <div>
                                    <Image src="/logos-cloud/aws.png" alt="aws logo" width={100} height={100} />
                                </div>
                                <div>
                                    <Image src="/logos-cloud/google-cloud.png" alt="gcp logo" width={200} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </>

    );
}