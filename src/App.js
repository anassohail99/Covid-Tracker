import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import { fetchData } from "./api/index";
import { fetchData2 } from "./api/index";
import Cards from "./Components/Cards/Cards";
import Pie from "./Components/Pie/Pie";

export default class App extends Component {
  state = {
    data: {},
    pakistanData: {},
    data2: {},
  };

  async componentDidMount() {
    const fetch_data = await fetchData();
    const fetch_data2 = await fetchData("pakistan");
    const fetch_data3 = await fetchData2();
    this.setState({ data: fetch_data });
    this.setState({ pakistanData: fetch_data2 });
    this.setState({ data2: fetch_data3 });
  }

  render() {
    console.log(this.state.data2);
    const { data, pakistanData } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="header">
          <Header />
          <div className="cards">
            <Cards data={data} />
          </div>
        </div>
        <div className="pie">
          <div className="row">
            <div className="col-md-6">
              <h3>GLOBAL COVID PIE CHART</h3>
              <Pie data={data} />
            </div>
            <div className="col-md-6 ">
              <h3>PAKISTAN COVID PIE CHART</h3>
              <Pie data={pakistanData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
