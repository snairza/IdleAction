import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", entryState: "name" };
  }
  myChangeHandler = event => {
    event.preventDefault();
    if (this.state.entryState === "name") {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  myProceedHandler = event => {
    event.preventDefault();
    // alert(this.state.entrystate);
    if (this.state.entryState === "password") {
      this.setState({ entryState: "name" });
    } else {
      this.setState({ entryState: "password" });
    }
  };

  clearInput = () => {};
  render() {
    let header = "";
    /*     if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = "";
    } */
    let userInput;
    if (this.state.entryState === "name") {
      userInput = <input type="input" onChange={this.myChangeHandler} />;
    } else {
      userInput = <input type="password" onChange={this.myChangeHandler} />;
    }
    return (
      <div>
        <form>
          {header}
          <p>Please enter your {this.state.entryState}:</p>
          {userInput}
        </form>
        <button onClick={this.myProceedHandler}> Proceed </button>
      </div>
    );
  }
}
