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
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    console.log("called");
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar name="hdhdhdh" arr={[]}>
          Hello
        </Navbar>
        <h1 onClick={this.handleIncrement}>
          Your counter is :{this.state.count}
        </h1>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={SingleMoviesPage} />
          <Route path="/popularmovie" component={PopularMovies} />
          {/* <Route path="/Services" exact component={ServicesPage} />
          <Route path="/Products" component={ProductsPage} /> */}
          <Route path="/uncontroll" component={UnControlComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
