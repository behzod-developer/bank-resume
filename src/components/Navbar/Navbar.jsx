import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import "./Navbar.css"
import { StateContext } from '../../App'

function Navbar() {
    const {setShowMenu} = useContext(StateContext)
    return (
        <nav>

            <NavLink to={'/'}>
                <img src={Logo} alt="" />
            </NavLink>

            <div className='nav-btn'>
                <NavLink to={'/login'}>
                    <button className='nav-btn-1'>
                        Вход
                    </button>
                </NavLink>

                <NavLink to={'/register'}>
                    <button className='nav-btn-2'>
                        Регистрация
                    </button>
                </NavLink>

            </div>

            <button onClick={()=> setShowMenu(true)} className='nav-menu-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </nav>
    )
}

export default Navbar