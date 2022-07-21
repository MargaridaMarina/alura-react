import React from 'react';
import Item from './item';
import style from './Lista.module.scss';
import {ITarefa} from '../../types/tarefas'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Tarefas do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;