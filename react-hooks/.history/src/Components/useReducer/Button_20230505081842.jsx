import React from "react";

export default function Button({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: increament, value: 1 })}>
      increament by 1
    </button>
  );
}
