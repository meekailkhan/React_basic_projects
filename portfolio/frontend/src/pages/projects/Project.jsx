import React from 'react'
import Heading from '../../components/Heading'
import ProjectCards from '../../components/ProjectCards'
import './project.css'

function Project() {
  return (
    <section className="projects">
        <div className="container flex project-container" data-aos="zoom-out-up">
            <Heading title="Project"/>
            <div className="projects-cards card-container flex">
                <ProjectCards />
            </div>
        </div>
    </section>
  )
}

export default Project
