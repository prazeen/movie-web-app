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
          <Navbar.Brand href="/">Movies Ticket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/popularmovie" className="nav-link">
                Popular Movies
              </Link>
              <Link to="/comingsoon" className="nav-link ">
                Coming Soon
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
            <SearchBarWrapper>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </SearchBarWrapper>
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

const SearchBarWrapper = styled.div`
  .form-inline .form-control {
    border-radius: 100px;
  }
`;

Navbars.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array
};
export default Navbars;
