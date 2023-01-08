import Classes from "./Todo.module.css";
export default function ShowTodo() {
  return (
    <div className={Classes.todoLists}>
      <h3>Todo List:</h3>
      <ul className={ul}>
        <li>Learn React</li>
        <li>Learn Redux</li>
        <li>Learn React-Redux</li>
      </ul>
    </div>
  );
}
