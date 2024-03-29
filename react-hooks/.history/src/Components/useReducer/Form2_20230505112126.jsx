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
    case "email":
      return { ...state, email: action.payload };
    case "occupation":
      return { ...state, occupation: action.payload };

    default:
      state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { name, email, occupation } = state;
  const [submit, setsubmit] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    // dispatch({ type: "submitted", payload: true });
    console.log(state);
    setsubmit((prev) => !prev);
    return { state: "" };
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
        <button>Submit</button>
      </form>
      <hr />
      {submit && <Dashboard {...state} />}
    </div>
  );
}
