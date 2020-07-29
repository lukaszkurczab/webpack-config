import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from '../../data/data.txt';

class Name extends Component {
  state = {

  }

  render() {
    return (
      <h1>{this.state.name}</h1>
    );
  }
}

export default Name;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Name />, wrapper) : false;