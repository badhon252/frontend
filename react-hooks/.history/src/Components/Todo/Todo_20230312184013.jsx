import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Classes from "./Todo.module.css"


const Todo = () => {
    const {todoItem, todoInput, btn, todoItems, todos, disBtn, clicked} = Classes;

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [myClass, setMyClass] = useState("");
    const [isCecked, setIsCecked] = useState(false);

    function addTodo(e){
        e.preventDefault();
        const myinputItem ={
                id: uuidv4,
                text: input
            }
        setTodo(oldItems=>{
            
            return [...oldItems, input]
        })
        setInput("")
        console.log(todo)
    }

    function handleCheck(e){
        console.log(e.target.id)
        if(isCecked){
            setIsCecked(prev=> !prev)
            setMyClass(clicked)
        }else{
            setMyClass("")
        }
        
    }

    return (
        <div className={todos}>
            <h1>Todo</h1>
            <form action="#" className={todoItems}>
                <input 
                className={todoInput}
                type="text" 
                placeholder="Add a todo" 
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                />
                {input?
                 <button className={btn} onClick={addTodo}>Add todo</button>
                 :
                 <button className={disBtn} onClick={addTodo} disabled>Add todo</button>
                }
               
            </form>
            <ul className="todos">
               {todo.map(item=>{
                return (
                    <li className={`${todoItem} ${!isCecked && myClass}`} 
                    key={uuidv4()} 
                    onClick={handleCheck}>
                        {item}
                    </li>
                )
               })}

            </ul>
        </div>
    );
}

export default Todo;
