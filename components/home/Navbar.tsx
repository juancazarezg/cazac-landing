import React from 'react'
import { LogoCazac } from '../utils/LogoCazac'

const Navbar = () => {
    return (
        <div className="flex justify-center items-center py-4 w-full bg-transparent fixed z-50">
            <div className="flex justify-between items-center w-3/4">
                <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 ">
                    <LogoCazac />
                </div>
                <div className="flex gap-4">
                    <a href="#" className="text-lg text-neutral-900 dark:text-neutral-100">Home</a>
                    <a href="#" className="text-lg text-neutral-900 dark:text-neutral-100">About</a>
                    <a href="#" className="text-lg text-neutral-900 dark:text-neutral-100">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar