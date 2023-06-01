import React from 'react';
import Input from '../../Pure/Input';

import './Styles/Form-label.css'
import './Styles/Form-container.css'
import './Styles/Form-input.css'
import './Styles/Form-texarea.css'
import './Styles/Form-button.css'

const FormComponent = () => {
  return (
    <form className='Form__container'>
      <label className='Form__label'>Hable con nosotros</label>
      <input className='Form__input' type = 'text' placeholder = 'Nombre'/>
      <textarea className='Form__textarea' type = 'textArea' placeholder = 'Escriba un mensaje'/>
      <button className='Form__button'>Enviar mensaje</button>
    </form>
  );
}

export default FormComponent;
