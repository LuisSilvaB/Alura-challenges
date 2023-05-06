import './equipo.css'
import './equipo-title.css'
import './colaboradores.css'
import Colaborador from '../Colaborador';
//! Para realizar el efecto de opaciodad que cambia tanto el fondo como la card en colores que tienen concordancia usamos la libreria ' hex-to-rgba '  

import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

  // Desturcturaciom 
  // * En destructuracion deben tener el mismo nombre las variables
  const { color_primario, color_secundario, titulo, id} = props.datos; 
  const { colaboradores } = props; 
  const { eliminarColaborador } = props; 
  const { actualizarColorEquipo } = props; 
  const { asignarFavoritoColaborador } = props; 
  // console.log(color_primario, color_secundario, titulo);
  return (
    <>
      { colaboradores.length > 0 &&
        <div className="equipo" style={{ backgroundColor: hexToRgba(color_secundario, 0.6)}} >
          <input 
            type='color'
            value={color_secundario}
            onChange={ ( evento ) => {
                actualizarColorEquipo(evento.target.value, id)
            } }
          />
          <h3 className='equipo__title' style={{ borderBottomColor:  hexToRgba(color_secundario, 0.6) }}>{titulo}</h3>
          <div className="colaboradores">
            {
              colaboradores.map((colaborador, index) => 
                <Colaborador 
                  datos = { colaborador } 
                  key = { index } 
                  colorPrimario = { color_secundario }
                  eliminarColaborador = { eliminarColaborador }
                  asignarFavoritoColaborador = { asignarFavoritoColaborador }
                />
              )
            }
          </div>
        </div>
      }
    </>
    )
}
export default Equipo; 