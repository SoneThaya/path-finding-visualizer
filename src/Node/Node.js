import React, { Component } from "react";

import "./node.css";

export class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="node"></div>;
  }
}

export default Node;
