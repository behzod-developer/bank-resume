import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main_Image from "../../assets/main_illustr.png"
import "./Banner.css"
import Mobile_image from "../../assets/mobile_image.png"

function Banner() {
    return (
        <section className='banner'>
            <Navbar />
            <div className="parent">
                <img src={Mobile_image} className='mobile_image' alt="" />
                <div className="child">
                    <h1>команды мечты <br /> создаются здесь</h1>
                    <p>помощник в поиске работы и сотрудников в сфере образования</p>
                    <button className='btn'>Начать</button>
                </div>
                <div className="child">
                    <img className='main_image' src={Main_Image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner