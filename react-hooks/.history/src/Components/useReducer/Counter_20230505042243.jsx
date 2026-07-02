import React, { Fragment, useReducer } from "react";

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
