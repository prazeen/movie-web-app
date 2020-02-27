import React, { Component } from "react";
import { Navbar, Form, Nav, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class Navbars extends Component {
  state = {};
  render() {
    return (
      <NavWrapper>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Movies Ticket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/popularmovie" className="nav-link">
                Popular Movies
              </Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`
  background-color: rgb(253, 183, 59);
  font-family: "Poppins";
`;

Navbars.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array
};
export default Navbars;
