import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Service from './service/Service'
import Project from './projects/Project'
import Testimonials from './testimonials/Testimonials'
import { Contact } from './contact/Contact'

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Service />
        <Project />
        <Testimonials />
        <Contact />
    </>
  )
}

export default Home
