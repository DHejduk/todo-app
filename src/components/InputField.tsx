import React, {FC, FormEvent, useRef} from "react"
import "./styles.css"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTask: (event: FormEvent) => void
}

const InputField: FC<Props>= ({todo, setTodo, addTask}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input" onSubmit={(e) =>{
            addTask(e)
            inputRef.current?.blur()}}>
            <input className="input-field" type="input" 
                ref={inputRef}   
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Task..."/>
            <button className="input-bttn">Add task</button>
        </form>
    )
}

export default InputField
