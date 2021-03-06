import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://covid-19.dataflowkit.com/v1/pakistan";

export const fetchData = async (country) => {
  let countryUrl = url;

  if (country) {
    countryUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countryUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchData2 = async () => {
  try {
    const {
      data: {
        Global: {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered,
        },
      },
    } = await axios.get("https://api.covid19api.com/summary");
    return {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchData3 = async () => {
  try {
    const url = url2;
    const data = await axios.get(url);
    const dataArray = await Object.values(data.data);
    const dataLength = dataArray.length;
    const activeCases = dataArray[0];
    const newCases = dataArray[3];
    const newDeaths = dataArray[4];
    const totalCases = dataArray[dataLength - 3];
    const totalDeath = dataArray[dataLength - 2];
    const recovered = dataArray[dataLength - 1];
    console.log(data);
    console.log(dataArray);
    return {
      activeCases,
      newCases,
      newDeaths,
      totalCases,
      totalDeath,
      recovered,
    };
  } catch (error) {
    console.log(error);
  }
};

fetchData3();

export const fetchData4 = async (country) => {
  const url3 = "https://covid-19.dataflowkit.com/v1";
  let countryUrl = url3;

  if (country) {
    countryUrl = `${url3}/${country}`;
  }
  try {
    const data = await axios.get(countryUrl);
    const dataArray = await Object.values(data.data);
    const dataLength = dataArray.length;
    const activeCases = dataArray[0];
    const newCases = dataArray[3];
    const newDeaths = dataArray[4];
    const totalCases = dataArray[dataLength - 3];
    const totalDeath = dataArray[dataLength - 2];
    const recovered = dataArray[dataLength - 1];
    return {
      activeCases,
      newCases,
      newDeaths,
      totalCases,
      totalDeath,
      recovered,
    };
  } catch (error) {
    console.log(error);
  }
};

fetchData4();

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
