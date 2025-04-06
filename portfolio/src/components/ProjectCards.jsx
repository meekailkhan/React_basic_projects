import React from 'react'
import { projects } from '../data/dummyData'

function ProjectCards() {
    return (
        <>
            {projects.map((item, i) => (
                <div className="card flex" key={i}>
                    <div className="left" data-aos="zoom-out-right">
                        <img src={item.img} alt="" className='card-img' />
                    </div>
                    <div className="right" data-aos="zoom-out-down">
                        <h2 className='card-title'>{item.title}</h2>
                        <h3 className='card-role'>{item.role}</h3>
                        <p className='card-work'>{item.work}</p>
                        <span className='card-date'>{item.date}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCards
