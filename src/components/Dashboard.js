import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";

import Spinner from "./Spinner/Spinner";

const styles = theme => ({
  container: {
    "align-items": "center",
    display: "block",
    "justify-content": "center",
    margin: "2% auto",
    width: "450px"
  },
  item: {
    "font-size": "18px",
    padding: theme.spacing.unit * 1.5
  }
});

class Dashboard extends React.Component {
  render() {
    let calcTime, droneLength;
    if(this.props.droneData) {
      droneLength = this.props.droneData.length - 1;
      calcTime = new Date(this.props.droneData[0].timestamp - new Date().getTime()).getSeconds();
    }
    return (
      <div className={this.props.classes.container}>
        {this.props.droneData
          ?
          <Card>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid xs={4} item >
                <Typography className={this.props.classes.item}>Temperature:</Typography>
              </Grid>
              <Grid xs={8} item >
                <Typography className={this.props.classes.item}>{this.props.droneData[droneLength].metric}</Typography>
              </Grid>
              <Grid xs={4} item >
                <Typography className={this.props.classes.item}>Latitude:</Typography>
              </Grid>
              <Grid xs={8} item >
                <Typography className={this.props.classes.item}>{this.props.droneData[droneLength].latitude}</Typography>
              </Grid>
              <Grid xs={4} item >
                <Typography className={this.props.classes.item}>Longitude:</Typography>
              </Grid>
              <Grid xs={8} item >
                <Typography className={this.props.classes.item}> {this.props.droneData[droneLength].longitude}</Typography>
              </Grid>
              <Grid xs={4} item >
                <Typography className={this.props.classes.item}>Last Received:</Typography>
              </Grid>
              <Grid xs={8} item >
                <Typography className={this.props.classes.item}>{calcTime} {calcTime === 1 ? "second" : "seconds"} ago</Typography>
              </Grid>
            </Grid>
          </Card>
        :
          <Spinner />
        }
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard);