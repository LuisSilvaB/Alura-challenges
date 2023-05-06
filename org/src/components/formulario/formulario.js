import CampoTexto from '../campo';
import { useState } from 'react';
import './formulario.css'
import '../campo'
import ListaOpciones from '../listaOpciones';
import Boton from '../boton'
import {v4 as uuid} from "uuid"; 

const Formulario = (props) => {
  const { crearEquipo } = props;
  // ? Colaborador
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  // ? Equipo 
  const [titulo, setTitulo] = useState(""); 
  const [color, setColor] = useState("")

  // ? Colaboradores
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log('Manejando envio', evento);
    // let datosAEnviar = {
    //   Nombre: nombre, 
    //   Puesto: puesto, 
    //   Foto: foto, 
    //   Equipo: equipo
    // }
    // * Tambien se puede definir ( Colaborador)
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    } 
    props.fCrearColaborador(datosAEnviar); 
  }
  
  // * Funciones de actualizacón
  function actualizarNombre(nombre) {
    setNombre(nombre)
  }
  function actualizarPuesto(puesto) {
    setPuesto(puesto)
  }
  function actualizarFoto(foto) {
    setFoto(foto)
  }
  function actualizarEquipo(equipo) {
    setEquipo(equipo)
  }
  
  // ? Equipos 
  
  const manejarEnvioEquipos = (e) => {
    e.preventDefault(); 
    let datosAEnviar = {
      id: uuid(),
      titulo,
      color_secundario:color,
    }
    crearEquipo(datosAEnviar); 
  }

  function actualizarTitulo(titulo) {
    setTitulo(titulo)
  }
  function actualizarColor(color) {
    setColor(color)
  }
  return (
    <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2> Rellena el formulario para crear el colaborador </h2>
        <CampoTexto 
          titulo = "Nombre" 
          placeholder = "Ingresar nombre" 
          propRequired = {true}
          valor = { nombre }
          actualizar = { actualizarNombre }
        />
        <CampoTexto 
          titulo = "Puesto"  
          placeholder = "Ingresar puesto" 
          propRequired = {true}
          valor = { puesto }
          actualizar = { actualizarPuesto }
        />
        <CampoTexto 
          titulo = "Foto" 
          placeholder = "Ingresar foto" 
          propRequired = {true} 
          valor = { foto }
          actualizar = { actualizarFoto }
        />
        <ListaOpciones 
          titulo = "Equipo"
          valor = { equipo }
          actualizar = { actualizarEquipo }
          equipos = { props.equipos }
        ></ListaOpciones>
        <Boton 
          Nombre="Crear Colaborador" 
          crear = {manejarEnvio}
        ></Boton>
      </form> 
      <form onSubmit={manejarEnvioEquipos}>
        <h2> Rellena el formulario para crear el colaborador </h2>
        <CampoTexto 
          titulo = "Titulo" 
          placeholder = "Ingresar titulo" 
          propRequired = {true}
          valor = { titulo }
          actualizar = { actualizarTitulo }
        />
        <CampoTexto 
          titulo = "Color"
          type = "color"  
          placeholder = "Ingresar Ingresar el color" 
          propRequired = {true}
          valor = { color }
          actualizar = { actualizarColor }
        />
        <Boton 
          Nombre="Crear equipo" 
          crear = {manejarEnvio}
        ></Boton>
      </form> 
    </section>
  )
}
export default Formulario;  