import './campo.css'
import { useState } from 'react'
const Campo = (props) => {
  const placeholderModificador = `${props.placeholder} ...`
  const { type } = props;  
  const manejarCambio = (e) => {
    console.log("Manejar cambio", e.target.value);
    props.actualizar(e.target.value)
  }
  return (
    // De esta forma podemos enviar el required 
      <div className={ `campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input 
          type= { type } 
          placeholder={ placeholderModificador }  
          required = { props.required } 
          value = { props.valor }
          onChange={ manejarCambio }
        />
          
      </div>
    )
}
export default Campo; 