import React, {FC} from 'react'
import { Task } from '../Interfaces'
import "./styles.css"
import TodoListElement from './TodoListElement'

interface Props {
    todoList:  Task[]
    setTodoList:  React.Dispatch<React.SetStateAction<Task[]>>
}

const TodoList: FC<Props> = ({todoList, setTodoList}) => {
    return (
        <div className="todo-list">
            {todoList.map(task=> (
                <TodoListElement 
                    task={task} 
                    key={task.id} 
                    todoList={todoList}
                    setTasks={setTodoList}/>
            ))}
        </div>
    )
}

export default TodoList
