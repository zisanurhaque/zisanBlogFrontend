import React from 'react'

const Banner = () => {
  return (
    <div className='dashboard_banner'>
      <div className="dashboard_header">
        <h5>Set Banner Contents</h5>
        <button className='add_post_button'>Set Banner</button>
      </div>

      <label>Banner Heading 1</label>
      <input type="text" placeholder="type here..."/>

      <label>Banner Sub Heading</label>
      <input type="text" placeholder="type here..."/>

      <label>Banner Intro Content</label>
      <textarea placeholder="type here..."/>
    </div>
  )
}

export default Banner
