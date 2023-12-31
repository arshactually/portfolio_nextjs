"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        
        initial={{
            x: directionLeft ? -200 : 200, 
            opacity: 0,
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1, x: 0
        }}

        src='https://i.pinimg.com/564x/e1/b3/01/e1b3016a1a46ff49dc28661fc5da6970.jpg'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32xl:h-32 filter 
        group-hover:grayscale transition duration-300 ease-in-out'
        
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-24 h-24 md:w-24 md:h-24 xl:w-30 xl:h-30 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>



    </div>
  )
}

