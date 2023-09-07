"use client"
import React from 'react';
import { motion } from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    const arrayLength: number = projects.length;

  return (
    <motion.div 
    initial={{ opacity : 0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
    
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects</h3>
            <div className='relative w-full flex overflow-xscroll overflow-y-hidden snap-x 
            snap-mandatory z-20 '>
                {projects.map((projects, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col 
                    space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img 
                        initial={{
                            y:-300,
                            opacity:0
                        }}
                        
                        transition={{ duration:1.2}}
                        whileInView={{ opacity:1 , y:0}}
                        viewport={{once:true}}

                        
                        src="https://png.pngtree.com/png-vector/20220223/ourmid/pngtree-modern-thin-frame-realistic-laptop-notebook-or-ultrabook-mockup-png-image_4452256.png" alt="" />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#f7ab0a]/50'>Case Study {i+1} of {arrayLength} : </span>
                                 UPS Clone 
                                </h4>

                                <p 
                                className='text-lg text-center md:text-left '
                                
                                >Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry. Lorem Ipsum has been t
                                    he industryss standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                                    e centuries, but also the leap into electronic typesetting, remaining essentially unch
                                    anged. It was popularised in the 1960s wit h the release of Letraset shee ts containing Lorem I
                                    psum passages, and more recently with desktop publishing so ftware 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                    </div>
                ))}




            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]
            -skew-y-12'></div>
            </motion.div>
  )
}

