import React, { useState } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'
import '../DetalheChurras/DetalheChurras.css'
import { people } from '../../utils/people'

import { Input } from '@mui/material';
import { Link } from 'react-router-dom';

const DetalheChurras = () => {

  const [churras, setChurras] = useState({ data: '', title: '' })
  const [totalPeople, setTotalPeople] = useState(0);

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
        return sum;
      },
      0
    );


    setTotal(totalPrice);
  };

  console.log(totalPeople)

  const handleChangeData = (e) => {
    let value = e.target.value;
    setChurras({ data: value })
  }

  const handleChangeTitle = (e) => {
    let value = e.target.value;
    setChurras({ title: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setChurras({ ...churras, title: churras.title })
    localStorage.setItem("churras_title", JSON.stringify(churras))
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    setChurras({ ...churras, data: churras.data })
    localStorage.setItem("churras_date", JSON.stringify(churras))
  };

  return (
    <div className='container__list'>
      <div className='box__people'>
        <div className='box__date'>
          <Input
            value={churras.data}
            onBlur={handleSubmitData}
            onChange={handleChangeData}
            className='input-data'
            placeholder='01/02' />
        </div>
        <div className='qtd__people'>
          <img src={iconPeople} alt='people' />
          <p>{totalPeople}</p>
        </div>
      </div>
      <div className='box__people title'>
        <div className='box__date'>
          <Input
            value={churras.title}
            onBlur={handleSubmit}
            onChange={handleChangeTitle}
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