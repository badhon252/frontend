import {useState} from 'react'

export default function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState(todos);

    console.log(item)

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = e =>{
     e.preventDefault();
     setTodos([input, ...todos]);
     setInput("")
    }

    const handleEdit = e =>{
        e.preventDefault();
        console.log(JSON.stringify(todos));
       
    }
    
    const handleDelete = e =>{
        e.preventDefault();

    }

  return (
    <div>
         <h1>MyTask Management system</h1>
    <section className="todo">
        <form action="#" id="form">
            <div id="addSection">
                <input type="text" id="todoInput" placeholder="Type your todo here" value={input} onChange={handleChange}/>
                <button type="submit" htmlFor="todoInput" className="btn" onClick={handleClick}>Add</button>
               
            </div>
        </form>


        <div id="todoList">
            <h1>Task Lists : </h1>

            {todos.map(todo=>{
                return(<div className="task">
                    <div className="content">
                        <input type="text" className="text" value={todo} onChange={handleEdit}/>
                    </div>
                    <div className="actions">
                        <button className="task_edit" onClick={handleEdit}>Edit</button>
                        <button className="task_delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>)
            })}

          
            {/* <div className="task">
                    <div className="content">
                        <input type="text" className="text" value="A new task" readonly>
                    </div>
                    <div className="actions">
                        <button className="task_edit"></button>
                        <button className="task_delete"></button>
                    </div>
                </div>  */}

        </div>

    </section>
    </div>
  )
}
