import React from "react";

export default function Button({ data, text }) {
  return <button onClick={data}>{text}</button>;
}
