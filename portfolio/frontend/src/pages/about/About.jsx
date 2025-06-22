import React from 'react'
import { about } from '../../data/dummyData.jsx'
import Heading from '../../components/Heading'
import './about.css'

function About() {
  return (
    <>
      <section className='about'>
        <div className="container flex flex-wrap">
          {about.map((val, i) => (
            <div key={i} className='flex'>
              <div className="left" data-aos="zoom-in-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="">
                <Heading title="About Me" dataAos="zoom-out-down" />
                <p data-aos="zoom-out-right">{val.desc}</p>
                <a href="/meekail-resume.pdf" download className='download-btn' data-aos="zoom-out-up">
                  <button className='secondryBtn'>
                    Download CV
                  </button>
                </a>
                <a href="/meekail-resume.pdf" download className='download-btn' data-aos="zoom-out-up">
                  <button className='primaryBtn'>
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
