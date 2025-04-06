import React from 'react'
import { services } from '../data/dummyData'

function ServiceCard() {
    return (
        <>
            <div className="container grid3">
                {services.map((item, i) => (
                    <div className="box" key={i} data-aos="flip-left">
                        <i>{item.icon}</i>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServiceCard
