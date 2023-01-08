import { useState } from "react";
import CreateTodo from "../Todo/CreateTodo";
import ShowTodo from "../Todo/ShowTodo";

export default function Todo() {
  const addNewTodo = (text) => {
    setTodo(text);
    alert(todo);
  };
  return (
    <div>
      <CreateTodo addNewTodo={addNewTodo} />
      <ShowTodo />
    </div>
  );
}
