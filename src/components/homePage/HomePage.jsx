import React from 'react'
import './HomePage.css'
import HomePageButton from '../../StyledComponents/Share'
import Section1 from '../Sections/Section1/Section1'
import Section2 from '../Sections/Section2/Section2'
import Section3 from '../Sections/Section3/Section3'
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'

export default function HomePage() {
  return (
    <>
    <NavBar/>
    <div className='HomePage'>
          <div className='Headings'>
              <p>A modern publishing platform</p>
              <p>Grow your audience and build your online brand</p>
              <div>
                 <HomePageButton>Start for free</HomePageButton>
                 <HomePageButton>Learn More</HomePageButton>
              </div>
              
          </div>
         
      
    </div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
    </>
  )
}
