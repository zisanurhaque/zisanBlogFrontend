import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const Expertise = () => {
  return (
        <div className='skills'>
            <h5>Areas of expertise</h5>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> HTML5, CSS3 & Sass</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> Bootstrap</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> JavaScript | Vanilla JavaScript, ES5 & ES6</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> React | React Router Dom, React Hooks, Context API</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> Node | NPM Packages, Modules</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> Express | REST API, WebSocket, Mongoose</p>
            <p> <FontAwesomeIcon icon={faCheckCircle}/> MongoDB</p>
        </div>
  )
}

export default Expertise
