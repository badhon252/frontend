import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    // const [item, setItem] = useState(todos);
    
    // let uId = new Date().getTime().toLocaleString
    // uId.replace(/\s/g, '')


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = e =>{
        e.preventDefault();
        if(!input){
            alert("Input your todo first")
        }else{
            setTodos([input, ...todos]);
            setInput("")
        }
    }

    const handleEdit = (index) =>{
        console.log(index)
    }
    
    //? We will give it's index letter after calling.
    const handleDelete = index =>{
        const newTodo = todos;
           newTodo.splice(index, 1)
           setTodos([...newTodo])

    }

  return (
    <div>
         <h1>MyTask Management system</h1>
    <section className="todo">
        <form action="#" id="form">
            <div id="addSection">
                <input type="text" id="todoInput" placeholder="Type your todo here" value={input} onChange={handleChange}/>
                <button type="submit" htmlFor="todoInput" className="btn" onClick={ addTodo }>Add</button>
               
            </div>
        </form>


        <div id="todoList">
            <h1>Task Lists : </h1>

            {todos.map((todo, index)=>{
                return(
                <div className="task" >
                    <div className="content">
                        <input type="text" className="text" value={todo} onChange={handleEdit} key={uuidv4}/>
                    </div>
                    <div className="actions">
                        <button className="task_edit" onClick={()=>handleEdit(index)}>Edit</button>
                        <button className="task_delete" onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                </div>
                )
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
