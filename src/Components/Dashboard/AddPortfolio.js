import React from 'react'

const AddPortfolio = () => {
  return (
    <div className='add_portfolio'>

      <div className="dashboard_header">
        <h5>Add Portfolio Item</h5>
        <button className='add_post_button'>Publish Post</button>
      </div>

        <div className='left'>

          <label>Portfolio Title</label>
          <input type="text" placeholder="Title"/>

          <label>Category</label>
          <input type="text" placeholder="Category"/>

          <label>Description</label>
          <textarea placeholder='Description'></textarea>

          {/* What I Learned */}

          <label>What You Learned?</label>
          <form className='subForm'>
            <input type="text" placeholder="Type here..."/>
            <button>Add</button>
          </form>

          <div className='learned'>
            <button>1. Implementing socket.io</button>  
            <button>2. Search queries using react router dom in reactjs First Time</button> 
            <button>3. Express request handling</button> 
          </div>

          {/* Kewords */}

          <label>Keywords</label>
          <form className='subForm'>
            <input type="text" placeholder="Related Keywords"/>
            <button>Add</button>
          </form>

          <div className="keywords">
            <button>React</button>
            <button>Express</button>
            <button>MongoDB</button>
          </div>

        </div>

        <div className='right'>

          <label>Live Project Link</label>
          <input type="text" placeholder="Live Project Link"/>

          <label>Source Code Link</label>
          <input type="text" placeholder="Source Code Link"/>

          <label>Video Link</label>
          <input type="text" placeholder="Video Link"/>

          <label>Thumbnail</label>
          <input type="file"/>

          <div className='thumbnail'></div>
        </div>
    </div>
  )
}

export default AddPortfolio
