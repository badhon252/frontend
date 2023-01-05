import Classes from "./Todo.module.css"
export default function ShowTodo({todo}) {
  return (
    <div className={Classes.todoLists}>
        <h3>Todo List:</h3>
        <ul className={Classes.ul}>
            {todo.map(item=>{
                return (
                  if(todo.length!==0){
                    <li className={Classes.li} key={item.id}>{item.text}</li>
                  }else{
                    <li className={Classes.li} key={item.id}>No To-Do's</li>
                  }
                )
            })}
        </ul>
    </div>
  )
}

