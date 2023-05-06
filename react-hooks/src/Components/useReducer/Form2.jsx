import React, { useState, useReducer } from "react";
import Dashboard from "./Dashboard";

const initialValue = {
  id: 1,
  name: "",
  email: "",
  occupation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "occupation":
      return { ...state, occupation: action.payload };
    case "id":
      return { ...state, id: state.id + Math.floor(Math.random() * 10000) };

    default:
      return state;
  }
};

export default function Form2() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { name, email, occupation } = state;

  const [credentials, setCredentials] = useState([
    {
      id: 1,
      email: "dev.khalidhossain@gmail.com",
      name: "khalid Hossain",
      occupation: "Frontend Engineer",
      submit: true,
    },
    {
      id: 2,
      email: "khalidhossain@gmail.com",
      name: "Badhon",
      occupation: "Software Engineer",
      submit: true,
    },
  ]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "id" });
    setCredentials([...credentials, state]);
    console.log(credentials);
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
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <br />
        <input
          type="email"
          name="mail"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) =>
            dispatch({ type: "occupation", payload: e.target.value })
          }
        />
        <br />
        {name && email && occupation && <button>Submit</button>}
      </form>
      <hr />
      <Dashboard data={credentials} />
    </div>
  );
}
