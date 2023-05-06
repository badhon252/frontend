import React, { useReducer, useState } from "react";
import Dashboard from "./Dashboard";

// const initialValue = {
//   name: "",
//   email: "",
//   checkBox: false,
// };

export default function Form() {
  //   const [state, dispatch] = useReducer(reducer, initialValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState([]);

  function nameHandler(e) {
    // setName(e.target.value);
  }

  function emailHandler(e) {
    // setEmail(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // setData(() => [name, email, checkbox]);
    // console.log(data);
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
          onChange={nameHandler}
        />
        <input
          type="email"
          name="mail"
          placeholder="Email"
          value={email}
          onChange={emailHandler}
        />
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
