import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
// import Header from "./Components/Header";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}
