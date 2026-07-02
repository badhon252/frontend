import React, { Fragment } from "react";

const WithCounter = (Component) => {
  class NewComponent extends React.Component {
    //! Because of closure(encapsulation), value of count wouldn't conflict.
    state = {
      count: 0,
    };

    increament = () => {
      this.setState((prev) => prev.count + 1);
      console.log("Clicked!");
    };

    render() {
      return (
        <Fragment>
          <Component count={this.state.count} increament={this.increament} />
        </Fragment>
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
