
import './Campo.css'


const Campo = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  
  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitado} value={props.valor}/>
    </div>
  )
}

export default Campo