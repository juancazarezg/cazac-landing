'use client'

import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient';

const Differentiators = () => {

    const differentiators = [
        {
            title: 'Minimalism',
            description: 'We believe in simplicity and minimalism in design and functionality.'
        },
        {
            title: 'Innovation',
            description: 'We are constantly innovating and improving our products and services.'
        },
        {
            title: 'Customer Service',
            description: 'We are committed to providing the best customer service in the industry.'
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-4 py-20 h-screen'>
            <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100'>Our Differentiators</h1>
            <div className='flex gap-4'>
                {differentiators.map((differentiator, index) => (
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h1 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>{differentiator.title}</h1>
                        <p className='text-lg text-neutral-700 dark:text-neutral-300'>{differentiator.description}</p>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    )
}

export default Differentiators;