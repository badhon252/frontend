import React, { Fragment, useReducer } from "react";

const initialState = {
  count: 0,
};

const increament = "increament";
const decreament = "decreament";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      break;

    default:
      break;
  }
};

export default function Counter() {
  useReducer(reducer, initialState);
  return (
    <Fragment>
      <h2>Count: 0</h2>
      <button>increament</button>
      <button>decreament</button>
    </Fragment>
  );
}
