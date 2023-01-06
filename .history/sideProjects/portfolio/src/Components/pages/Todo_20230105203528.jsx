import {useState} from 'react'
import CreateTodo from '../Todo/CreateTodo'
import ShowTodo from '../Todo/ShowTodo'

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTodo =(text) =>{
      console.log(text)
  }
  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo}/>
      <ShowTodo />
    </div>
  )
}
