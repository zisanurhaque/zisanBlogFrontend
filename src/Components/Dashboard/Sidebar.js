import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGaugeHigh} from '@fortawesome/free-solid-svg-icons'
import {faBorderAll} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({handleDashboard, dashboardMenu}) => {
  return (
      <div className='dashboard_sidebar'>
        <button className={dashboardMenu === "dashboard" ? 'menu_item active' : 'menu_item'} onClick={(e) => handleDashboard("dashboard")}>
          <div className="icon">
             <FontAwesomeIcon icon={faGaugeHigh}/>
          </div>
          <p>Dashboard</p>
        </button>
        <button className={dashboardMenu === "portfolio" ? 'menu_item active' : 'menu_item'} onClick={(e) => handleDashboard("portfolio")}>
          <div className="icon">
             <FontAwesomeIcon icon={faBorderAll}/>
          </div>
          <p>Portfolio</p>
        </button>
        <button className={dashboardMenu === "about" ? 'menu_item active' : 'menu_item'} onClick={(e) => handleDashboard("about")}>
          <div className="icon">
             <FontAwesomeIcon icon={faUser}/>
          </div>
          <p>About</p>
        </button>
        <button className={dashboardMenu === "banner" ? 'menu_item active' : 'menu_item'} onClick={(e) => handleDashboard("banner")}>
          <div className="icon">
             <FontAwesomeIcon icon={faLaptop}/>
          </div>
          <p>Banner</p>
        </button>
      </div>
  )
}

export default Sidebar
