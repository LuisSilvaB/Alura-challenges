import React from 'react';
import Icono from '../../Img/Inicio/Vector.svg'
import Alura from '../../Img/Inicio/Alura.svg'
import Geek from '../../Img/Inicio/Geek.svg'
import SearchIcon from '../../Img/Inicio/SeacrhIcon.svg'
import './Navbar.css'; 

import { Link, Navigate } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='Navbar'>
      <h1 className='TituloAlura' onClick={Navigate }>
        <img src = { Icono } alt='Icono Alura Geek'/>
        <img src = { Alura } alt='Icono Alura'/>
        <img src = { Geek } alt='Icono Geek'/>
      </h1>
      <div className='containerSarchButtons'>  
        <div className='SearchBar'>
          <input className='SearchBar__input' type='text' placeholder='¿Qué deseas buscar?'/>
          <img className='SearchBar__icono' src = { SearchIcon }/>
        </div>
        <div className='ContainerButtons'>
          <button className='ContainerButtons__registro'> <Link to={'/registro'}>Registrarse</Link> </button>
          <button className='ContainerButtons__iniciarSesion'><Link to='/login'>Iniciar Sesión</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
