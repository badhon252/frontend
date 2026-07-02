import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" />
        <label className="form-check-label">
          <input
            type="checkbox"
            classNamw="form-check-input"
            name=""
            id=""
            value="checkedValue"
          />
          Display value
        </label>
      </form>
    </div>
  );
}
