import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./form.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Terminal Application</h1>
      <MyForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
