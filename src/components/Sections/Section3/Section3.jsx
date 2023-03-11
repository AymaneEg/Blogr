import React from 'react'
import './Section3.css'
import img from './illustration-laptop-desktop.svg'

export default function Section3() {
  return (
    <div className='Section3'>
         <div>
            <img src={img}/>
         </div>
         <div>
         <ul>
            <li>Introducing an extensible editor</li>
            <li>Blogr feature an exceedingly intutive interface which lets you focus 
                on one thing creating content . the editor supports managment of multiple blogs 
                and allows easy manipulation of embeds such as images , videos , and markdowns. Extensibility with 
                plugins and theme provide easy way to add functionality or change the looks of a blog.

            </li>
          </ul>
          <ul>
            <li>Introducing an extensible editor</li>
            <li>Blogr feature an exceedingly intutive interface which lets you focus 
                on one thing creating content . the editor supports managment of multiple blogs 
                and allows easy manipulation of embeds such as images , videos , and markdowns. Extensibility with 
                plugins and theme provide easy way to add functionality or change the looks of a blog.

            </li>
          </ul>
         </div>
    </div>
  )
}
