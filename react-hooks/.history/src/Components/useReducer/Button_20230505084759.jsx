import React, { Fragment } from "react";

export default function Button({ data, text }) {
  return (
    <Fragment>
      <button onClick={data}>{text}</button>;
    </Fragment>
  );
}
