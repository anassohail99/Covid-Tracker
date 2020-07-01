import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./cards4.module.css";
import cx from "classnames";

const Cards4 = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <h2>Getting Data...</h2>;
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
            className={cx(styles.card, styles.infected)}
          >
            {" "}
            <CardContent>
              <Typography gutterBottom>Infected</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active Cases of COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography gutterBottom>Recovered</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of Recoveries from COVID-19{" "}
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography gutterBottom>Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="h5">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of Deaths From COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Cards4;
