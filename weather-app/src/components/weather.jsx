import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./searchEngine.css";
import { connect } from "react-redux";
import { WiStrongWind } from "react-icons/wi";
import { FaCloudSun } from "react-icons/fa";
import { CgCompressV } from "react-icons/cg";
const mapStateToProps = (state) => state;
class Weather extends Component {
  state = {
    //I am very sorry for this...If you see it please text and explain me how to filter the list by uniq date
    fiveDays: [
      this.props.currentWeather.weather.list[0],
      this.props.currentWeather.weather.list[7],
      this.props.currentWeather.weather.list[14],
      this.props.currentWeather.weather.list[21],
      this.props.currentWeather.weather.list[28],
    ],
  };
  getDayOfWeek(date) {
    var d = new Date(date).getDay();
    console.log(d);
    if (d === 0) {
      return "Monday";
    } else if (d === 1) {
      return "Tuesday";
    } else if (d === 2) {
      return "Wednesday";
    } else if (d === 3) {
      return "Thursday";
    } else if (d === 4) {
      return "Friday";
    } else if (d === 5) {
      return "Saturday";
    } else if (d === 6) {
      return "Sunday";
    }
  }
  render() {
    return (
      <>
        <Row>
          <Col sm={1} />
          {this.state.fiveDays.map((day) => (
            <Col sm={2} s={10}>
              {" "}
              <Container className="weatherForDay">
                <Row>
                  <Col sm={6} xs={2}>
                    <img
                      className="currentWeatherIcon"
                      src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    />
                  </Col>
                  <Col sm={6} xs={6} className="dateCol">
                    <Row>{this.getDayOfWeek(day.dt_txt.slice(0, 10))}</Row>
                    <Row className = "date">{day.dt_txt.slice(0, 10)}</Row>
                  </Col>
                </Row>
                <Row className="temperatureRow">
                  <Col sm={6} className="temperature">
                    Max{" "}
                    <h className="temp">
                      {(day.main.temp_max - 273).toFixed(0)}°C
                    </h>
                  </Col>
                  <Col sm={6} className="temperature">
                    Min{" "}
                    <h className="temp">
                      {(day.main.temp_min - 273).toFixed(0)}°C
                    </h>
                  </Col>
                </Row>
                <Row className="detailsRow first">
                  {" "}
                  <FaCloudSun className="rain" />{" "}
                  <h className="value">{day.clouds.all}%</h>
                </Row>
                <Row className="detailsRow">
                  {" "}
                  <WiStrongWind className="wind" />
                  <h className="value">{day.wind.speed}m/s</h>
                </Row>
                <Row className="detailsRow">
                  {" "}
                  <CgCompressV className="pressure" />
                  <h className="value">{day.main.pressure}hPa</h>
                </Row>
              </Container>
            </Col>
          ))}
          <Col sm={1} />
        </Row>
      </>
    );
  }
}

export default connect(mapStateToProps)(Weather);
