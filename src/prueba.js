import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

class DepartamentosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
  }

  render() {
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            console.log("Hola");
          }}
        >
          Open form dialog
        </Button>
      </Fragment>
    );
  }
}

export default DepartamentosComponent;
