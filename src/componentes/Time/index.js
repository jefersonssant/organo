import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

  const css = {backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')}



  return (
    props.colaboradores.length > 0  && <section className='time' style={css}>
      <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.nome)}/>
      <h3 style={{borderColor: props.cor}}>{props.nome}</h3>

      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => {
          return <Colaborador
            colaborador={colaborador}
            corDeFundo={props.cor}
            key={props.nome}  
            aoDeletar={props.aoDeletar}
            aoFavoritar={props.aoFavoritar}/>
        })}
      </div>
      
    </section>
  )
}

export default Time