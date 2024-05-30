import { useState } from 'react'
import './CampoTexto.css'


const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitado} value={props.valor}/>
    </div>
  )
}

export default CampoTexto