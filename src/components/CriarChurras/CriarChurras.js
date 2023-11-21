import React from 'react'
import newChurrasIcon from '../../assets/img/icon_churras.png'
import '../CriarChurras/CriarChurras.css'
import { Link } from 'react-router-dom'

const CriarChurras = () => {

  return (

    <div className='container__card'>
      <Link to='/new'>
        <div className='box__icon'>
          <img src={newChurrasIcon} alt='newChurrasIcon' />
        </div>
        <div className='box__subtitle'>
          <h2>Adicionar Churras</h2>
        </div>
      </Link >
    </div>
  )
}

export default CriarChurras