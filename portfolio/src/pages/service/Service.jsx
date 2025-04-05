import React from 'react'
import Heading from '../../components/Heading'
import ServiceCard from '../../components/ServiceCard'
import './service.css'

function Service() {
    return (
        <>
            <section className="service">
                <div className="ser-sec">
                    <Heading title="Service" />
                    <ServiceCard />
                </div>
            </section>
        </>
    )
}

export default Service
