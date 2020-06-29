import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchDailyData } from "../../api/index";
import loader from "../assets/Rolling-1s-200px.gif";

const Pie = ({ data: { confirmed, recovered, deaths } }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  // console.log(dailyData);
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
  ) : (
    // <div className={styles.load}>
    <h2>
      {" "}
      <img src={loader} alt="" srcset="" />
    </h2>
    // </div>
  );

  return <div>{pie}</div>;
};

export default Pie;
