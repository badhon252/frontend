import { useState } from "react";
import Classes from "./Todo.module.css";

export default function CreateTodo({ addNewTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text) {
      addNewTodo(text);
      setText("");
    } else {
      alert("Please input a To-Do!");
    }
  };

  return (
    <div>
      <h1>To-Do's: </h1>
      <input type="checkbox"></input>
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
