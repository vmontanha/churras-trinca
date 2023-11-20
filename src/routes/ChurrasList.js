import React, { useState } from 'react'
import DetalheChurras from '../Layout/DetalheChurras/DetalheChurras'

const ChurrasList = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState('')

  return (
    <DetalheChurras
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
    />
  )
}

export default ChurrasList