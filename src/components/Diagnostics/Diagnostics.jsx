import React from 'react'
import "./Diagnostics.css"
import { diagnostics } from '../../datas/diagnostics'
import DiagnosticsCard from './DiagnosticsCard/DiagnosticsCard'


function Diagnostics() {
    return (
        <section className='diagnostics'>
            <div className="container">
                <div className="diagnostics-parent-first">
                    <div className="diagnostics-child">
                        <h1>пройдите <br /> диагностику </h1>
                    </div>
                    <div className="diagnostics-child">
                        <p>Вы можете пройти профессиональную диагностику на нашем сайте и получить результаты сразу после ее прохождения. </p>
                        <button className='btn diagnostics-pc-btn'>Пройти диагностику</button>
                    </div>
                </div>
                <div className="diagnostics-parent">
                    {
                        diagnostics.map((item => <DiagnosticsCard item={item} key={item.id} />))
                    }
                    <button className='btn diagnostics-mobile-btn'>Пройти диагностику</button>
                </div>
            </div>
        </section>
    )
}

export default Diagnostics