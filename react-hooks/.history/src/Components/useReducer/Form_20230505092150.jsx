import React, { useReducer, useState } from "react";

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

  function nameHandler(e) {
    setName(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function submitHandler(e) {
    console.log(e);
  }

  return (
    <div>
      <h2>Registration Form</h2>
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
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            name=""
            id=""
            placeholder="CheckBox"
            value={checkbox}
            onChange={() => setCheckbox((prev) => !prev)}
          />
          Agree with <a href="#">terms</a> and <a href="#">conditions</a>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
