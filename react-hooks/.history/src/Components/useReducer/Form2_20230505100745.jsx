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
      return { ...state, name: action.name };
    case "email":
      return { ...state, email: action.email };
    case "occupation":
      return { ...state, occupation: action.occupation };

    default:
      state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { name, email, occupation } = state;

  function nameHandler(e) {
    // setName(e.target.value);
    dispatch({ type: name, name: e.target.value });
  }

  function emailHandler(e) {
    // setEmail(e.target.value);
    dispatch({ type: email, email: e.target.value });
  }
  function occupationHandler(e) {
    // setEmail(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // setData(() => [name, email, checkbox]);
    console.log(state);
    // dispatch({})
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={nameHandler}
        />
        <input
          type="email"
          name="mail"
          placeholder="Email"
          onChange={emailHandler}
        />
        <br />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          onChange={() =>
            dispatch({ type: occupation, occupation: e.target.value })
          }
        />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <Dashboard />
    </div>
  );
}
