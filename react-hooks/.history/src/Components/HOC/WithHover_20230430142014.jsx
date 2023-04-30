import { Fragment } from "react";
import WithCounter from "./WithCounter";

const WithHover = (props) => {
  const { count, increament } = props;
  return (
    <Fragment>
      <h1 onMouseOver={increament}>Hover {count} times.</h1>
    </Fragment>
  );
};

export default WithCounter(WithHover);
