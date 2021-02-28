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
import "./searchEngine.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToken: (token) =>
    dispatch(async (dispatch, getState) => {
      try {
        dispatch({
          type: "ADD_TOKEN",
          payload: token,
        });
      } catch (e) {
        console.log("Adding token in redux is not okay", e);
      }
    }),
 
});
class Login extends Component {
  state = {
    passwordValidation: "",
    password: "",
    email: "",
    loading: false,
    tokens: {}
  };
  changePasswordValidation = (e) => {
    this.setState({ passwordValidation: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  login = async () => {
    this.setState({ loading: true });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: this.state.passwordValidation,
        email: this.state.email,
      }),
    };
    await fetch("http://localhost:9000/users/login", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("Data",data));
    this.setState({ loading: false });
     window.location = "/home";
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

          <div className="inputDiv">
            <h5 className="rigstration d-flex justify-content-center mb-4">
              Login{" "}
            </h5>
            <Row className=" d-flex justify-content-center mb-4">
              <input
                autocomplete="off"
                type="text"
                className="email"
                placeholder="email"
                onChange={(e) => this.changeEmail(e)}
              ></input>
            </Row>

            <Row className=" d-flex justify-content-center mb-4">
              <input
                autocomplete="off"
                type="password"
                className="email"
                placeholder="password"
                onChange={(e) => this.changePasswordValidation(e)}
              ></input>
            </Row>
            <Row className=" d-flex justify-content-center mb-4">
              <button
                className="registerButton"
                variant="info"
                onClick={() => this.login()}
              >
                Login
              </button>
            </Row>
            <Row className=" d-flex justify-content-center mb-4">
              <img
                className={
                  this.state.loading ? "loadingImage" : "loadingImage d-none"
                }
                src="https://www.bluvale.com/skin/frontend/bluvale/default/images/more/loader/loading-white2.gif"
              />
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
