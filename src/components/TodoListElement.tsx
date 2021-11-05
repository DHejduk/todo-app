import React, {FC, FormEvent, useState, useRef, useEffect} from 'react'
import { Task } from '../Interfaces'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import { DeleteForever as DeleteIcon } from '@mui/icons-material'
import './styles.css'

interface Props{
    task: Task
    todoList: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TodoListElement: FC<Props>= ({task, todoList, setTasks}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editedTask, setEditedTask] = useState<string>(task.task)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: number) => {
        setTasks(todoList.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task))
    }
    
    const handleDelete = (id: number) => {
        setTasks(todoList.filter((task) => task.id !== id))
    }
    
    const handleSubmit = (event: FormEvent, id:number) =>{
        event.preventDefault()
        setTasks(todoList.map((task)=>(task.id === id ? {...task,task:editedTask} : task)))
        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <form className="single-task" onSubmit={(e) => handleSubmit(e, task.id)}>
            {
                edit ? (<input className="single-task-name" ref={inputRef} value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>)
                        :
                        (task.isDone ? (<s className="single-task-name">{task.task}</s> ) : (<span className="single-task-name">{task.task}</span>) )
            }
            <div>
               <span className="icon" onClick={ ()=>{
                        if(!edit && !task.isDone){
                            setEdit(!edit)
                        }
                    }
                }> <EditIcon/> 
               </span> 
               <span className="icon" onClick={() => handleDelete(task.id)}> <DeleteIcon/> </span>
               <span className="icon" onClick={() => handleDone(task.id)}> <DoneIcon/> </span>
            </div>
        </form>
    )
}

export default TodoListElement

