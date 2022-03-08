import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return (
    <div className='portfolio_card'>
        <div className="category">Fullstack</div>
        <div className='image'></div>
        <div className='contents'>
            <h5>Simple Chat Application</h5>

            <div className='desc'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, neque cumque autem magnam quisquam fuga vero.
            </div>

            <div className='learned'>
                <h6>What I Learned</h6>
                <p> <FontAwesomeIcon icon={faCheckCircle}/> Implementing socket.io</p>
                <p> <FontAwesomeIcon icon={faCheckCircle}/> Usage of context api</p>
                <p> <FontAwesomeIcon icon={faCheckCircle}/> Search queries using react router dom in reactjs First Time</p>
                <p> <FontAwesomeIcon icon={faCheckCircle}/> Express request handling</p>
            </div>

            <div className="keywords">
                <span>React</span>
                <span>Express</span>
                <span>Socket</span>
            </div>
            <div className='btnGroup'>
                <button>Watch Live</button>
                <button>Source Code</button>
            </div>
        </div>
    </div>
  )
}

export default Card
