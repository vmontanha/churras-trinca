import React, { useEffect } from 'react'
import iconPeople from '../../assets/img/icon_people.png'
import iconMoney from '../../assets/img/icon_money.png'
import '../DetalheChurras/DetalheChurras.css'
import { v4 as uuidv4 } from "uuid";

import { Input } from '@mui/material';

const DetalheChurras = ({ input, setInput, todos, setTodos }) => {

  const handleChange = (e) => setInput(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(input)
    const newChurras = localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(newChurras)
  };

  console.log(todos)
  return (
    <div className='container__list'>
      <div className='box__people'>
        <div className='box__date'>
          <h3>01/02</h3>
        </div>
        <div className='qtd__people'>
          <img src={iconPeople} alt='people' />
          <p>15</p>
        </div>
      </div>
      <div className='box__people title'>
        <div className='box__date'>
          <Input
            value={input}
            onBlur={handleSubmit}
            onChange={handleChange}
            className='input-title' />
        </div>
        <img src={iconMoney} alt='people' />
        <p>R$280</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Aline</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Beto</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Diego B.</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Diego P.</label>
        </div>
        <p className='money'>R$10,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Fernando</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' checked='checked' />
          <span className='checkmark'></span>
          <label className='container__label'>Gabriel</label>
        </div>
        <p className='money check'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Leonardo</label>
        </div>
        <p className='money'>R$10,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Marcus J.</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Aline</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Michele</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Paulo</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Rafael S.</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Ralf</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' checked='checked' />
          <span className='checkmark'></span>
          <label className='container__label'>Ruan</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Thales</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
      <div className='box__people under__style'>
        <div className='box__date'>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <label className='container__label'>Wait</label>
        </div>
        <p className='money'>R$20,00</p>
      </div>
    </div>
  )
}

export default DetalheChurras