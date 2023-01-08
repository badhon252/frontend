import Classes from "./Todo.module.css";
export default function ShowTodo({ todo }) {
  return (
    <div className={Classes.todoLists}>
      <h3>Todo List:</h3>
      <ul className={Classes.ul}>
        {todo.map((item) => {
          return (
            <li className={Classes.li} key={item.id}>
              {item.text}
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}
