import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchDailyData } from "../../api/index";

const Pie = ({ data: { confirmed, recovered, deaths } }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const pie = confirmed ? (
    <Doughnut
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
        options: {
          animation: { animateRotate: true },
        },
      }}
    />
  ) : null;

  return <div>{pie}</div>;
};

export default Pie;
