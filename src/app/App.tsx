import React from "react";
import logo from "../../src/logo.svg";
import "../App.css";
import { Routing } from "../pages";
import { withProviders } from "./providers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routing />
    </div>
  );
}

export default withProviders(App);
