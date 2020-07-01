import React, { Component } from "react";
import { fetchData } from "../../api/index";
import CountryPicker from "../CountryPicker/CountryPicker";
import CountryHeader from "./CountryHeader";
import LineChart from "../Charts/line";
import Cards4 from "../Cards/Card4";
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
  }

  handleCountryChange = async (country) => {
    const FetchData = await fetchData(country);
    this.setState({ data: FetchData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <CountryHeader />
        <div className={styles.countrycontent}>
          <div className={styles.picker}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </div>
          <Cards4 data={data} />
          <div className={styles.linechart}>
            <LineChart data={data} country={country} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Country;
