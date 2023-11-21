import React, { useEffect, useState } from 'react'

const Agenda = () => {

  useEffect(() => {
    localStorage.getItem('churras')
  }, []);

  const churrasNow = JSON.parse(localStorage.getItem("churras"));
  console.log(churrasNow)

  return (
    <div className='warp__list'>
      {
        <div className='container__card'>
          <div className='box__subtitle'>
            <h2>{churrasNow}</h2>
          </div>
        </div>

      }


    </div>
  )
}

export default Agenda