import React from "react";
import Navs from "../Header/Navbar/Navs";
import Footer from "./Footer";
import Todo from "./Todo";
export default function Contact() {
  return (
    <div>
      <Navs />
      <h1>To-Do's: </h1>

      {/* Content gose here!  */}
      <Todo />
    </div>
  );
}
