"use client";
import { motion } from "framer-motion";
import React from "react";
import { Vortex } from "../ui/vortex";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import Link from "next/link";


export function OurWork() {

    const works = [
        {
            title: "invitio",
            description: "Digital invitations for your events",
            tags: ["Events", "Digitalization"],
            link: "https://invitio.events"
        },
        {
            title: "doko",
            description: "AI Agents for your business, as simple as possible",
            tags: ["AI", "Business", 'Collaboration'],
            link: "https://doko-ai.com"
        },
        {
            title: "kuikmenu",
            description: "Digital menus for your restaurant",
            tags: ["Restaurants", "Digitalization"],
            link: "https://kuikmenu.com"
        }
    ]

    return (
        <div className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-[140vh] md:h-[100vh]"
        >
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="pb-5">
                <h1 className="text-3xl text-neutral-600 dark:text-neutral-400">Our work</h1>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
                {
                    works.map((step, index) => (

                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex justify-center items-center h-[35vh] w-full h-full"
                        >
                            <Link href={step.link} target="_blank" className="w-full h-full">
                                <BackgroundGradient className="flex flex-col justify-center h-full align-center rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                    <div className="block dark:hidden flex justify-center w-full p-3 h-full ">
                                        <Image src={'/logos-works/' + step.title + '-dark.png'} alt={step.title + ' logo'} width={200} height={50} />
                                    </div>
                                    <div className="flex justify-center w-full p-3 h-full items-center">
                                        <Image src={'/logos-works/' + step.title + '.png'} alt={step.title + ' logo'} width={200} height={50} className="hidden dark:block "/>
                                    </div>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                                        {step.description}
                                    </p>
                                    <div className="flex justify-center items-center mt-4">
                                        {
                                            step.tags.map((tag, index) => (
                                                <div key={index} className="rounded-full px-4  py-1 text-white flex items-center space-x-1 bg-black m-2 text-xs font-bold dark:bg-zinc-800">
                                                    {tag}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <p className="text-center pt-5 text-neutral-600 hover:text-neutral-300">Go to site</p>
                                </BackgroundGradient>
                            </Link>
                        </motion.div>

                    ))
                }
            </div>

        </div>
    );
}

export default OurWork