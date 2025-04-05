import React from 'react'
import {home} from '../../data/dummyData.jsx'
import { Typewriter } from 'react-simple-typewriter'
import './Hero.css'

function Hero() {
  return (
    <>
      <section className="hero">
        {home.map((val,i)=>(
          <div className="heroContainer" key={i}>
            <h3>{val.text}</h3>
            <h1>
              <Typewriter 
                words={[val.post,val.name,val.design]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p>{val.desc}</p>
            <button className='primaryBtn'>Download CV</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Hero
