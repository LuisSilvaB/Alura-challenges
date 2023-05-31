import React from 'react';
import './Styles/Inicio-container.css'
import './Styles/Inicio-img.css'
import './Styles/Inicio-shadow.css'
import './Styles/Inicio-informacion.css'
import './Styles/Lists.css'
import ImageBackground from '../../Img/Inicio/BnnerInicio.jpg'

import ListProductsView from '../../Components/Container/ListaProductosView';

const Inicio = () => {
  return (
    <>
     <div className='Inicio__container'>
        <img className='Inicio__img' src = { ImageBackground }/>
        <div className='Inicio__shadow'/>
        <div className='Inicio__informacion'>  
          <h2>Febrero Promocional</h2>
          <p>Productos seleccionados con 33% de descuentos</p>
          <button>Ver Consolas</button>
        </div>
     </div> 
     <div className='Lists'>
      <ListProductsView/>
     </div>
    </>
  );
}

export default Inicio;
