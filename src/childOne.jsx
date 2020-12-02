import React, { Fragment } from "react";

class ChildOneComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  sendDataToPattern() {
    this.setState({ data: this.state.data + 1 }, () => {
      this.props.dataToPattern(this.state.data);
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Child Component One</h1>
        <button
          onClick={() => {
            this.sendDataToPattern();
          }}
        >
          SendDataToPattern
        </button>
      </Fragment>
    );
  }
}

export default ChildOneComponent;
