import React, { Component } from "react";
import { fetchData } from "../../api/index";
import CountryPicker from "../CountryPicker/CountryPicker";
import CountryHeader from "./CountryHeader";
import LineChart from "../Charts/line";
import ApexLineChart from "../Charts/ApexLineChart";
import Cards2 from "../Cards/Cards2";
import Cards from "../Cards/Cards";
import { fetchData2 } from "../../api/index";
import { fetchData4 } from "../../api/index";
import styles from "./Country.module.css";

class Country extends Component {
  state = {
    data: {},
    data2: {},
    country: "",
  };

  async componentDidMount() {
    const FetchData = await fetchData();
    this.setState({ data: FetchData });
    const fetch_data3 = await fetchData2();
    this.setState({ data2: fetch_data3 });
  }

  handleCountryChange = async (country) => {
    const FetchData = await fetchData(country);
    this.setState({ data: FetchData, country: country });
    const FetchData2 = await fetchData4(country);
    this.setState({ data2: FetchData2, country: country });
  };

  render() {
    const { data, country, data2 } = this.state;
    console.log(data2);
    return (
      <React.Fragment>
        <CountryHeader />
        <div className={styles.countrycontent}>
          <div className={styles.picker}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </div>
          <Cards2 data={data2} />
          <div className={styles.linechart}>
            <LineChart data={data} country={country} />
          </div>
          {/* <ApexLineChart data={data} country={country} /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Country;
