import {React,useState,useEffect} from 'react'
import logo from '../assets/download-removebg-preview.png'
import { navlinks } from '../data/dummyData.jsx'
import { Link } from 'react-router-dom'
import './navbar.css'
import { Menu } from '@mui/icons-material'
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {
  const [responsive,setResponsive] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [responsive]);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="logo"  />
          </div>
          <div className={responsive ? "hideMenu" : "nav"} data-aos="slide-down">
            {navlinks.map((link,i)=>(
              <Link to={link.url} key={i}>{link.text}</Link>
            ))}
          </div>
          <button className='toggle' onClick={()=> setResponsive(!responsive)}>
            <Menu className='icon'></Menu>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
