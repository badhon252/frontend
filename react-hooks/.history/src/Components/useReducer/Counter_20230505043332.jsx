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
      return { ...state, count: state.count + 1 };
    case decreament:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: increament })}>increament</button>
      <button onClick={() => dispatch({ type: decreament })}>decreament</button>

      <h2>Count2: {state2.count}</h2>
      <button onClick={() => dispatch2({ type: increament })}>
        increament
      </button>
      <button onClick={() => dispatch2({ type: decreament })}>
        decreament
      </button>
    </Fragment>
  );
}
