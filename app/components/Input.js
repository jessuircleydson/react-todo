import React from "react";

export default class InputTask extends React.Component {
  render() {
    return <input type={this.props.type} placeholder={this.props.placeholder} />
  }
}
