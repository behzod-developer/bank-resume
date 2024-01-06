import React from 'react'
import "./Work.css"
import People_1 from "../../assets/people_1.png"
import People_2 from "../../assets/people_2.png"

function Work() {
    return (
        <div className='section-work'>
            <div className="child">
                <div className="text">
                    <h2>Для работодателей</h2>
                    <p>Доступ к банку резюме предоставляется администрациям школ города Москвы. Если вы являетесь директором московской школы, вы можете войти в банк резюме, используя единую учетную запись ЕКИС.</p>
                    <div className='work-btn'>
                        <button className='btn btn_1'>Вход</button>
                    </div>
                </div>
                <img src={People_1} alt="" />
            </div>
            <div className="child">
                <div className="text">
                    <h2>Для соискателей</h2>
                    <p>Ваш помощник в поиске работы в московских школах.</p>
                    <p>Бесплатная публикация резюме</p>
                    <div className="work-btn">
                        <button className='btn btn_2'>Зарегистрироваться</button>
                        <button className='btn btn_1'>Вход</button>
                    </div>
                </div>
                <img src={People_2} alt="" />
            </div>
        </div>
    )
}

export default Work 