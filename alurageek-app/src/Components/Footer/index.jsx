import React from 'react';
import FormComponent from '../Container/Form/index';
import Alura from '../../Img/Inicio/Alura.svg'
import Geek from '../../Img/Inicio/Geek.svg'

import './Styles/Footer-container.css'
import './Styles/Footer-informacion.css'
import './Styles/Footer-icono.css'
import './Styles/Footer-list.css'

const Footer = () => {
  return (
    <div className='Footer__container'>
      <div className='Footer__informacion'>
        <div className='Footer__icono'>
          <img src = { Alura } alt='Icono Alura'/>
          <img src = { Geek } alt='Icono Geek'/>
        </div>
        <div className='Footer__list'>
          <ul>
            <li>Quienes somos</li>
            <li>Política de privacidad</li>
            <li>Programa de fidelidad</li>
            <li>Nuestras tiendas</li>
            <li>Quiero ser franquiciario</li>
            <li>Anúncie aquí</li>
          </ul>
        </div>
      </div> 
      <FormComponent></FormComponent>
    </div>
  );
}

export default Footer;
