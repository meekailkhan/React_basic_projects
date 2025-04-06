import React from 'react'

export default function Heading({title,dataAos}) {
  return (
    <><h2 className='heading' data-aos={dataAos}>{title}</h2></>
  )
}
