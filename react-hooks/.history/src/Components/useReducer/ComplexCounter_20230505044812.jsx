import React, { Fragment, useCallback, useReducer } from "react";

const initialState = {
  count: 0,
  count2: 10,
  count3: 20,
};

const increament = "increament";
const decreament = "decreament";
const increament2 = "increament2";
const decreament2 = "decreament2";

const reducer = (state, action) => {
  switch (action.type) {
    case increament:
      return { ...state, count: state.count + action.value };
    case decreament:
      return { ...state, count: state.count - action.value };
    case increament2:
      return { ...state, count2: state.count2 + action.value };
    case decreament2:
      return { ...state, count2: state.count2 - action.value };

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

      <h2>Count2: {state.count2}</h2>
      <button onClick={() => dispatch({ type: increament2, value: 1 })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: decreament2, value: 1 })}>
        decreament
      </button>
    </Fragment>
  );
}
