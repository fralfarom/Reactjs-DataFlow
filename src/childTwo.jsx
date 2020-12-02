import React, { Fragment } from "react";

class ChildTwoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Original data"
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Child Component Two</h1>
        <h2>{this.props.dataFromPattern}</h2>
      </Fragment>
    );
  }
}

export default ChildTwoComponent;
