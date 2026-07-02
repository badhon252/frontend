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

  function submitHandler(e) {
    e.preventDefault();
    // console.log(state);
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => dispatch({ type: "name", name: e.target.value })}
        />
        <input
          type="email"
          name="mail"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch({ type: "email", email: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) =>
            dispatch({ type: "occupation", occupation: e.target.value })
          }
        />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <Dashboard {...state} />
    </div>
  );
}
