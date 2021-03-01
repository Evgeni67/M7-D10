import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SearchEngine from "./components/searchEngine";
import Weather from "./components/weather";
import { Row, Col, Button, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/register";
import Register from "./components/login";
import "bootstrap/dist/css/bootstrap.css";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  changeWeather: (city) =>
    dispatch(async (dispatch, getState) => {
      try {
        let response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1a944dea54d850b601ad666177b6deb2",
          {
            method: "GET",
          }
        );

        let data = await response.json();
        console.log(data);
        let weather = data;
        console.log(weather);
        dispatch({
          type: "CHANGE_CURRENT_WEATHER_LOCATION",
          payload: weather,
        });
      } catch (e) {
        console.log("Fetching is not ok", e);
      }
    }),
});

/* api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
          Edit <code>src/App.js</code> and save to reload.  */
class App extends Component {
  render() {
    return (
      <>
    
        <Router>
          <Route path = "/register">
            <Login/>
            </Route>
            <Route path = "/login">
            <Register/>
            </Route>
           <Route path = "/home">
           <Navbar/>
          <SearchEngine />
          {this.props.load.loading && (
            <Row className="d-flex justify-content-center">
              <img
                className="loadingImage"
                src="https://www.bluvale.com/skin/frontend/bluvale/default/images/more/loader/loading-white2.gif"
              />
            </Row>
          )}

          {this.props.load.loaded && <Weather />}

          {this.props.load.loadedInvalidCity && !this.props.load.loading && (
            <Row className="d-flex justify-content-center">
              <p className="errorMessage">Please enter e real city</p>
            </Row>
          )}
          </Route>
        </Router>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
