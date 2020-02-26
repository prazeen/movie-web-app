import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./components/home-page";
import AboutPage from "./components/About";
// import Services from "./components/Services";
import Navbar from "./components/Navbar";
// import Product from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleMoviesPage from "./components/singleMovie-page";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={SingleMoviesPage} />
          {/* <Route path="/Services" exact component={ServicesPage} />
          <Route path="/Products" component={ProductsPage} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
