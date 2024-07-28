import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '/public/images/logo.png';

const Navbar = () => {
    return (
        <nav className='flex justify-between px-20 text-slate-600 py-4'>
                <div className='flex items-center font-bold'>
                <Image className='border-2 border-slate-500 rounded-md'
                    src={logo}
                    alt="Logo"
                    width={50}
                    priority
                />
                <span className='ml-4 text-lg font-medium cursor-default'>CipherSafe</span>
                </div>
            <ul className='flex items-center'>
                <Link href="/why"><li className='font-inter font-regular text-base text-primary max-[1200px]:text-sm mr-24'>Why CipherSafe</li></Link>
                <Link href="/security"><li className='font-inter font-regular text-base text-primary max-[1200px]:text-sm mr-24'>Security</li></Link>
                <Link href="/login"><li><button class="transition-all h-14 px-8 rounded-2xl text-base text-black bg-gray-200 undefined undefined max-[600px]:text-sm max-[600px]:h-13 rounded-xl bg-white h-[44px] border-gray-200 border-[1px]"><span class="">Log In</span></button></li></Link>
                
            </ul>
        </nav>
    )
}

export default Navbar
