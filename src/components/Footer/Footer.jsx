import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="parent">
            <div className="child">
                <button>Служба поддержки</button>
            </div>
            <div className="child">
                <span>Пользовательское соглашение</span>
                <span>Правовая информация</span>
            </div>
            <div className="child">
                <span>Контакты</span>
                <span>Помощь (FAQ)</span>
            </div>
            <div className="child">
                <span>call: +998999999999</span>
                <span>adrress:Street 12, Qwerty </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer