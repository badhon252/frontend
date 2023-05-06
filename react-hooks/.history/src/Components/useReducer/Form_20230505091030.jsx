import React, { useReducer } from "react";

const initialValue = {
  name: "",
  email: "",
  checkBox: false,
};

export default function Form() {
  function submitHandler(e) {
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="mail" placeholder="Email" />
        <br />
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            name=""
            id=""
            value="checkedValue"
            placeholder="CheckBox"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
