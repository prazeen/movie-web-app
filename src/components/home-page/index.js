import React, { Component } from "react";
import NowPlaying from "./components/NowPlaying";
import PopularMovies from "./components/PopularMovies";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <NowPlaying />
        <PopularMovies />
      </>
    );
  }
}

export default HomePage;
