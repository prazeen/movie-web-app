import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./routing/Home";
import AboutPage from "./routing/About";
import Product from "./routing/Product";
import Services from "./routing/Services";
import PageNotFound from "./routing/404";
import Navbar from "./routing/Navbar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/product" component={Product} />
        <Route path="/services" component={Services} />
        <Route path="page-not-found" component={PageNotFound} />
      </React.Fragment>
    );
  }
}
