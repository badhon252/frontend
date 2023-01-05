import Classes from "./Todo.module.css"
export default function CreateTodo() {
  return (
    <div>
        <h1>To-Do's: </h1>
        <input type="text" className={Classes.input} placeholdar="Input your To-Do's here!"></input>
        <button className={Classes.btn}>Add</button>
    </div>
  )
}
