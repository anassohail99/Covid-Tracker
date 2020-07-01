import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards2.module.css";
import cx from "classnames";
import loader from "../assets/Rolling-1s-200px.gif";

const Cards3 = ({
  data: { activeCases, newCases, newDeaths, totalCases, totalDeath, recovered },
}) => {
  if (!activeCases) {
    return (
      <h2>
        {" "}
        <img src={loader} alt="" />
      </h2>
    );
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Active Cases</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(activeCases.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number of Active Cases of COVID-19 In Pakistan{" "}
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>New Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(newDeaths.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number of New Deaths Due To COVID-19 In Pakistan{" "}
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>
                Total Recoveries From COVID-19{" "}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(recovered.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number Recoveries From COVID-19 In Pakistan{" "}
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Cases</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(totalCases.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number of Total Cases of COVID-19 In Pakistan{" "}
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>Total Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(totalDeath.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number of Total Deaths Due To COVID-19 In Pakistan{" "}
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
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom>New Cases Of COVID-19 </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(newCases.replace(/,/g, ""))}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">
                Number Of New Cases Of COVID-19 In Pakistan{" "}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Cards3;
