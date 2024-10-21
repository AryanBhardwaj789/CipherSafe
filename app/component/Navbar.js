"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '/public/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex justify-between items-center px-4 md:px-20 text-slate-600 py-4'>
            <div className='flex items-center font-bold'>
                <Image 
                    className='border-2 border-slate-500 rounded-md'
                    src={logo}
                    alt="Logo"
                    width={50}
                    priority
                />
                <span className='ml-4 text-lg font-medium cursor-default'>CipherSafe</span>
            </div>

            {/* Hamburger icon for mobile */}
            <div className='md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            <ul className={`flex-col md:flex-row md:flex md:items-center absolute md:static bg-white w-full md:w-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'top-16' : 'top-[-200px]'} md:top-0 left-0 md:relative`}>
                <li className='font-inter font-regular text-base text-primary max-[1200px]:text-sm py-2 md:py-0 md:mr-8 text-center'>
                    <Link href="/">Why CipherSafe</Link>
                </li>
                <li className='font-inter font-regular text-base text-primary max-[1200px]:text-sm py-2 md:py-0 md:mr-8 text-center'>
                    <Link href="/">Security</Link>
                </li>
                <li className="w-full flex justify-center">
                    <Link href="/auth/sign-in">
                        <button className="transition-all h-14 px-8 rounded-2xl text-base text-black bg-gray-200 max-[600px]:text-sm max-[600px]:h-13 rounded-xl bg-white h-[44px] border-gray-200 border-[1px]">
                            <span>Log In</span>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
