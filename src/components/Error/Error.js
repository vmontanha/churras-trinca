import React from 'react'
import '../Error/Error.css'
import gifError from '../../assets/img/Animation - 1700698372514.gif'

const Error = () => {
  return (
    <div className='container__error'>
      <div className='box__error'>
        <h1>Opss...</h1>
        <img src={gifError} />
        <h2>Parece que a página que você acessou não existe.</h2>
      </div>
    </div>
  )
}

export default Error