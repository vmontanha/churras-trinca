import React, { useEffect, useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'

import '../Agenda/Agenda.css'
import '../../components/CriarChurras/CriarChurras.css'

const Agenda = () => {

  useEffect(() => {
    localStorage.getItem('churras')
    localStorage.getItem('churras_money')
    localStorage.getItem('churras_people')
  }, []);

  const churras = JSON.parse(localStorage.getItem("churras"));
  const churraMoney = JSON.parse(localStorage.getItem("churras_money"));
  const churrasPeople = JSON.parse(localStorage.getItem("churras_people"));


  return (
    <>
      {
        Array.from(localStorage.key).map((index) => {
          return (
            <div className='container__card white' key={index}>
              <div className='box__title__agenda'>
                <h2>{churras.date}</h2>
                <h3>{churras.title}</h3>
              </div>
              <div className='box__dados'>
                <div className='box__people__money__agenda'>
                  <img src={iconPeople} alt='people' />
                  <p>{churrasPeople}</p>
                </div>
                <div className='box__people__money__agenda'>
                  <img src={iconMoney} alt='people' />
                  <p>{churraMoney}</p>
                </div>
              </div>
            </div >
          )
        })
      }
    </>
  )
}

export default Agenda