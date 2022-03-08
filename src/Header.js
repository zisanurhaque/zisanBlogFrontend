import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {


  let location = useLocation();
  const [toggle, setToggle] = useState(false)

  const handleToggle = (e) => {
    e.preventDefault()
    if(toggle === true){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  return (
    <div className={location.pathname === "/dashboard" ? "header dashboardHeader" : "header"}>
        <div className='brand'>
          <Link to={"/"}>
            <h4>
              <span>{"<"}</span>
              ZH
              <span>{"/>"}</span>
            </h4>
          </Link>
        </div>
        <div className={toggle ? 'menubar' : 'menubar hide'}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About Me</NavLink>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/contact"}>Contact Me</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </div>
        <button className='toggle' onClick={(e) => handleToggle(e)}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    </div>
  )
}

export default Header
