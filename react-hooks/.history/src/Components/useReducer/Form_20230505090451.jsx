import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="mail" placeholder="Email" />
        <br />
        <label className="form-check-label">
          <input
            type="checkbox"
            classNamw="form-check-input"
            name=""
            id=""
            value="checkedValue"
          />
          Agree with terms and conditions
        </label>
      </form>
    </div>
  );
}
