import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Receber o computador', done: false },
    { id: 2, name: 'Onboarding com Renata', done: false },
    { id: 3, name: 'Estudar documentos do RH', done: false },
    { id: 4, name: 'Assinar documentos de compliance', done: false },
    { id: 5, name: 'Onboarding com Tech Manager', done: false },
    { id: 6, name: 'Ler documentação do Jovian', done: false },
    { id: 7, name: 'Aprender a usar o Apolion', done: false },
    { id: 8, name: 'Participar da Daily', done: false },
    { id: 9, name: 'Participar da Planning', done: false },
    { id: 10, name: 'Concluir primeira tarefa', done: false },
  ]);


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas- CAPTALYS</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}
export default App;