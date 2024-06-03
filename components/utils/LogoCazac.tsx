import Image from 'next/image'
import React from 'react'
import logoWhite from '../../public/logos-cazac/large-white.png'
import logoBlack from '../../public/logos-cazac/large-black.png'

export const LogoCazac = () => {
    return (
        <>
            <div className='block dark:hidden'>
                <Image src={logoBlack} alt='logo cazac' width={150} height={30}/>
            </div>
            <div className='hidden dark:block'>
                <Image src={logoWhite} alt='logo cazac'width={150} height={30}/>
            </div>
        </>
    )
}
