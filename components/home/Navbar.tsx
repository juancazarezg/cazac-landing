import React from 'react'
import { LogoCazac } from '../utils/LogoCazac'
import { DarkModeToggler } from '../utils/DarkModeToggler'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Menu, Moon, Sun } from 'lucide-react'

const menuItems = [
    {
        title: "Home",
        link: "#"
    },
    {
        title: "About",
        link: "#"
    },
    {
        title: "Contact",
        link: "#"
    }
]

const Navbar = () => {
    return (
        <div className="flex justify-center items-center py-4 w-full bg-transparent fixed z-50">
            <div className="flex justify-between items-center w-3/4">
                <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 ">
                    <LogoCazac />
                </div>
                <div className="gap-3 hidden">
                    {
                        menuItems.map((item, index) => (
                            <a key={index} href={item.link} className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300">
                                {item.title}
                            </a>
                        ))
                    }
                </div>
                <div className='flex items-center gap-2'>
                    <DarkModeToggler />
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}

function MobileNavbar() {

    return (
        <div className='hidden flex items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Menú</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {
                        menuItems.map((item, index) => (
                            <DropdownMenuItem key={index}>
                                {item.title}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}

export default Navbar