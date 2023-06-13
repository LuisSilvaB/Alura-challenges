import React from 'react';

import './Styles/Form-container.css'
import '../../Components/Container/Form/Styles/Form-input.css'
import '../../Components/Container/Form/Styles/Form-button.css'

import Footer from '../../Components/Footer';


const Login = () => {
  return (
    <>
      <section className='form__container'>  
        <form onSubmit={()=>{}}>
          <h3 className='form__title'>Iniciar Sesión</h3>
          <input className='Form__input' placeholder='Escriba su correo electrónico'></input>
          <input className='Form__input' placeholder='Escriba su contraseña'></input>
          <button className='Form__button'>Entrar</button>
        </form>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Login;
