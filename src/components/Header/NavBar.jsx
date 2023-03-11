import React from 'react'
import './NavBar.css'
import 'boxicons'
import img from './icon-arrow-light.svg'
import { MenuButton } from '../../StyledComponents/Share'

export default function NavBar() {
  return (
    <div className='NavBar'>
        <div>
            <h1>Blogr</h1>
            <div>
                <ul className='NavItems'>
                    <li>
                        product
                        <img src={img} alt="" />
                        
                     </li>
                    <li>Company
                    <img src={img} alt="" />
                    </li>
                    <li>Conect
                    <img src={img} alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <p>login</p>
            <MenuButton>Sign up</MenuButton>
        </div>
        <div className='MenuIcon'>
           <box-icon name='menu' color='#fbfbfb' ></box-icon>
        </div>
    </div>
  )
}
