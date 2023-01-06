import React from "react";
import Navs from "../Header/Navbar/Navs";
import Todo from "./Todo";
import Classes from "../Todo/Todo.module.css";

export default function Contact() {
  return (
    <div>
      <Navs />

      <div className={Classes.todo}>
        <Todo />
      </div>
    </div>
  );
}
