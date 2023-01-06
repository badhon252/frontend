import Classes from "./Todo.module.css"
export default function ShowTodo({todo}) {

    const handleCheck = (e)=>{
      // todo.isCompleted = true;
      const id = e.target.id;
        console.log(id);
    }

  return (
    <div className={Classes.todoLists}>
        <h3>My ToDo's:</h3>
        {todo.length!==0?
           <ul className={Classes.ul}>
            {todo.map(item=>{
                return ( 
                 <div className={Classes.list} key={item.id}>
                    <input className={Classes.checkbox} type="checkbox" onChange={handleCheck} value={}></input> 
                    <li className={Classes.li} >{item.text}</li>
                 </div>
                   )}
            )}
            </ul> : <div className={Classes.noTodo}>No To-Do's Found!</div>
        }
       
    </div>
  )
}

