import React from 'react'
import Expertise from './Expertise'
import Description from './Description'
import Social from './Social'
import Identity from './Identity'

const About = () => {
  return (
    <div className='about'>

        <div className='left'>
            
            <Identity/>

            <Description/>

            <Expertise/>

        </div>

        <div className='right'>
            <div className='image'></div>
            <Social/>
        </div>

    </div>
  )
}

export default About
