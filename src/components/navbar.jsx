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
import "./navbar.scss";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
class MyNavbar extends Component {
  state = { isExpanded: false, favourites: [], id: "" };
  setIdAndTokens = (data) => {
    this.setState({ favourites: data.favourites });
    this.setState({ id: data._id });
  };
  componentDidMount = async () => {
    console.log("data");
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    await fetch("http://localhost:9000/users/me", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setIdAndTokens(data));
  };
  expandNavbar = () => {
    if (this.state.isExpanded === false) {
      this.setState({ isExpanded: true });
    } else {
      this.setState({ isExpanded: false });
    }
  };
  render() {
    return (
      <>
        <Row className="d-flex justify-content-left">
          <Container
            onClick={() => this.expandNavbar()}
            className={this.state.isExpanded ? "navbarr" : "navBar"}
          >
            <div className="innerThings">
              <img
                src="https://d24j9r7lck9cin.cloudfront.net/l/o/7/7355.1591920159.png"
                className="cnnImage"
              />
              <div className="cityNames">
                <p className="city2">FAVOURITES</p>
                {this.state.favourites.map((city) => (
                  <p className="city">{city}</p>
                ))}
              </div>
              <br />
            </div>
          </Container>
        </Row>
      </>
    );
  }
}
export default connect(mapStateToProps)(MyNavbar);
