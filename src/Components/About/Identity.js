import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Identity = () => {
  return (
    <div className='identity'>
        <h1>Zisanur Haque</h1>
        <h6>MERN Stack Developer | Fresher</h6>
        <div className='location'>
            <div className='icon'>
                <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <h6>Dhaka, Bangladesh</h6>
        </div>
    </div>
  )
}

export default Identity
