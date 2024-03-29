import React, { Fragment } from "react";

const WithCounter = (Component) => {
  class NewComponent extends React.Component {
    //! Because of closure(encapsulation), value of count wouldn't conflict.
    state = {
      count: 0,
    };

    render() {
      return <Fragment></Fragment>;
    }
  }
  return NewComponent;
};

export default WithCounter;
