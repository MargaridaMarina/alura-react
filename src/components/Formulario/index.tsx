import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../Botao'
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component <{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){/*evento de formulario vindo de uma tag formulario do html*/
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    this.setState({/*resetando relogio*/
      tarefa:"",
      tempo:"00:00"
    })
  }
  render(){
    return(/*bind associa funcao a outro escopo*/
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}> 
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
            placeholder="O que você quer estudar"
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
              value={this.state.tempo}/*valor atual do input*/
              onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;