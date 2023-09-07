"use client"
import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
    
    className=' h-screen flex relative overflow-hidden flex-col text-left md:flow-row 
    max-w-full px1- justify-evenly -mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[30px] text-gray-500 text-2xl'
        >WorkExperience</h3>


        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
        snap-mandatory  scrollbar-track-gray-400
         scrollbar-thumb-[#F7AB0A]/80'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            

        </div>
        </motion.div>
  )
}
