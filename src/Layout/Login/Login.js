import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container__login'>
      <div className='form__box'>
        <div className='box__input'>
          <h2>Login</h2>
          <input type='text' placeholder='e-mail' />
        </div>
        <div className='box__input'>
          <h2>Senha</h2>
          <input type='text' placeholder='senha' />
        </div>
      </div>
      <div className='box__button'>
        <Link className='button__submit' to='/new'>Enviar</Link>
      </div>
    </div>

  )
}

export default Login
