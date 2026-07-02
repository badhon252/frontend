import React, { Fragment } from "react";

const WithCounter = (Component) => {
  class NewComponent extends React.Component {
    //! Because of closure(encapsulation), value of count wouldn't conflict.
    state = {
      count: 0,
    };

    increament = () => {
      this.setState((prev) => prev + 1);
    };

    render() {
      return (
        <Fragment>
          <Component />
        </Fragment>
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
