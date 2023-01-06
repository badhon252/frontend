import { useState } from "react"
import Classes from "./Todo.module.css"
export default function CreateTodo() {

  const [text, setText]=useState("Type you're input here!")

  return (
    <div>
        <h1>To-Do's: </h1>
        <input 
        type="text" 
        className={Classes.input} 
        placeholder="Input your To-Do's here!" 
        value={text}
        onChange={(e)=> setText(e.target.value) }
        ></input>
        <button className={Classes.btn}>Add</button>
    </div>
  )
}
