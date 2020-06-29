import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "../App.css";
import About from "./About/About";
import Home from "./Home/Home";
import Country from "./Country/Country";
import logo from "./assets/virus.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar
          className="Nav"
          position="fixed"
          style={{ background: "#271F55" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            />
            <Typography variant="h6" className={classes.title}>
              <img className="logo" src={logo} />
              <Link className="btn" to="/">
                COVID-19 TRACKER
              </Link>{" "}
            </Typography>
            <Link className="btn" to="/about">
              About
            </Link>
            <Link className="btn" to="/country">
              Country
            </Link>{" "}
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/country" component={Country} />
      </Router>
    </div>
  );
}
