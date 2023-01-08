import Classes from "./Todo.module.css";
export default function ShowTodo({ todo }) {
  return (
    <div className={Classes.todoLists}>
      <h3>My ToDo's:</h3>
      {todo.length !== 0 ? (
        <ul className={Classes.ul}>
          {todo.map((item) => {
            return (
              <li className={Classes.li} key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={Classes.noTodo}>No To-Do's Found!</div>
      )}
    </div>
  );
}
