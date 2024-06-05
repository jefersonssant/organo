import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <Campo
          label='Nome' placeholder="Digite seu nome" obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
       />
      <Campo
          label='Cargo' placeholder="Digite seu cargo" obrigatorio={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
      />
      <Campo
          label='Imagem' placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
       />
      <ListaSuspensa 
          label='Time' 
          itens={props.times} obrigatorio={true}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
      <Botao texto='Criar Card' 
      />
      </form>
      <form onSubmit={(evento) => { evento.preventDefault()
        props.cadastrarTime({nome: nomeTime, cor: corTime})
      }}>
      <h2>Preencha os dados para criar um novo time</h2>
      <Campo
          label='Nome' 
          placeholder="Digite o nome do time" 
          obrigatorio
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
       />
      <Campo 
          label='Cor'
          type='color' 
          placeholder="Digite a cor do time" 
          obrigatorio
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
      />
      <Botao texto='Criar um novo time' 
      />
      </form>
    </section>
  )
}

export default Formulario