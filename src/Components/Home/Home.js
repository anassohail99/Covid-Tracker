import React, { Component } from "react";
import "../../App.css";
import { fetchData } from "../../api/index";
import { fetchData2 } from "../../api/index";
import { fetchData3 } from "../../api/index";
import Cards from "../Cards/Cards";
import Cards2 from "../Cards/Cards2";

import Pie from "../Pie/Pie";

export default class Home extends Component {
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
    // console.log(this.state.data2);
    const { data, pakistanData, data2 } = this.state;
    return (
      <div className="App">
        <div className="header">
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
        <div className="card2">
          <h2 style={{ color: "#000", margin: "5% 0" }}>GLOBAL DATA</h2>
          <Cards2 data={data2} />
        </div>
      </div>
    );
  }
}
