import React from 'react'
import { social } from '../data/dummyData'
import './footer.css'


function Footer() {
    return (
        <>

            <footer>
                {social.map((item,i) => (
                    <>
                    <a href={item.url} target='_blank' key={i}>
                        <i data-aos='zoom-in'>{item.icon}</i>
                    </a>
                    </>
                ))}
                <p data-aos='zoom-in'>Crafted By Meekail All Right Reserved 2025</p>
            </footer>

        </>
    )
}

export default Footer
