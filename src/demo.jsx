import React, { Fragment } from "react";
import ChildOneComponent from "./childOne";
import ChildTwoComponent from "./childTwo";

class PatternComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToChildTwo: ""
    };
  }

  dataFromChildOne = (data) => {
    console.log(data);
    this.setState({ dataToChildTwo: data });
  };

  render() {
    return (
      <Fragment>
        <h1>Pattern Component</h1>
        <ChildOneComponent dataToPattern={this.dataFromChildOne} />
        <ChildTwoComponent dataFromPattern={this.state.dataToChildTwo} />
      </Fragment>
    );
  }
}

export default PatternComponent;
