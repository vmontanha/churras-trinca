import React, { useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'
import '../DetalheChurras/DetalheChurras.css'
import { peopleList } from '../../utils/people'

import { Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const DetalheChurras = () => {

  const navigate = useNavigate();

  const [churras, setChurras] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [money, setMoney] = useState(0)
  const [people, setPeople] = useState([])

  const handleSelect = (person, price, sum) => {
    setMoney((prevMoney) => !sum ? prevMoney - price : prevMoney + price)
    setPeople((prevPeople) => !sum ?
      prevPeople.filter((prevPerson) => person.id != prevPerson.id
      ) :
      [...prevPeople, person])
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (people.length < 1 || !title || !date) {
      return
    }
    const existingData = JSON.parse(localStorage.getItem('churras')) || [];

    const newData = [
      ...existingData, {
        title,
        date,
        index: existingData.length,
        people,
        money
      }
    ];

    localStorage.setItem('churras', JSON.stringify(newData));

    navigate('/agenda')
  };

  return (
    <div className='container__list'>
      <div className='box__people'>
        <div className='box__date'>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='input-data'
            placeholder='01/02' />
        </div>
        <div className='qtd__people'>
          <img src={iconPeople} alt='people' />
          <p>{people.length}</p>
        </div>
      </div>
      <div className='box__people title'>
        <div className='box__date'>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='input-title'
            placeholder='Niver do Vini' />
        </div>
        <img src={iconMoney} alt='people' />
        <p>R${money}</p>
      </div>
      {
        peopleList.map((person) => {
          const isSelected = people.find((statePerson) => statePerson.id === person.id)
          return (
            <div className='box__people under__style' key={person.id}>
              <div className='box__date'>
                <input type='checkbox'
                  id={`custom-checkbox-${person.id}`}
                  className={isSelected ? "checked" : ""}
                  onChange={(e) => handleSelect(person, person.price, e.currentTarget.checked)}
                  value={person.name}
                />
                <label className='container__label' htmlFor={`custom-checkbox-${person.id}`}>
                  {person.name}
                </label>
              </div>
              <p className={isSelected ? "money check" : 'money'} >{`R$` + person.price + `,00`}</p>
            </div>
          );
        })}
      <div className='btn__back'>
        <Link onClick={handleSubmit} >
          <a>Confirmar Churras</a>
        </Link>
      </div>
    </div>
  )
}

export default DetalheChurras