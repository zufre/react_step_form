import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lasrtName, email, occupation, city } = this.state;
    const values = { firstName, lasrtName, email, occupation, city };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonaleDetails</h1>;

      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
