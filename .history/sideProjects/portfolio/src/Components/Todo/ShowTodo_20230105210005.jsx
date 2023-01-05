import Classes from "./Todo.module.css"
export default function ShowTodo({todos}) {
  return (
    <div className={Classes.todoLists}>
        <h3>Todo List:</h3>
        <ul className={Classes.ul}>
            {/* <li className={Classes.li}>Learn React</li>
            <li className={Classes.li}>Learn Redux</li>*/}

            <li className={Classes.li}>Learn React-Redux</li> 
            
            
        </ul>
    </div>
  )
}

