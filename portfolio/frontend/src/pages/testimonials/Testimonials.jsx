import React from "react"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import './testimonials.css'

function Testimonials() {
  return (
    <>
       <>
      <section className='testimonials hero'>
        <div className='container'>
              <div className='box'>
                <i data-aos='zoom-out-up'>
                  <FormatQuoteIcon />
                </i>
                <p data-aos='zoom-out-down'>Success is built on discipline, not just raw motivation alone</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src="/meekail.jpg" alt='' />
                </div>
                <h3 data-aos='zoom-out-left'>Meekail</h3>
                <label data-aos='zoom-out'>Full-Stack Developer</label>
              </div>
        </div>
      </section>
    </>
    </>
  )
}

export default Testimonials
