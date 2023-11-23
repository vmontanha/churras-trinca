import React, { useEffect, useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'

import '../Agenda/Agenda.css'
import '../../components/CriarChurras/CriarChurras.css'

const Agenda = () => {

  useEffect(() => {
    localStorage.getItem('churras')
  }, []);

  const churras = JSON.parse(localStorage.getItem("churras"));

  if (!churras) return

  return (
    <>
      {
        Array.from(churras).map((item) => {
          return (
            <div className='container__card white' key={item.index}>
              <div className='box__title__agenda'>
                <h2>{item.date}</h2>
                <h3>{item.title}</h3>
              </div>
              <div className='box__dados'>
                <div className='box__people__money__agenda'>
                  <img src={iconPeople} alt='people' />
                  <p>{item.people.length}</p>
                </div>
                <div className='box__people__money__agenda'>
                  <img src={iconMoney} alt='money' />
                  <p>{`R$` + item.money + `,00`}</p>
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