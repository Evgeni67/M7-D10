import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "./login.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
class Register extends Component {
  state = {  passwordValidation: "",password: "", email: "", loading:false };
  changePasswordValidation = (e) => {
    this.setState({ passwordValidation: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  register = async () => {
    this.setState({loading:true});
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password:this.state.password,email:this.state.password,favourites:[],refreshTokens:[] })
  };
  await fetch("http://localhost:9000/users/register", requestOptions)
      .then(response => response.json())
      this.setState({loading:false});
      window.location = "/login"
  }
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

          <div className="inputDiv">
            <h5 className="rigstration d-flex justify-content-center mb-4">
              Registration{" "}
            </h5>
            <Row className=" d-flex justify-content-center mb-4">
              <input
                autocomplete="off"
                type="text"
                className="email"
                placeholder="email"
                onChange = {(e) => this.changeEmail(e)}
              ></input>
            </Row>
            <Row className="d-flex justify-content-center mb-4">
              <input
                autocomplete="off"
                type="password"
                className="email"
                placeholder="password"
                onChange = {(e) => this.changePassword(e)}
              ></input>
            </Row>
            <Row className=" d-flex justify-content-center mb-4">
              <input
                autocomplete="off"
                type="password"
                className="email"
                placeholder="password"
                onChange = {(e) => this.changePasswordValidation(e)}
              ></input>
            </Row>
            <Row className=" d-flex justify-content-center mb-4">
           
              <button className="registerButton" variant="info" onClick = {() => this.register()}>
                Register
              </button>
              </Row>
              <Row className=" d-flex justify-content-center mb-4">
              <img
                className={this.state.loading?"loadingImage":"loadingImage d-none"}
                src="https://www.bluvale.com/skin/frontend/bluvale/default/images/more/loader/loading-white2.gif"
              />
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps)(Register);
