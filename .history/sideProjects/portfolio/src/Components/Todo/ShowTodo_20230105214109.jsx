import Classes from "./Todo.module.css";
export default function ShowTodo({ todo }) {
  return (
    <div className={Classes.todoLists}>
      <h3>My ToDo's:</h3>
      {todo.length !== 0 ? (
        todo.map((item) => {
          return (
            <ul className={Classes.ul}>
              <input type="checkbox"></input>
              <li className={Classes.li} key={item.id}>
                {item.text}
              </li>
            </ul>
          );
        })
      ) : (
        <div className={Classes.noTodo}>No To-Do's Found!</div>
      )}
    </div>
  );
}
