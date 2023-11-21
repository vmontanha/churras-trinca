import React, { useEffect, useState } from 'react'

const Agenda = () => {

  useEffect(() => {
    localStorage.getItem('churras_date')
    localStorage.getItem('churras_title')
  }, []);

  const churrasDate = JSON.parse(localStorage.getItem("churras_date"));
  const churrasTitle = JSON.parse(localStorage.getItem("churras_title"));

  console.log(churrasTitle)
  return (
    <div className='warp__list'>
      {
        <div className='container__card'>
          <div className='box__subtitle'>
            <h2>{churrasDate.data}</h2>
            <h2>{churrasTitle.title}</h2>
          </div>
        </div>
      }

    </div>
  )
}

export default Agenda