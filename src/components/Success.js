import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success " />
          <h1>Thank Your For Your Submission</h1>
          <p>Further instructions will follow</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
