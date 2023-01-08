import Classes from "./Todo.module.css";
export default function ShowTodo({ todo }) {
  function handleCheck(e) {
    todo.isCompleted = true;
    console.log(todo.id);
  }

  return (
    <div className={Classes.todoLists}>
      <h3>My ToDo's:</h3>
      {todo.length !== 0 ? (
        <ul className={Classes.ul}>
          {todo.map((item) => {
            return (
              <div className={Classes.list}>
                <input
                  className={Classes.checkbox}
                  type="checkbox"
                  onChange={handleCheck}
                ></input>
                <li className={Classes.li} key={item.id}>
                  {item.text}
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
