import {useState} from 'react';

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    return (
        <div className='todos'>
            <h1>Todo</h1>
            <form action="#">
                <input type="text" placeholder="Add a todo"/>
                <button className="btn">Add todo</button>
            </form>
            <ul className="todos">
               
            </ul>
        </div>
    );
}

export default Todo;
