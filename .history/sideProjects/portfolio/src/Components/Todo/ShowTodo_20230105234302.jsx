import Classes from "./Todo.module.css";
export default function ShowTodo({ todo }) {
  let handleCheck = (e) => {
    // todo.isCompleted = true;
    // const id = e.target.id;
    try {
      console.log(todo.target.value);
    } catch (error) {
      console.warn("'data' did not found!");
    }
  };

  return (
    <div className={Classes.todoLists}>
      <h3>My ToDo's:</h3>
      {todo.length !== 0 ? (
        <ul className={Classes.ul}>
          {todo.map((item) => {
            return (
              <div className={Classes.list} key={item.id}>
                <input
                  className={Classes.checkbox}
                  type="checkbox"
                  onClick={handleCheck}
                  htmlFor="checkbox"
                ></input>
                <li className={Classes.li} id="checkbox">
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
