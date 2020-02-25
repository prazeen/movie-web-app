import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return <h1>Product:{this.props.match.params.id}</h1>;
  }
}

export default Product;
