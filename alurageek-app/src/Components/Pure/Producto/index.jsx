import React from 'react';

import './Styles/Card-img.css'
import './Styles/Card-container.css'
import './Styles/Card-name.css'
import './Styles/Card-price.css'
import './Styles/Card-link.css'

const CardProducts = (props) => {
  return (
    <>
      <div className='Card__container'>        
        <img className='Card__img' src={ props.image }/>
        <p className='Card__name'> { props.name } </p>
        <p className='Card__price'> $ { props.price } </p>
        <a className='Card__link'> Ver producto </a>
      </div>
    </>
  );
}

export default CardProducts;
