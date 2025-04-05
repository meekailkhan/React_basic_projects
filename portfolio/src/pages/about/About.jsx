import React from 'react'
import { about } from '../../data/dummyData.jsx'
import Heading from '../../components/Heading'
import './about.css'

function About() {
  return (
    <>
      <section className='about'>
        <div className="container flex">
          {about.map((val,i)=>(
            <div key={i} className='flex'>
              <div className="left">
                <img src={val.cover} alt="" />
              </div>
              <div className="right">
                <Heading title="About Me"/>
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className='secondryBtn'>Download CV</button>
                <button className='primaryBtn'>Download CV</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
