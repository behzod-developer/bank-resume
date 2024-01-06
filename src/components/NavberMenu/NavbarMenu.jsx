import React, { useContext } from 'react'
import "./NavbarMenu.css"
import { StateContext } from '../../App'
import { IoMdClose } from "react-icons/io";


function NavbarMenu() {
    const { showMenu, setShowMenu } = useContext(StateContext)
    return (
        <div>
            <div className={`nav-menu-toggle ${showMenu && 'nav-menu-show'}`}>
                <button className='nav-show-btn' onClick={() => setShowMenu(false)}>
                    <IoMdClose />
                </button>
                <div className="menu-parent">
                    <div className="nav-mobile-btns">
                        <button className='btn nav-mobile-btn-1'>Вход для соискателя</button>
                        <button className='btn nav-mobile-btn-2'>Вход для директора</button>
                        <button className='btn nav-mobile-btn-3'>Регистрация</button>
                    </div>
                    <div className="nav-mobile-text">
                        <span>Пользовательское соглашение</span>
                        <span>Правовая информация</span>
                        <span>Контакты</span>
                        <span>Помощь (FAQ)</span>
                        <span>Служба поддержки</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu