import React from 'react';
import { Routes, Route} from 'react-router-dom'; 
import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = { <Inicio/> }/>
        <Route path='/login' element = { <Login/> }/>
        <Route path='/producto/:id' element = { <Inicio/> }/>
        <Route path='/registro' element = { <Inicio/> }/>
      </Routes>
    </>
  );
}

export default Mainroutes;
