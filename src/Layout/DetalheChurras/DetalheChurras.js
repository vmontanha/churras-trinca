import React, { useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'
import '../DetalheChurras/DetalheChurras.css'
import { people } from '../../utils/people'

import { Input } from '@mui/material';
import { Link } from 'react-router-dom';

const DetalheChurras = () => {

  const [churras, setChurras] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const [checkedState, setCheckedState] = useState(
    new Array(people.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChangePeople = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + people[index].price;
        }
        setChurras({ ...churras, money: churras.money })
        localStorage.setItem("churras_money", JSON.stringify(sum))
        return sum;
      },
      0
    );

    setTotal(totalPrice)
  };

  const count = checkedState.filter(function (item) {
    if (item === true) {
      return true;
    } else {
      return false;
    }
  }).length;



  localStorage.setItem("churras_people", JSON.stringify(count))


  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('churras')) || [];

    const newData = {
      title: title,
      ...existingData.date,
      date: date,
      index: existingData.length,
    };

    if (Array.isArray(existingData)) {
      existingData.push(newData);
      localStorage.setItem('churras', JSON.stringify(existingData));
    } else {
      const newDataArray = [newData];
      localStorage.setItem('churras', JSON.stringify(newDataArray));
    }
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('churras')) || [];

    const newData = {
      title: title,
      ...existingData.title,
      date: date,
      index: existingData.length,
    };

    if (Array.isArray(existingData)) {
      existingData.push(newData);
      localStorage.setItem('churras', JSON.stringify(existingData));
    } else {
      const newDataArray = [newData];
      localStorage.setItem('churras', JSON.stringify(newDataArray));
    }
  };

  return (
    <div className='container__list'>
      <div className='box__people'>
        <div className='box__date'>
          <Input
            value={date}
            onBlur={handleSubmitData}
            onChange={(e) => setDate(e.target.value)}
            className='input-data'
            placeholder='01/02' />
        </div>
        <div className='qtd__people'>
          <img src={iconPeople} alt='people' />
          <p>{count}</p>
        </div>
      </div>
      <div className='box__people title'>
        <div className='box__date'>
          <Input
            value={title}
            onBlur={handleSubmit}
            onChange={(e) => setTitle(e.target.value)}
            className='input-title'
            placeholder='Niver do Vini' />
        </div>
        <img src={iconMoney} alt='people' />
        <p>R${total}</p>
      </div>
      {
        people.map(({ name, price }, index) => {
          return (
            <div className='box__people under__style' key={index}>
              <div className='box__date'>
                <input type='checkbox'
                  checked={checkedState[index]}
                  id={`custom-checkbox-${index}`}
                  className={checkedState[index] ? "checked" : ""}
                  onChange={() => handleOnChangePeople(index)}
                  value={name}
                />
                <label className='container__label' htmlFor={`custom-checkbox-${index}`}>
                  {name}
                </label>
              </div>
              <p className={checkedState[index] ? "money check" : 'money'} >{`R$` + price + `,00`}</p>
            </div>
          );
        })}
      <div className='btn__back'>
        <Link to={'/agenda'} >
          <a>Voltar para Agenda</a>
        </Link>
      </div>
    </div>
  )
}

export default DetalheChurras