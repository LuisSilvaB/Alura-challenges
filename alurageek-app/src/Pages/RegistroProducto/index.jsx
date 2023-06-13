import React from 'react';

import '../../Components/Container/Form/Styles/Form-input.css'
import '../../Components/Container/Form/Styles/Form-button.css'

const RegistroProducto = () => {
  return (
    <>
      <section>
        <form className='form__container' onSubmit={()=>{}}>
          <h3>Agregar nuevo producto</h3>
          <input placeholder='URL de imagen'></input>
          <input placeholder='Catgoría'></input>
          <input placeholder='Consolas'></input>
          <input placeholder='Nombre del producto'></input>
          <input placeholder='Precio del producto'></input>
          <textarea placeholder='Descripción del producto'></textarea>
          <button></button>
        </form>
      </section>
    </>
  );
}

export default RegistroProducto;
