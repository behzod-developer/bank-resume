import React from 'react'
import "./Register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import registor_image from "../../assets/puzzle_image_registor.png"

function Register() {
  const naviagte = useNavigate()
  const addToHandler = (e) => {
    e.preventDefault()
    const forma = new FormData(e.target)
    const { surname, name, mid_name, age, phone, email, password } = Object.fromEntries(forma.entries())
    const newData = {
      surname,
      name,
      mid_name,
      age,
      phone,
      email,
      password
    }

    try {
      axios.post("http://localhost:8000/users", newData)
        .then(res => {
          console.log('data qoshildi')
        })
    }
    catch (err) {
      console.log(err)
    }
    naviagte('/login')
  }

  return (
    <div className="registor">
      <div className="form">
        <form onSubmit={addToHandler} action="">  
        <h1>регистрация</h1>
          <span>Фамилия*</span>
          <input required type="text" name='surname' placeholder='Фамилия' />
          <span>Имя*</span>
          <input required type="text" name='name' placeholder='Имя' />
          <span>Отчество*</span>
          <input required type="text" name='mid_name' placeholder='Отчество' />
          <span>Возраст*</span>
          <input required type="number" name='age' placeholder='Возраст' />
          <span>Телефон*</span>
          <input required type="number" name='phone' placeholder='Телефон' />
          <span>E-mail</span>
          <input required type="email" name='email' placeholder='Введите e-mail' />
          <span>Пароль*</span>
          <input required type="password" name='password' placeholder='Пароль' />
          <button className=''>Зарегистрироваться</button>
        </form>
      </div>
      <div className="registor-image">
        <img src={registor_image} alt="" />
      </div>
    </div>
  )
}

export default Register