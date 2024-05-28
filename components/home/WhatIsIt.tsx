'use client'
import React from 'react'
import { HeroHighlight, Highlight } from '../ui/hero-highlight'
import { motion, useScroll, useTransform } from 'framer-motion'

const WhatIsIt = () => {


    return (
        <motion.div className='flex flex-col h-[50vh] mx-auto font-normal align-center text-neutral-600 dark:text-neutral-400 text-center w-full md:w-3/4'>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-3xl"
            >
                You have an idea. We develop it. Together we operate. <br/>Software development from {" "}
                <Highlight className="text-black dark:text-white">
                    scratch to production.
                </Highlight>
            </motion.h1>
        </motion.div>
    )
}

export default WhatIsIt