import React, { Fragment, useCallback, useReducer } from "react";

const initialState = {
  count: 0,
};

const increament = "increament";
const decreament = "decreament";

const reducer = useCallback;

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: increament })}>increament</button>
      <button onClick={() => dispatch({ type: decreament })}>decreament</button>
    </Fragment>
  );
}
