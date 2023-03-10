import { useState } from "react";
import Classes from "./Todo.module.css";
import shortId from "shortid";

export default function CreateTodo({ addNewTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.value !== "") {
      const todo = {
        text,
        isCompleted: false,
        createdAt: new Date(),
        id: shortId.generate(),
      };
      console.log(todo);
    }
  };
  return (
    <div>
      <h1>To-Do's: </h1>

      <input
        type="text"
        className={Classes.input}
        placeholder="Input your To-Do's here!"
        value={text}
        onChange={handleChange}
      ></input>

      <button className={Classes.btn} onClick={handleClick}>
        Add
      </button>

      <div>{text}</div>
    </div>
  );
}
