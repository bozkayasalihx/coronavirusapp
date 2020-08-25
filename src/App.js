import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/coronavirus.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: "",
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  // handleCountryChange = async (country) => {
  //   console.log(country);
  // };

  async handleCountryChange(country) {
    const countryApi = await fetchData(country);
    this.setState({ data: countryApi, country });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
