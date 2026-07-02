import {useState} from 'react'

export default function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

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
        return(
            input.map((todo) =>{
                if(todo.innerText.toLowerCase === "edit"){
                    todo.innerText = "Save";
                    todo.removeAttribute("readonly");
                    todo.focus();
                    alert("work")
                }else{
                    todo.innerText = "Edit";
                    todo.SetAttribute("readonly", "readonly")
                }
            })
        )

    };
    
    const handleDelete = e =>{
        e.preventDefault();

    }

  return (
    <div>
         <h1>MyTask Management system</h1>
    <section class="todo">
        <form action="#" id="form">
            <div id="addSection">
                <input type="text" id="todoInput" placeholder="Type your todo here" value={input} onChange={handleChange}/>
                <button type="submit" for="todoInput" class="btn" onClick={handleClick}>Add</button>
               
            </div>
        </form>


        <div id="todoList">
            <h1>Task Lists : </h1>


            {todos.map(todo=>{
                return(<div class="task">
                    <div class="content">
                        <input type="text" class="text" value={todo} readonly />
                    </div>
                    <div class="actions">
                        <button class="task_edit" onClick={handleEdit}>Edit</button>
                        <button class="task_delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>)
            })}

          
            {/* <div class="task">
                    <div class="content">
                        <input type="text" class="text" value="A new task" readonly>
                    </div>
                    <div class="actions">
                        <button class="task_edit"></button>
                        <button class="task_delete"></button>
                    </div>
                </div>  */}

        </div>

    </section>
    </div>
  )
}
