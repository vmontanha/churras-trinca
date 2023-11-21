import React, { useState } from 'react'
import CriarChurras from '../../components/CriarChurras/CriarChurras'
import Agenda from '../Agenda/Agenda'

const Churras = ({ input }) => {

  return (
    <>
      <Agenda input={input} />
    </>
  )
}

export default Churras