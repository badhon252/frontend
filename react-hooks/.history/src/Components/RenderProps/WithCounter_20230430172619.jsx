import React, { Fragment } from "react";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

const WithCounter = (Component) => {
  class NewComponent extends React.Component {
    //! Because of closure(encapsulation), value of count wouldn't conflict.
    state = {
      count: 0,
    };

    increament = () => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    };

    render() {
      return (
        <Fragment>
          <HoverCounter count={this.state.count} increament={this.increament} />
        </Fragment>
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
