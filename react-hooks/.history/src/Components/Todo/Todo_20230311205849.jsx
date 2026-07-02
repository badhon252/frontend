import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Classes from "./Todo.module.css"


const Todo = () => {
    const {todoItem, todoInput, btn, todoItems, todos, disBtn, clicked} = Classes;

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([
    { id: 1, text: 'Todo 1', isComplete: false },
    { id: 2, text: 'Todo 2', isComplete: true },
    { id: 3, text: 'Todo 3', isComplete: false }
  ]);
    const [isComplete, setIsComplete] = useState(false);

    function addTodo(e){
        e.preventDefault();

        setTodo(oldItems=>{
            return [...oldItems, input]
        })
        setInput("")
    }

    const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodo(updatedTodos);
  }
    // const itemStyle = {
    //     textDecoration: isComplete ? 'line-through' : 'none',
    //     color: isComplete ? 'gray' : 'black',
    //     fontWeight: isComplete ? 'normal' : 'bold'
    // };

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
                    <li className={`${todoItem}`} 
                    key={uuidv4()} 
                    id={uuidv4()} 
                    onClick={() => toggleComplete(todo.id)}>
                        {item}
                    </li>
                )
               })}

            </ul>
        </div>
    );
}

export default Todo;
