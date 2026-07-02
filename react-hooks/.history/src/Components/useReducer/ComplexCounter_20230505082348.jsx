import React, { Fragment, useReducer } from "react";
import Button from "./Button";

const initialState = {
  count: 0,
  count2: 10,
  count3: 20,
};

const increament = "increament";
const decreament = "decreament";
const increament2 = "increament2";
const decreament2 = "decreament2";

const value = {
  count: 0,
};

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
  //   const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <h2>Count: {state.count}</h2>
      <Button
        data={() => dispatch({ type: increament, value: 1 })}
        text={" increament by 1"}
      />
      <Button
        data={() => dispatch({ type: increament, value: 1 })}
        text={" decreament by 1"}
      />
      <h2>Count: {state.count2}</h2>
      <Button
        data={() => dispatch({ type: increament, value: 1 })}
        text={" decreament by 1"}
      />{" "}
      <Button
        data={() => dispatch({ type: increament, value: 1 })}
        text={" decreament by 1"}
      />
    </Fragment>
  );
}
