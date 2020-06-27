import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards2.module.css";
import cx from "classnames";
// import loader from "../assets/loader.gif";

const Cards2 = ({
  data: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  if (!NewConfirmed) {
    return <h2 style={{ color: "#000" }}>Getting Data...</h2>;
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Confirmed)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>New Confirmed</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={NewConfirmed}
                  duration={2}
                  separator=","
                />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Deaths)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>New Deaths</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={NewDeaths} duration={2} separator="," />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Recovered)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>New Recovered</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={NewRecovered}
                  duration={2}
                  separator=","
                />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Confirmed)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Confirmed</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={TotalConfirmed}
                  duration={2}
                  separator=","
                />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Deaths)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={TotalDeaths}
                  duration={2}
                  separator=","
                />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card2, styles.Recovered)}
          >
            {" "}
            {/*we use cx to use multiple styles*/}
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Recovered</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={TotalRecovered}
                  duration={2}
                  separator=","
                />
              </Typography>
              {/* <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
              <Typography variant="body2">
                Number of Confirmed Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Cards2;