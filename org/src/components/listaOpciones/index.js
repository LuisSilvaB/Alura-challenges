import './formulario-select.css'
import './formulario-select-option.css'
import './formulario-label.css'
import './listaOpciones.css'
const ListaOpciones = (props) => { 
 
  function manejarCambio(e) {
    props.actualizar(e.target.value)
  }
  return(
        <div className='listaOpciones'>
          <label className='formulario__label'>{props.titulo}</label>
          <select className='formulario__select' value={ props.value } onChange={manejarCambio}>
            <option className='formulario__select__option' value={''} hidden defaultValue={''}>Selecciona una opción</option>
            {
              props.equipos.map((equipo, posicion) => {
                return <option value={ equipo } className='formulario__select__option' key={posicion} >{posicion + 1} - {equipo}</option>
              })
            }
          </select>
        </div> 
    
    )
} 
export default ListaOpciones; 