import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/equipos';
import Footer from './components/footer';
// ! Uso de uuid 

import {v4 as uuid} from "uuid"; 
import Colaborador from './components/Colaborador';

function App() {
  console.log(uuid());
  const [estadoFormulario, setEstadoFormulario] = useState(false); 
  // * Lista de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor", 
    fav:true, 
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false,
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:true,
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false,
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:true,
  },
  {
    id:uuid(),
    equipo:"Front End",
    foto:"https://github.com/LuisSilvaB.png",
    nombre:"Luis Armando", 
    puesto:"Ingeniero",  
    fav:true,
  }
]);
  // * Lista de equipos 
  const [equipos, setEquipos] = useState([
    {
      id:uuid(),
      titulo: 'Programación', 
      color_primario: '#57C278',
      color_secundario: '#D9F7E9'
    },
    {
      id:uuid(),
      titulo:'Front End',
      color_primario: '#82CFFA',
      color_secundario: '#E8F8FF',
    },
    {
      id:uuid(),
      titulo: 'Data Science', 
      color_primario: '#A6D157',
      color_secundario: '#F0F8E2'
    }, 
    {
      id:uuid(),
      titulo: 'Devops', 
      color_primario: '#E06B69',
      color_secundario: '#FDE7E8', 
    },
    {
      id:uuid(),
      titulo: 'UX y Diseño', 
      color_primario: '#DB6EBF',
      color_secundario: '#FAE9F5'
    },
    {
      id:uuid(),
      titulo: 'Movil', 
      color_primario: '#FFBA05',
      color_secundario: '#FFF5D9'
    },
    {
      id:uuid(),
      titulo: 'Innovación y Gestión', 
      color_primario: '#FF8A29',
      color_secundario: '#FFEEDF'
    }
]);
  
  // ! Registrar colaborador 
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    //Spread Operator
    // Cuanndo usamos el spread operator realizamos una copia del arreglo y le pasamos el que queremos agregar
    actualizarColaboradores([...colaboradores, colaborador])
  }
  // ! Eliminar colaborador 
  const eliminarColaborador = (id, nombre) => {
    console.log("Eliminando al colaborador con id y nombre", id, nombre)
    const listaNuevaColaboradores = colaboradores.filter( ( colaborador ) => colaborador.id != id  )
    actualizarColaboradores(listaNuevaColaboradores); 
  }
  // ! Colocar colaborador favorito 
  const asignarFavoritoColaborador = (id, nombre) => {
    const listaNuevaColaboradores = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;  
      }
      return colaborador; 
    })
    actualizarColaboradores(listaNuevaColaboradores); 
  }
   
  //? Funciones para los equipos 

  // ! Actualizar color de equipo 
  
  const actualizarColorEquipo = (color, id) => {
    console.log("Actualizando ", color, id)
    const equipoActualizado = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.color_secundario = color; 
      } 
      return equipo; 
    })
    setEquipos(equipoActualizado); 
  }
  // ! Crear equipo 
  
  const crearEquipo = (equipo) => {
    setEquipos([...equipos, equipo])
    console.log(equipos);
  } 


  function mostrarFormulario() {
    setEstadoFormulario(!estadoFormulario)
  }

  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header />
      {/* {estadoFormulario ? <Formulario /> : <div className='invicible'></div>} */}
      { estadoFormulario && <Formulario 
        equipos = { equipos.map((el) => el.titulo ) }
        fCrearColaborador = { registrarColaborador }
        crearEquipo = { crearEquipo } 
        />
      } 
      <MiOrg aFormulario = { mostrarFormulario } />
      {
        // Uso del método filter 
        equipos.map((equipo,index) => {
          return <Equipo 
            datos = { equipo } 
            key = { equipo.titulo } 
            colaboradores = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo ) }
            asignarFavoritoColaborador = {asignarFavoritoColaborador}
            eliminarColaborador = { eliminarColaborador }
            actualizarColorEquipo = { actualizarColorEquipo }
          />
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
