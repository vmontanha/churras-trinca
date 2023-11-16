import React from 'react'
import newChurrasIcon from '../../assets/img/icon_churras.png'
import '../CriarChurras/CriarChurras.css'

const CriarChurras = () => {
  return (
    <div className='warp__list'>
      <div className='container__card'>
        <div className='box__icon'>
          <img src={newChurrasIcon} alt='newChurrasIcon' />
        </div>
        <div className='box__subtitle'>
          <h2>Adicionar Churras</h2>
        </div>
      </div>
      <div className='container__card'>
        <div className='box__icon'>
          <img src={newChurrasIcon} alt='newChurrasIcon' />
        </div>
        <div className='box__subtitle'>
          <h2>Adicionar Churras</h2>
        </div>
      </div>
      <div className='container__card'>
        <div className='box__icon'>
          <img src={newChurrasIcon} alt='newChurrasIcon' />
        </div>
        <div className='box__subtitle'>
          <h2>Adicionar Churras</h2>
        </div>
      </div>
      <div className='container__card'>
        <div className='box__icon'>
          <img src={newChurrasIcon} alt='newChurrasIcon' />
        </div>
        <div className='box__subtitle'>
          <h2>Adicionar Churras</h2>
        </div>
      </div>
    </div>
  )
}

export default CriarChurras