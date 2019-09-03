import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      username: "",
      password: "",
      entryState: "name",
      headerMessage: "Please enter your",
      //Temporary
      result: "",
      info: ""
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.myProceedHandler = this.myProceedHandler.bind(this);
    this.authUser = this.authUser.bind(this);
  }
  // Auth functions
  authUser(user, pass) {
    var data = require("./auth");
    var found = false;
    for (var i = 0; i < data.users.length; i++) {
      if (data.users[i].id === user && data.users[i].password === pass) {
        found = true;
        break;
      }
    }
    return found;
  }

  determineRole(user) {
    var users = require("./users")
    var role = "unknown"
    for (var i = 0; i < users.length; i++) {
      if (user === users[i].id) {
        role = users[i].role
      }
    }

    return role;
  }

  determinePermissions(user){
    var roles = require("./roles")
    var permissions = []
    for(var i = 0; i < roles.length; i++) {
      if (user === roles[i] ) {
        permissions = roles[i].permissions;
        break;
      }
    }
    return permissions;
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
      if (this.authUser(this.state.username, this.state.password))
        this.setState({ result: "Correct" });
      else this.setState({ result: "Incorrect id or password" });
    } else {
      this.setState({ entryState: "password" });
      this.setState({ result: "" });
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
          <p>
            {this.state.headerMessage} {this.state.entryState}:
          </p>
          {userInputValue}
        </form>
        <button onClick={this.myProceedHandler}> Proceed </button>
        <p> {this.state.result} </p>
        <p> {this.state.info} </p>
      </div>
    );
  }
}
