import Classes from "./Todo.module.css"
export default function ShowTodo({todo}) {
  return (
    <div className={Classes.todoLists}>
        <h3>Todo List:</h3>
            {todo.map(item=>{
              return (
                  <ul className={Classes.ul}>
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

