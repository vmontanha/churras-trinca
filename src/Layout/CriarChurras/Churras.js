import React from 'react'
import CriarChurras from '../../components/CriarChurras/CriarChurras'
import Agenda from '../Agenda/Agenda'
import '../../components/CriarChurras/CriarChurras.css'

const Churras = () => {

  return (

    <div className='warp__list'>
      <Agenda />
      <CriarChurras />
    </div>

  )
}

export default Churras