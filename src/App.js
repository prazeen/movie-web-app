import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./components/home-page";
import AboutPage from "./components/home-page/components/About";
// import Services from "./components/Services";
import Navbar from "./components/Navbar";
// import Product from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleMoviesPage from "./components/singleMovie-page";
import PopularMovies from "./components/home-page/components/PopularMovies";
import UnControlComponent from "./routing/UncontrollConponent";
import ComingSoon from "./components/coming-soon/components/ComingSoon";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar name="hdhdhdh" arr={[]}>
          Hello
        </Navbar>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={SingleMoviesPage} />
          <Route path="/popularmovie" component={PopularMovies} />
          <Route path="/about" component={AboutPage} />

          {/* <Route path="/Services" exact component={ServicesPage} />
          <Route path="/Products" component={ProductsPage} /> */}
          <Route path="/uncontroll" component={UnControlComponent} />
          <Route path="/comingsoon" component={ComingSoon} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
