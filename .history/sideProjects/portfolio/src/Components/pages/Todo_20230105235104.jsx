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

  // let handleCheck = (e)=>{
  //     // const id = e.target.id;
  //     try {
  //       console.log(e.target.value);
  //     } catch (error) {
  //       console.warn("'data' is not found!");
        
  //     }
  //   }

  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo} checkTodo={handleCheck}/>
      <ShowTodo todo={todos}/>
    </div>
  )
}
