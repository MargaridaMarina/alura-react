import React, {useState} from 'react';
import Item from './item';
import style from './Lista.module.scss';

function Lista(){
  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
  },{
    tarefa: 'Javascript',
    tempo: '01:00:00'
  },{
    tarefa: 'Typescript',
    tempo: '03:00:00'
  }])
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={()=>{
        setTarefas([...tarefas,{tarefa:"Estudar estado", tempo:"05:00:00"}])
      }}>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}  /* chave para linkar o item no Virtual DOM no DOM real */
            /* o React cria um DOM virtual em memória e só atualiza o DOM real quando algo dentro desse Virtual DOM realmente é atualizado */
            tarefa={item.tarefa}
            tempo={item.tempo}  
          />
        ))}
    </ul>
    </aside>
  )
}

export default Lista;