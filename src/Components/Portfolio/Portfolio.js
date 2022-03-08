import React from 'react'
import Filter from './Filter'
import Card from './Card'

const Portfolio = () => {
  return (
    <div className='portfolio'>

      <Filter/>

      <div className='grid_container'>

        <Card/>

      </div>

    </div>
  )
}

export default Portfolio
