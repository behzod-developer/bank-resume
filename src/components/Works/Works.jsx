import React from 'react'
import { array_1 } from '../../datas/array_1'
import WorksCard from './WorksCard/WorksCard'
import "./Works.css"

function Works() {
  return (
    <section>
        <div className='works-parent'>
            {array_1.map((item )=> <WorksCard item={item} key={item.id} />)}
        </div>
    </section>
  )
}

export default Works