import React from 'react'
import "../Works.css"

function WorksCard({item}) {
  return (
    <div className='works-card'>
        <img src={item.image} alt="" />
        <h1>{item.number}</h1>
        <span>{item.span}</span>
    </div>
  )
}

export default WorksCard