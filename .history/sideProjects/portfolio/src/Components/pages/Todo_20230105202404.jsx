import {useState} from 'react'
import CreateTodo from '../Todo/CreateTodo'
import ShowTodo from '../Todo/ShowTodo'

export default function Todo() {
  const [text, setText]=useState([]);


  const addNewTodo =(text) =>{
      setTodo(text)
      alert(text)
  }
  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo}/>
      <ShowTodo />
    </div>
  )
}
