import axios from "axios";

const url = "https://covid19.mathdro.id/api";

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
          TotalConfired,
          NewDeaths,
          TotalDeaths,
          TotalRecovered,
        },
      },
    } = await axios.get("https://api.covid19api.com/summary");
    return {
      NewConfirmed,
      TotalConfired,
      NewDeaths,
      TotalDeaths,
      TotalRecovered,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
    }));
  } catch (error) {
    console.log(error);
  }
};
