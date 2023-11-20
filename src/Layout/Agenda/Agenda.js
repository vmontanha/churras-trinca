import React, { useEffect, useState } from 'react'

const Agenda = ({ todos, setTodos }) => {

  const [savedData, setSavedData] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem("todos")
  }, [setSavedData])


  return (
    <div className='warp__list'>
      {
        !savedData ? '' :
          savedData.map((churras) => (
            <div className='container__card'>
              <div className='box__subtitle'>
                <h2 key={churras}>{churras}</h2>
              </div>
            </div>
          ))
      }

    </div>
  )
}

export default Agenda