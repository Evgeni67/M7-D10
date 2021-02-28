import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./searchEngine.css";
import { connect } from "react-redux";
import {BsFillStarFill as BsStar} from "react-icons/bs"
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  changeWeather: (city) =>
    dispatch(async (dispatch, getState) => {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=31fe0be1c223175da748f0d57c0e32e9`,
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
  loaded: () => {
    dispatch({
      type: "LOADED",
    });
  },
  notLoaded: () => {
    dispatch({
      type: "NOT_LOADED",
    });
  },
  invalidCity: () => {
    dispatch({
      type: "INVALID_CITY",
    });
  },
  validCity: () => {
    dispatch({
      type: "VALID_CITY",
    });
  },
  startLoading: () => {
    dispatch({
      type: "START_LOADING",
    });
  },
  stopLoading: () => {
    dispatch({
      type: "STOP_LOADING",
    });
  },
});

class SearchEngine extends Component {
  dynamicTyping = (e) => {
    this.setState({ textForSearch: e.currentTarget.value });
  };
  state = {
    textForSearch: "",
    liked : false
  };
  addToFavourties = async () => {
    if(this.state.liked === false){
      this.setState({liked:true});
      //add to liked
    }else{
      this.setState({liked:false});
      //remove from liked
    }
   
  }
  changeWeatherLoading = async () => {
    this.props.startLoading();
    await this.props.changeWeather(this.state.textForSearch);
    this.props.notLoaded();
    if (!this.props.currentWeather.weather.message) {
      const that = this;
      setTimeout(function () {
        that.props.stopLoading();
        that.props.loaded();
        that.props.validCity();
      }, 1500);
    } else {
      this.props.invalidCity();
      this.props.stopLoading();
    }
  };
  render() {
    return (
      <>
        <Container className="mainSearchRow">
          <Row className="d-flex justify-content-center">
            <img
              className="searchImage"
              src="http://cdn.lowgif.com/full/24649d3b53e7a0ff-.gif"
            />
          </Row>
          <Row className="inputRow d-flex justify-content-center mb-4">
          <button className="btn2" onClick={() => this.addToFavourties()}>
            <BsStar className = {this.state.liked ? "starLiked" : "star"}/>
              <h className="search"></h>
            </button>
            <input
              type="text"
              className="inputForm"
              placeholder="   Location"
              onChange={(e) => this.dynamicTyping(e)}
            ></input>
            <button className="btn" onClick={() => this.changeWeatherLoading()}>
              <h className="search">Search</h>
            </button>
          </Row>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchEngine);
