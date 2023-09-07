import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400
     scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Arshnoor's Portfolio</title>
      </Head>

      {/**Header */}
      <Header />

     

      {/**Hero */}
      <section id='hero' className='snap-center '>
        <Hero />

      </section>

      {/**About */}

      <section id='about' className='snap-start'>
        <About />
      </section>

      {/**Experience */}

      <section id='experience' className='snap-center'>

        <WorkExperience />
      </section>


      {/**Skills */}

      <section id='skills' className='snap-start'>
        <Skills />

      </section>

      {/**Projects */}

      <section id='projects' className='snap-start'></section>
      <Projects/>

      {/**Contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer'
          
          src="https://i.pinimg.com/564x/9c/8a/6c/9c8a6cefe878eec86751d65b4d63e280.jpg" alt="" />
        </div>
      </footer>
      
      </Link>

    
    </main>

  )
}
