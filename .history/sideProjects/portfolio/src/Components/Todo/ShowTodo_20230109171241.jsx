import Classes from "./Todo.module.css";
export default function ShowTodo({ todo, checkTodo }) {
  return (
    <div className={Classes.todoLists}>
      <h3>My ToDo's:</h3>
      {todo.length !== 0 ? (
        <ul className={Classes.ul}>
          {todo.map((item) => {
            return (
              <div className={Classes.list} key={item.id}>
                
                <li className={Classes.li} id="checkbox">
                 <input
                  className={Classes.checkbox}
                  type="checkbox"
                  onClick={checkTodo}
                  htmlFor="checkbox"
                ></input> <span> {item.text}</span> 
                </li>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className={Classes.noTodo}>No To-Do's Found!</div>
      )}
    </div>
  );
}
