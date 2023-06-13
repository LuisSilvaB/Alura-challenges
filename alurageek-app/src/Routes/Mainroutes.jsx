import React from 'react';
import { Routes, Route} from 'react-router-dom'; 
import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import RegistroProducto from '../Pages/RegistroProducto';
import RegistroUsuario from '../Pages/RegistroUsuario';

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = { <Inicio/> }/>
        <Route path='/login' element = { <Login/> }/>
        <Route path='/registro' element = { <RegistroUsuario/> }/>
        <Route path='/producto/:id' element = { <Inicio/> }/>
        <Route path='/registro-producto' element = { <RegistroProducto/> }/>
      </Routes>
    </>
  );
}

export default Mainroutes;
