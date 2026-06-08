"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = `translateX(-16rem)`
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = `translateX(16rem)`
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50){
                setIsScroll(true);
            }
            else 
            {
                setIsScroll(false);
            }
        })
    }, [])
    return (
        <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
            <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20' : ''}`}>
                <a href='#top'>
                    <Image src={isDarkMode ? assets.mylogo2_dark : assets.mylogo2} className='w-34 cursor-pointer mr-14' alt='logo' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <li><a className='font-ovo' href='#top'>Home</a></li>
                    <li><a className='font-ovo' href="#about">About</a></li>
                    <li><a className='font-ovo' href="#services">Services</a></li>
                    <li><a className='font-ovo' href="#work">Work</a></li>
                    <li><a className='font-ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image className='w-6' src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' />
                    </button>

                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='arrow icon' className='w-3'/></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-theme'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5' />
                    </div>

                    <li><a href='#top' className='font-ovo' onClick={closeMenu}>Home</a></li>
                    <li><a className='font-ovo' href="#about" onClick={closeMenu}>About</a></li>
                    <li><a className='font-ovo' href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a className='font-ovo' href="#work" onClick={closeMenu}>Work</a></li>
                    <li><a className='font-ovo' href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;