import {useState} from 'react'
import CreateTodo from '../Todo/CreateTodo'
import ShowTodo from '../Todo/ShowTodo'

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [visibility, setVisibility] = useState("all");

  const addNewTodo =(text) =>{
     console.log("Calling from Todo main component")
  }
  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo}/>
      <ShowTodo />
    </div>
  )
}
