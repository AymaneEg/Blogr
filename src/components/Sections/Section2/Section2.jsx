import React from 'react'
import './Section2.css'
import img from './illustration-phones.svg'

export default function Section2() {
  return (
    <div className='Section2'>
        <div><img src={img} alt="" /></div>
        <div>
            <h1>State of the art Infrastructure</h1>
            <p>With reliability and speed in mind , worldwide data centers
                provide the backbone for ultra-fast connectivity . this ensures
                your site will load instantly , no matter where your readers are 
                , keeping your site competitive .  </p>
        </div>
    </div>
  )
}
