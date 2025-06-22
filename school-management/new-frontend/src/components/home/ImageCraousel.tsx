import {images} from '@/mocks/home'
import { useState,useEffect } from 'react'
import './style.css'

function ImageCraousel() {
  const [activeImg,setActiveImg] = useState<number>(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveImg((prev) => (prev + 1) % images.length);
    },5000) 

    return () =>  clearInterval(interval)
  },[])

  return (
    <div className='w-[100%] h-[450px] '>
      <div className="absolute w-[100%] h-[450px] z-0   ">
        {images.map((item,index)=>(
          <div key={index} className={`w-[100%] h-[100%] duration-1000 transition-all ease-in-out absolute img-div ${activeImg === index ? "opacity-100 pointer-events-auto scale-100 ": "opacity-0 pointer-events-none scale-80" }`} style={{
            backgroundImage : `url(${item})`,
            backgroundSize : "cover",
            backgroundPosition :"center center"
          }}>
          </div>
        ))}
      </div>
      <div className="absolute">
        
      </div>
    </div>
  )
}

export default ImageCraousel
