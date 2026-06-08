import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = ({isDarkMode}) => {
    return (
        <motion.div
        initial={{ opacity : 0}}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1 }}
        id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
            initial={{ y : -20, opacity : 0}}
            whileInView={{ y : 0, opacity : 1}}
            transition={{ delay : 0.3, duration : 0.5 }}
            className='text-center mb-2 text-lg font-ovo'>What I Offer</motion.h4>
            <motion.h2 
            initial={{ y : -20, opacity : 0 }}
            whileInView={{ y : 0, opacity : 1 }}
            transition={{ delay : 0.5, duration : 0.5 }}
            className='text-center text-5xl font-ovo'>My Services</motion.h2>

            <motion.p 
            initial={{opacity : 0}}
            whileInView={{opacity : 1}}
            transition={{delay : 0.7, duration : 0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                A results-driven MERN stack developer with 1 year of professional experience building scalable web applications using MongoDB, Express.js, React, and Node.js.
            </motion.p>

            <motion.div 
            initial={{opacity : 0}}
            whileInView={{opacity : 1}}
            transition={{delay : 0.9, duration : 0.6}}
            className='grid grid-cols-[var(--gridTemplate-auto)]  gap-6 my-10'>
                {serviceData.map(({ title, description }, index) => (
                    <motion.div 
                    whileHover={{scale : 1.05}}
                    key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--boxShadow-black)] hover:translte-y-1 hover:bg--[var(--color-light-hover)] cursor-pointer duration-500 dark:hover:bg-[var(--color-dark-hover)] dark:hover:shadow-white'>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p>
                        
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services;