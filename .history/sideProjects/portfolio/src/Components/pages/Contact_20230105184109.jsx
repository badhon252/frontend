import React from "react";
import Navs from "../Header/Navbar/Navs";
import Todo from "./Todo";
import Classes from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Navs />

      <div className={Classes.todo}>
        <h1>To-Do's: </h1>
        <Todo />
      </div>
    </div>
  );
}
