import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}
