import './MiOrg.css' 
import { useState } from 'react';

const MiOrg = (props) => {

  const [monstrar, actualizarMostrar] = useState(true); 
  const manejarClick = () => {
    console.log("Mostrar/ocultar elemento");
    actualizarMostrar("hola")
    console.log(monstrar);
  }
  return (
      <div className='orgSection'>
        <h3 className='title'> Mi organización </h3>
        <img src='/img/add.png' onClick={props.aFormulario} />
      </div>
    )
}

export default MiOrg; 