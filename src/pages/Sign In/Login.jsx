import React from 'react'
import login_logo from "../../assets/logo.png"
import "./Login.css"
import login_image from "../../assets/puzzle_image_registor.png"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const shootRegistor = () => {
    navigate('/register')
  }

  const shootHome = () => {
    navigate('/')
  }

  const loginHandler = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const { email, password } = Object.fromEntries(form.entries())
    if (email == "bek@mail.ru" && password == "1") {
      navigate("/")
    }
    else {
      alert('e-mail yoki password xato')
    }
  }

  return (
    <div className="login-container">
      <div className="login">
        <div className="form">
          <form onSubmit={loginHandler} action="">
            <img onClick={shootHome} className='login-logo' src={login_logo} alt="" />
            <h1>Вход</h1>
            <span>E-mail</span>
            <input required type="email" name='email' placeholder='Введите e-mail' />
            <span>Пароль*</span>
            <input required type="password" name='password' placeholder='Пароль' />
            <button className='btn login-btn'>Вход</button>
          </form>
          <button onClick={shootRegistor} className='btn login-login-btn'>Зарегистрироваться</button>
        </div>
        <div className="login-image">
          <img src={login_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login