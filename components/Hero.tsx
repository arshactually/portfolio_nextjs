"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import heroImage from "../components/images/heroImage.png";


type Props = {}

export default function Hero({}: Props) {
    const[text, count] = useTypewriter ({
        words: [
            "Hi, The Name's Arshnoor Singh",
            "Guy-who-loves-gym.tsx",
            "<ButLovesToCodeMore>", 

        ],
        loop: true,
        delaySpeed: 2000,

        
    });

    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className=' relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.pinimg.com/564x/9c/8a/6c/9c8a6cefe878eec86751d65b4d63e280.jpg" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[20px]'>
                Software Engineer
            </h2>
        <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-5'>
        <button className='heroButton'>About</button>
        <button className='heroButton'>Experience</button>
        <button className='heroButton'>Skills</button>
        <button className='heroButton'>Projects</button>

            {/* <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>

            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>

            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>

            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link> */}
            
        </div>
        </div>
        
    </div>
  );
}


