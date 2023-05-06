import React, { Fragment, useReducer } from "react";

const initialState = {
  count: 0,
};

const increament = "increament";
const decreament = "decreament";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };

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
