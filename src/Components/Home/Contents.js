import React from 'react'
import {Link} from 'react-router-dom'

const Contents = () => {
  return (
        <div className='contents'>
            <h1>Zisanur Haque</h1>
            <h4>MERN Stack Developer | Fresher</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit rerum aliquam, officia animi libero accusantium veniam minus ipsum dolore reiciendis voluptatum, temporibus voluptates culpa rem sit vitae repellendus ullam iste. culpa rem sit vitae repellendus ullam iste.
            </p>
            <div className='btnGroup'>
                <Link to="/about">Learn More</Link>  
                <Link to="/contact">Contact Me</Link>    
            </div>
        </div>
  )
}

export default Contents
