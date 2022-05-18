import { useState } from "react"
import { TodoList } from "./TodoList"
import styles from './Todo.module.css'

export const Todo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")

    return (
        <div>

            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />

            <button onClick={(e) => {
                setTodos([...todos, { id: Date.now(), value: value }])
                setValue("")
            }}>Add Todo</button>


            {todos.map((todo) => (
                <div className={styles.Todo}>
               <input type="checkbox"  />
              <TodoList todo={todo} />
                </div>
            ))}
        </div>
    )


}