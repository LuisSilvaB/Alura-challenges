import React from 'react';

import './Styles/List-container.css'
import './Styles/List-header.css'
import './Styles/Categoria-title.css'
import './Styles/List-cards.css'


import { categorias } from '../../../Data/Productos/Categorias';
import { productos } from '../../../Data/Productos/Productos'

import  CardProducts  from '../../Pure/Producto/index'


const ListProductsView = () => {
  return (
    <>
      {
        categorias.map((categoria, key)=>{
           const Productosfilter = productos.filter((producto) =>  categoria === producto.categoria );
          return(          
          <section className='List__container'> 
            <div className='List__header'>
              <h3 className='Categoria__title'> { categoria } </h3>
              <a className='Categoria__link'> Ver todo </a>
            </div>
            <div div className='List__cards'>
              {
                Productosfilter.map((el)=>{
                  return(
                    <>
                      <CardProducts image = {el.url} name = {el.nombre} price = {el.precio} ></CardProducts>
                    </>
                  )
                })
              }
            </div>
          </section>
          )

        })
      }
    </>
  );
}

export default ListProductsView;
