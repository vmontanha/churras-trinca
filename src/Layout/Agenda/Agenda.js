import React, { useEffect, useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'

import '../Agenda/Agenda.css'
import '../../components/CriarChurras/CriarChurras.css'

const Agenda = () => {

  useEffect(() => {
    localStorage.getItem('churras_date')
    localStorage.getItem('churras_title')
  }, []);

  const churrasDate = JSON.parse(localStorage.getItem("churras_date"));
  const churrasTitle = JSON.parse(localStorage.getItem("churras_title"));

  console.log(churrasTitle)
  return (
    <>
      {/* {
        <div className='container__card'>
          <div className='box__subtitle'>
            <h2>{churrasDate.data}</h2>
            <h2>{churrasTitle.title}</h2>
          </div>
        </div>
      } */}
      <div className='container__card white'>
        <div className='box__title__agenda'>
          <h2>01/02</h2>
          <h3>Niver Gui</h3>
        </div>
        <div className='box__dados'>
          <div className='box__people__money__agenda'>
            <img src={iconPeople} alt='people' />
            <p>15</p>
          </div>
          <div className='box__people__money__agenda'>
            <img src={iconMoney} alt='people' />
            <p>R$ 280,00</p>
          </div>

        </div>
      </div >
    </>
  )
}

export default Agenda