import React from 'react'

const DashboardAbout = () => {
  return (
    <div className='dashboard_about'>
      <div className="dashboard_header">
        <h5>Set About Page Contents</h5>
        <button className='add_post_button'>Publish</button>
      </div>

      <div className='left'>

          <label>Profile Name</label>
          <input type="text" placeholder="type here.."/>

          <label>Profession</label>
          <input type="text" placeholder="type here.."/>

          <label>Experiance</label>
          <input type="text" placeholder="type here.."/>

          <label>Location</label>
          <input type="text" placeholder="type here.."/>

          <label>Full Description About You</label>
          <textarea placeholder="type here.."/>

      </div>

      <div className='right'>
          <label>Area Of Expertise</label>
          <form className='subForm'>
            <input type="text" placeholder="Type here..."/>
            <button>Add</button>
          </form>

          <div className='learned'>
            <button>1. Implementing socket.io</button>  
            <button>2. Search queries using react router dom in reactjs First Time</button> 
            <button>3. Express request handling</button> 
          </div>
      </div>
      
    </div>
  )
}

export default DashboardAbout
