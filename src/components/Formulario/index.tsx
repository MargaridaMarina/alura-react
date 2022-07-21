import React, {useState} from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../Botao'
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){
  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){/*evento de formulario vindo de uma tag formulario do html*/
    evento.preventDefault();
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    setTarefa("")
    setTempo("00:00")
  }

  return(/*bind associa funcao a outro escopo*/
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}> 
    <div className={style.inputContainer}>
      <label htmlFor="tarefa">
        Adicione uma nova tarefa
      </label>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        value={tarefa}
        onChange={evento => setTarefa(evento.target.value)}
        placeholder="O que você quer fazer"
        required
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="tempo">
        Tempo
      </label>
      <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}/*valor atual do input*/
          onChange={evento => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          required
        />
      </div>
    <Botao type="submit">
      Adicionar
    </Botao>
    </form>
  )
}

export default Formulario;