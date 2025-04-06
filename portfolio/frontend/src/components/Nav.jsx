import React from 'react'
import { navlinks } from '../data/dummyData.jsx'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
      {navlinks.map((link,i)=>(
              <Link to={link.url} key={i}>{link.text}</Link>
            ))}
    </>
  )
}

export default Nav
