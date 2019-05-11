import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CartesianGrid, LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
//import { Card, Grid, Typography } from "@material-ui/core";

import Spinner from "./Spinner/Spinner";

const styles = theme => ({
  container: {
    "align-items": "center",
    display: "block",
    "justify-content": "center",
    margin: "5% auto",
    width: "1200px"
  }
});

class Chart extends React.Component {
  render() {
    let altData = [];
    if(this.props.droneData) {
      altData = [];
      const droneData = this.props.droneData;
      droneData.forEach(data => {
        altData.push({
          metric: data.metric,
          timestamp: new Date(data.timestamp).toLocaleString()
        })
      })
    }
    return (
      <div className={this.props.classes.container}>
        {this.props.droneData
        ?
        <LineChart width={1200} height={600} data={altData} >
          <Line dot={false} dataKey="metric" />
          <CartesianGrid stroke="#ccc" />
          <XAxis minTickGap={50} dataKey="timestamp" />
          <YAxis label={{ value: 'Temperature', angle: -90, position: 'insideLeft' }} domain={["auto", "auto"]} />
          <Tooltip />
        </LineChart>
        :
        <Spinner />
        }
      </div>
    )
  }
}

export default withStyles(styles)(Chart);