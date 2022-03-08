import React, { useState } from 'react'
import DashboardAbout from './DashboardAbout'
import DashoboardFooter from './DashoboardFooter'
import Banner from './Banner'
import AddPortfolio from './AddPortfolio'
import Sidebar from './Sidebar'
import Main from './Main'

const Dashboard = () => {

  const [dashboardMenu, setDashboardMenu] = useState("dashboard")

  const handleDashboard = (id) => {
    setDashboardMenu(id)
  }

const Display = () => {
  if(dashboardMenu === "portfolio"){
      return <AddPortfolio/>
    }else if(dashboardMenu === "banner"){
      return <Banner/>
    }else if(dashboardMenu === "about"){
      return <DashboardAbout/>
    }else{
      return <Main/>
    }
}

  return (

    <div className='dashboard'>
      
      {/* Dashboard Sidebar Options */}

      <Sidebar handleDashboard={handleDashboard} dashboardMenu={dashboardMenu}/>

      {/* Dashboard Main Section */}

      <div className='dashboard_main'>
          <Display/>
          <DashoboardFooter/>
      </div>

    </div>

  )
}

export default Dashboard
