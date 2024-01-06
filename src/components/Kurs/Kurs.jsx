import React from 'react'
import "./Kurs.css"

function Kurs() {
    return (
        <section className='section-kurs'>
            <div className="kurs">
                <div className="kurs-child-1">
                    <div className="kurs-card-1 kurs-pc kurs-card">
                        <b>1</b>
                        <div className="text">
                            <h3>Запишитесь</h3>
                            <p>на консультацию</p>
                        </div>
                    </div>
                    <div className="kurs-card-2 kurs-pc kurs-card">
                        <b>2</b>
                        <div className="text">
                            <h3>пройдите курс</h3>
                            <p>в комфортном режиме</p>
                        </div>
                    </div>
                </div>
                <div className="kurs-child-2">
                    <h1>welcome-курс</h1>
                    <p>Запишитесь, чтобы пройти бесплатный welcome-курс.</p>

                    <div className="kurs-card-1 kurs-mobile kurs-card">
                        <b>1</b>
                        <div className="text">
                            <h3>Запишитесь</h3>
                            <p>на консультацию</p>
                        </div>
                    </div>
                    <div className="kurs-card-2 kurs-mobile kurs-card">
                        <b>2</b>
                        <div className="text">
                            <h3>пройдите курс</h3>
                            <p>в комфортном режиме</p>
                        </div>
                    </div>

                    <div className="kurs-btn">
                        <button className='btn'>Записаться</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Kurs