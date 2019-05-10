import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Dashboard as DashIcon, Map as LocationCity, ShowChart } from "@material-ui/icons"
import { Card, Paper, Typography } from "@material-ui/core";

import Chart from "./Chart";
import Dashboard from "./Dashboard";
import Location from "./Location";

const styles = theme => ({
  container: {
    "align-items": "center",
    display: "flex",
    "justify-content": "space-between",
    padding: "0 10px",
    margin: "0 auto",
    width: "200px"
  },
  icon: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    "font-size": "50px",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  navigation: {
    background: theme.palette.primary.main,
    margin: "0 auto",
    "text-align": "center",
    width: "200px"
  },
  navTypo: {
    color: theme.palette.secondary.main,
    "font-size": "22px"
  },
  selected: {
    color: theme.palette.selected.main,
    cursor: "pointer",
    "font-size": "50px",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "dashboard"
    }
  }

  handleDashClick = () => {
    this.setState({
      selected: "dashboard"
    })
  };

  handleChartClick = () => {
    this.setState({
      selected: "chart"
    })
  };


  handleLocationClick = () => {
    this.setState({
      selected: "location"
    })
  };



  render() {
    return (
      <React.Fragment>
        <Paper className={this.props.classes.navigation}>
          <Typography className={this.props.classes.navTypo}>
            Navigation
          </Typography>
        </Paper>
        <Card className={this.props.classes.container}>
          <DashIcon onClick={this.handleDashClick} className={this.state.selected === "dashboard" ? this.props.classes.selected : this.props.classes.icon} />
          <ShowChart onClick={this.handleChartClick} className={this.state.selected === "chart" ? this.props.classes.selected : this.props.classes.icon} />
          <LocationCity onClick={this.handleLocationClick} className={this.state.selected === "location" ? this.props.classes.selected : this.props.classes.icon} />
        </Card>
        {this.state.selected === "dashboard" && <Dashboard />}
        {this.state.selected === "chart" && <Chart />}
        {this.state.selected === "location" && <Location />}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Selector);