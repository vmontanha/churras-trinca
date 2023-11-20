import React from 'react'
// import CriarChurras from '../../components/CriarChurras/CriarChurras'
import Agenda from '../Agenda/Agenda'

const Churras = ({ todos, setTodos }) => {

  return (
    <>
      {/* <CriarChurras /> */}
      <Agenda
        todos={todos}
        setTodos={setTodos} />
    </>
  )
}

export default Churras