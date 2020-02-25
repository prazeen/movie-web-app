import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import PageNotFound from "./404";
import Product from "./Product";
class Routing extends Component {
  state = {
    isAuthenticated: false
  };
  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <HomePage {...props} data="dhbdhd" />}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" exact component={Services} />
          <Route path="/services/:id" component={Product} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect to="/page-not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routing;
