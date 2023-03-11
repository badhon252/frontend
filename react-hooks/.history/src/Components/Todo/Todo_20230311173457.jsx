import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Classes} from "./Todo.module.css"

console.log(Classes)

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    function addTodo(e){
        e.preventDefault();
        setTodo(oldItems=>{
            return [...oldItems, input]
        })
        setInput("")
    }
    return (
        <div className='todos'>
            <h1>Todo</h1>
            <form action="#">
                <input type="text" 
                placeholder="Add a todo" 
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                />
                {input?
                 <button className="btn" onClick={addTodo}>Add todo</button>
                 :
                 <button className="btn" onClick={addTodo} disabled>Add todo</button>
                }
               
            </form>
            <ul className="todos">
               {todo.map(item=>{
                return <li className={Classes.todoItem} key={uuidv4()}>{item}</li>
               })}
            </ul>
        </div>
    );
}

export default Todo;
