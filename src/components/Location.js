import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import Spinner from "./Spinner/Spinner";


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicnlhbmNyaWNrZXJ0IiwiYSI6ImNqdmllcjd5NjA0djE0YW4zZWJuNjF0dnkifQ.6EMoYICcBTSb0xJ-GxZ06g",
  minZoom: 5,
  maxZoom: 9
});

const styles = theme => ({
  container: {
    "align-items": "center",
    display: "block",
    "justify-content": "center",
    margin: "5% auto",
    width: "50vw"
  },
  item: {
    "font-size": "18px",
    padding: theme.spacing.unit * 1.5
  }
});

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: null
    }
  }

  render() {
    let droneLength;
    if(this.props.drone.drone) {
      droneLength = this.props.drone.drone.length - 1;
    }
    return (
      <div className={this.props.classes.container}>
        {this.props.drone.drone
          ?
          <Map // eslint-disable-next-line
            style="mapbox://styles/mapbox/streets-v9"
            center={[this.props.drone.drone[droneLength].longitude, this.props.drone.drone[droneLength].latitude]}
            zoom={[7]}
            containerStyle={{
              height: "50vh",
              width: "50vw"
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "airport-15" }}>
              <Feature coordinates={[this.props.drone.drone[droneLength].longitude, this.props.drone.drone[droneLength].latitude]}/>
            </Layer>
          </Map>
        :
          <Spinner />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drone: state.drone
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Location));