import {useState} from 'react'
import CreateTodo from '../Todo/CreateTodo'
import ShowTodo from '../Todo/ShowTodo'
import shortId from "shortid"

export default function Todo() {
  const [todos, setTodo] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTodo =(text) =>{
       const todo = { 
     text,
     isCompleted: false,
     createdAt: new Date(),
     id: shortId.generate()
   }
   setTodo([todo, ...todos])
   console.log(todo);
  }
  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo}/>
      <ShowTodo />
    </div>
  )
}
