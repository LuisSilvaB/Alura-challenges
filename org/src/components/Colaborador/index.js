import './Colaborador.css' 
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
const Colaborador = (props) => {
  const { fav ,equipo, foto, nombre, puesto, id} = props.datos;
  const { colorPrimario } = props; 
  const { eliminarColaborador } = props; 
  const { asignarFavoritoColaborador } = props; 
  const eliminanionColaborador = () => {
    eliminarColaborador(id, nombre)
  }
  return (
      <div className='colaborador' >
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
          <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
          <h4>{nombre}</h4>
          <h5>{puesto}</h5>
          {
            fav ? <AiFillHeart style={{cursor:'pointer'}} color='red' onClick={() => {asignarFavoritoColaborador(id, nombre)}}></AiFillHeart> :  <AiOutlineHeart style={{cursor:'pointer'}} color='red' onClick={() => {asignarFavoritoColaborador(id, nombre)} }></AiOutlineHeart>
          }
        </div>
        <button className='eliminar' onClick={ eliminanionColaborador }>Eliminar</button>
      </div>
    )
}

export default Colaborador; 