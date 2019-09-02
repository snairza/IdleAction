import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      username: "",
      password: "",
      entryState: "name"
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.myProceedHandler = this.myProceedHandler.bind(this);
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
    // this.setState({ userInput: "" });
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ userInput: "" });
  };

  render() {
    let header = "";
    /*     if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = "";
    } */
    let userInputValue;
    if (this.state.entryState === "name") {
      userInputValue = (
        <input
          // text={this.state.userInput}
          type="input"
          onFocus={this.clearInput}
          onChange={this.myChangeHandler}
        />
      );
    } else {
      userInputValue = (
        <input
          // text={this.state.userInput}
          onFocus={this.clearInput}
          type="password"
          onChange={this.myChangeHandler}
        />
      );
    }
    return (
      <div>
        <form>
          {header}
          <p>Please enter your {this.state.entryState}:</p>
          {userInputValue}
        </form>
        <button onClick={this.myProceedHandler}> Proceed </button>
      </div>
    );
  }
}
