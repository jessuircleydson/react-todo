import React from "react";

export default class InputTask extends React.Component {
  constructor(props) {
    super(props);
  }

  getNewValeu(e) {
    return e.target.value;
  }
 
  render() {
    return <input type={this.props.type} placeholder={this.props.placeholder}  />
  }
}
