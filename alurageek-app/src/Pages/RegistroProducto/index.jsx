import React from 'react';

import '../../Components/Container/Form/Styles/Form-input.css'
import '../../Components/Container/Form/Styles/Form-button.css'

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Producto } from '../../Models/Producto.model'; 
import { productos } from '../../Data/Productos/Productos';
import Footer from '../../Components/Footer';

const RegistroProducto = () => {
  
  const [id, setId] = useState()
  const [url, setUrl] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  
  const registrarProducto = (evento) => {
    evento.preventDefault();
    const newId = uuidv4();
    setId(newId);
    const productoNuevo = new Producto(id, url, categoria, nombre, precio, descripcion);
    productos.push(productoNuevo)
    console.log(newId);
    console.log(productoNuevo);
    console.log(productos);
  }
  return (
    <>
      <section className='form__container'>
        <form onSubmit={(e)=>{registrarProducto(e)}}>
          <h3>Agregar nuevo producto</h3>
          <input className='Form__input' placeholder='URL de imagen' onChange={(e)=>{setUrl(e.target.value)}}/>
          <input className='Form__input' placeholder='Catgoría' onChange={(e)=>{setCategoria(e.target.value)}}/>
          <input className='Form__input' placeholder='Nombre del producto' onChange={(e)=>{setNombre(e.target.value)}}/>
          <input className='Form__input' placeholder='Precio del producto' onChange={(e)=>{setPrecio(e.target.value)}}/>
          <textarea className='Form__input' placeholder='Descripción del producto' onChange={(e)=>{setDescripcion(e.target.value)}}/>
          <button className='Form__button'>Registrar producto</button>
        </form>
      </section>
      <Footer></Footer>
    </>
  );
}

export default RegistroProducto;
