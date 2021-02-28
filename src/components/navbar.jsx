import React, { Component } from "react";
import { Row, Col, Button, Container,Navbar,Nav,Form,FormControl } from "react-bootstrap";
import "./searchEngine.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
class MyNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="purple">
          <Navbar.Brand href="#home">MyWeather</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar>
    
      </>
    );
  }
}
export default connect(mapStateToProps)(MyNavbar);