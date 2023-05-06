import React, { useReducer, useState } from "react";
import Dashboard from "./Dashboard";

const initialValue = {
  name: "",
  email: "",
  occupation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
      break;
    case "name":
      return { ...state, email: action.payload };
      break;
    case "name":
      return { ...state, occupation: action.payload };
      break;

    default:
      break;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { name, email, occupation } = state;

  //   function nameHandler(e) {
  //     // setName(e.target.value);
  //   }

  //   function emailHandler(e) {
  //     // setEmail(e.target.value);
  //   }

  function submitHandler(e) {
    e.preventDefault();
    // setData(() => [name, email, checkbox]);
    console.log(e.target);
    // dispatch({})
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="mail" placeholder="Email" />
        <br />
        <input type="text" name="occupation" placeholder="Occupation" />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <Dashboard />
    </div>
  );
}
