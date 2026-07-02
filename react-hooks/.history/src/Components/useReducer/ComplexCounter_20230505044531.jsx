import React, { Fragment, useCallback, useReducer } from "react";

const initialState = {
  count: 0,
  count2: 10,
  count3: 20,
};

const increament = "increament";
const decreament = "decreament";

const reducer = (state, action) => {
  switch (action.type) {
    case increament:
      return { ...state, count: state.count + action.value };
    case decreament:
      return { ...state, count: state.count - action.value };

    default:
      return state;
  }
};

export default function ComplexCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: increament, value: 1 })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: decreament, value: 1 })}>
        decreament
      </button>

      <h2>Count2: {state.count}</h2>
      <button onClick={() => dispatch2({ type: increament, value: 1 })}>
        increament
      </button>
      <button onClick={() => dispatch2({ type: decreament, value: 1 })}>
        decreament
      </button>
    </Fragment>
  );
}
