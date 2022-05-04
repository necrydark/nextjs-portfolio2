import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import Nav from '../components/nav'
import Wave from '../components/wave'
import Footer from '../components/footer'
import Contact from '../components/contact'
import { FormspreeProvider } from '@formspree/react'
import Link from 'next/link'

export default function Home() {



  const technologies = ['HTML5', 'CSS3', 'TailwindCSS', 'NextJS', 'JavaScript', 'Java', 'ReactJS', 'MongoDB', 'SQL', 'C#'];


  return (
    <div className='scroll-smooth'>
      <Head>
        <title>Michael C \ Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <section id="home" className='min-h-fit bg-[#9867C5] py-40'>
        <div className="container m-auto max-w-7xl flex justify-center h-[50vh] items-center flex-col">
          <div className='md:flex-row flex'>
            <p className='flex md:text-3xl md:!leading-[5rem] m-0 text-xl leading-10 text-white'>Hey, my name is</p>
            <h1 className='text-white pl-2 md:text-6xl text-3xl'>Michael Connor</h1>
          </div>
          <p className='m-0 text-white md:text-3xl text-xl text-center '>
            I am a software engineering student and aspiring web developer
          </p>
          {/* <button className="bg-[#BE93D4] hover:bg-purple-600 transition-colors duration-300 text-white font-bold py-2 px-4 rounded inline-flex mt-4 items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download CV</span>
          </button> */}
        </div>
      </section>
      <Wave fill={"BE93D4"} bg={"9867C5"} />
      <section id="about" className='min-h-fit section-padding bg-[#BE93D4]'>
        <div className='container'>
          <h1 className='text-5xl text-white p-4'>About Me</h1>
          <p className='text-white p-2'>Hello, I&apos;m Michael Connor. I&apos;m a full time university student studying Software Engineering and also study web development on the side. I have a strong passion for both software and website development, and currently have experience creating both software and websites using JavaScript / NextJs / Reactjs / Java and some other frameworks</p>
          <h1 className='text-white p-2 text-5xl'>Technologies I&apos;ve worked with:</h1>
          <ul className='flex flex-wrap gap-4 my-3 p-2 text-white'>
            {
              technologies.map((t, i) => (
                <li key={i}>{t}</li>
              ))
            }
          </ul>
        </div>
        {/* <div className='m-auto max-w-7xl gap-5 grid sm:grid-cols-12 grid-cols-1 container sm:grid-rows-none grid-rows-1'>
          <p className='sm:col-span-6 col-span-12'>
            Image
          </p>
          <p className='sm:col-span-6 col-span-12'>
            dummy text
          </p>
        </div> */}
      </section>
      <Wave fill={"9867C5"} bg={"BE93D4"} />
      <section id="projects" className='h-fit bg-[#9867C5] py-20'>

        <Card />

        {/* <button onClick={showMoreItems} className="bg-[#BE93D4] hover:bg-purple-600 transition-colors duration-300 text-white font-bold py-2 px-4 w-[7.1rem] text-center
          mx-auto rounded inline-flex mt-4 items-center"> Load More</button> */}

      </section>
      <Wave fill={"BE93D4"} bg={"9867C5"} />
      <section id="contact" className='h-[80vh] bg-[#BE93D4] py-20'>
        <FormspreeProvider project="1914443541589786412">
          <Contact />
        </FormspreeProvider>

      </section>
      <Footer />
    </div>
  )
}
