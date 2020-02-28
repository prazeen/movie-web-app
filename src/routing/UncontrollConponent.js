import React, { Component } from "react";

class UnControlComponent extends Component {
  handleName = React.createRef();
  submit = e => {
    e.preventDefault();
    console.log(this.handleName.current.value);
  };
  render() {
    return (
      <form onSubmit={this.submit} action="">
        <input
          defaultValue={this.props.name}
          ref={this.handleName}
          type="text"
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

UnControlComponent.defaultProps = {
  name: "Ram",
  address: "Tinkune"
};

export default UnControlComponent;
