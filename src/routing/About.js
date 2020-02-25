import React, { Component } from "react";

class AboutPage extends Component {
  state = {};
  handleClick = () => {
    // this.props.history.push("/");
    this.props.history.replace("/");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>About Page</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default AboutPage;
