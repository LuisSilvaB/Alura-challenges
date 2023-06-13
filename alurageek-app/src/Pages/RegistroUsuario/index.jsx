import React from 'react';

import '../../Components/Container/Form/Styles/Form-container.css' 
import '../../Components/Container/Form/Styles/Form-input.css' 
import '../../Components/Container/Form/Styles/Form-button.css' 
import Footer from '../../Components/Footer';

const RegistroUsuario = () => {
  return (
    <>
     <section className='form__container'>
      <form onSubmit={()=>{}}>
        <h3>Registrarse</h3>
        <input className='Form__input' placeholder='Ingrese su nombre de usuario'></input>
        <input className='Form__input' placeholder='Ingrese su correo electrócico'></input>
        <input className='Form__input' placeholder='Ingrese su correo contraseña'></input>
        <button className='Form__button'>Registrarse</button>
      </form>
     </section> 
     <Footer></Footer>
    </>
  );
}

export default RegistroUsuario;
