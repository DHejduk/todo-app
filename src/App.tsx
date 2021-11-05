import React, {FC, FormEvent, useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Task } from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<Task[]>([])
  const [id, setId] = useState<number>(1)

  const addTask = (event: FormEvent) :void  =>{
    event.preventDefault()
    setTodoList([...todoList, {id: id, task: task, isDone: false}])
    setId(id+1)
    setTask("")
  }

  return (
    <div className="App">
      <span className="heading">Todo app</span>
      <InputField todo={task} setTodo={setTask} addTask={addTask} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      
    </div>
  );
}

export default App;
