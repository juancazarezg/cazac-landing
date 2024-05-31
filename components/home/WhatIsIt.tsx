'use client'
import React from 'react'
import { HeroHighlight, Highlight } from '../ui/hero-highlight'
import { motion, useScroll, useTransform } from 'framer-motion'

const WhatIsIt = () => {


    return (
        <motion.div className='flex flex-col h-[50vh] mx-auto font-normal align-center text-neutral-600 dark:text-neutral-400 text-center w-full md:w-3/4'>
            <motion.h1
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="text-3xl leading-10 p-5"
            >
                You have the <span style={{textDecoration:'underline'}}>idea</span>. <br/>We <span style={{textDecoration:'underline'}}>develop</span> it. <br/>Together, we make it <span style={{textDecoration:'underline'}}>work</span>. <br/>Software development from {" "}
                <Highlight className="text-black dark:text-white">
                    scratch to production.
                </Highlight>
            </motion.h1>
        </motion.div>
    )
}

export default WhatIsIt