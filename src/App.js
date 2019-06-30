import React, { PureComponent } from "react";
import "./app.scss";

class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Hello worlds {this.props.message}</div>;
  }
}

export default Test;
